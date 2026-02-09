"use client";

import React, { useEffect, useRef } from "react";

type Props = {
  children: React.ReactNode;
  sourceCanvasId?: string;
  radius?: number;
  refraction?: number;
  blur?: number;
  className?: string;
};

export default function LiquidGlassSurface({
  children,
  sourceCanvasId = "bg-canvas",
  radius = 24,
  refraction = 0.012,
  blur = 1.6,
  className = "",
}: Props) {
  const hostRef = useRef<HTMLDivElement>(null);
  const glCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    const glCanvas = glCanvasRef.current;
    if (!host || !glCanvas) return;

    const bgCanvas = document.getElementById(sourceCanvasId) as HTMLCanvasElement | null;
    if (!bgCanvas) {
      console.warn(`LiquidGlassSurface: Missing canvas #${sourceCanvasId}`);
      return;
    }

    const glContext = glCanvas.getContext("webgl", { alpha: true, antialias: true });
    if (!glContext) return;
    
    const gl: WebGLRenderingContext = glContext;
    const bg: HTMLCanvasElement = bgCanvas;
    const hostEl: HTMLDivElement = host;
    const glEl: HTMLCanvasElement = glCanvas;
    

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const vertSrc = `
      attribute vec2 a_pos;
      varying vec2 v_uv;
      void main() {
        v_uv = (a_pos + 1.0) * 0.5;
        gl_Position = vec4(a_pos, 0.0, 1.0);
      }
    `;

    const fragSrc = `
      precision highp float;
      varying vec2 v_uv;

      uniform sampler2D u_src;
      uniform vec2 u_srcSizePx;
      uniform vec2 u_hostPosPx;
      uniform vec2 u_hostSizePx;
      uniform float u_time;
      uniform float u_refraction;
      uniform float u_blur;
      uniform float u_radiusPx;

      float sdRoundRect(vec2 p, vec2 b, float r) {
        vec2 q = abs(p) - b + vec2(r);
        return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
      }

      vec3 saturate(vec3 c, float s) {
        float g = dot(c, vec3(0.299, 0.587, 0.114));
        return mix(vec3(g), c, s);
      }

      vec4 blur9(vec2 uv, vec2 texel, float k) {
        vec4 c = texture2D(u_src, uv) * 0.16;
        c += texture2D(u_src, uv + texel * vec2( 1.0,  0.0) * k) * 0.12;
        c += texture2D(u_src, uv + texel * vec2(-1.0,  0.0) * k) * 0.12;
        c += texture2D(u_src, uv + texel * vec2( 0.0,  1.0) * k) * 0.12;
        c += texture2D(u_src, uv + texel * vec2( 0.0, -1.0) * k) * 0.12;
        c += texture2D(u_src, uv + texel * vec2( 1.0,  1.0) * k) * 0.09;
        c += texture2D(u_src, uv + texel * vec2(-1.0,  1.0) * k) * 0.09;
        c += texture2D(u_src, uv + texel * vec2( 1.0, -1.0) * k) * 0.09;
        c += texture2D(u_src, uv + texel * vec2(-1.0, -1.0) * k) * 0.09;
        return c;
      }

      void main() {
        vec2 hostPx = v_uv * u_hostSizePx;
        vec2 p = hostPx - (u_hostSizePx * 0.5);
        float d = sdRoundRect(p, u_hostSizePx * 0.5, u_radiusPx);
        float mask = smoothstep(1.0, -1.0, d);
        if (mask <= 0.0) discard;

        vec2 viewPx = u_hostPosPx + hostPx;
        vec2 srcUV = viewPx / u_srcSizePx;

        float t = u_time * 0.9;
        vec2 wave = vec2(
          sin(hostPx.y * 0.028 + t) + sin(hostPx.x * 0.018 - t * 1.2),
          cos(hostPx.x * 0.030 - t) + cos(hostPx.y * 0.020 + t * 1.1)
        ) * 0.5;

        vec2 texel = 1.0 / u_srcSizePx;
        vec2 refrUV = srcUV + wave * u_refraction;

        vec4 base = blur9(refrUV, texel, u_blur);
        vec3 col = saturate(base.rgb, 1.55);

        float edge = smoothstep(0.0, 10.0, abs(d));
        float top = 1.0 - smoothstep(0.0, u_hostSizePx.y, hostPx.y);
        vec3 spec = vec3(1.0) * (0.10 * top) * (1.0 - edge);

        float vignette = 1.0 - smoothstep(0.0, 0.85, length(p / (u_hostSizePx * 0.6)));
        col += spec;
        col *= mix(0.92, 1.06, vignette);

        gl_FragColor = vec4(col, 0.72 * mask);
      }
    `;

    function compile(type: number, src: string) {
      const sh = gl.createShader(type);
      if (!sh) return null;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(sh));
        gl.deleteShader(sh);
        return null;
      }
      return sh;
    }

    const vs = compile(gl.VERTEX_SHADER, vertSrc);
    const fs = compile(gl.FRAGMENT_SHADER, fragSrc);
    if (!vs || !fs) return;

    const prog = gl.createProgram();
    if (!prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(prog));
      return;
    }

    const quad = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

    const posLoc = gl.getAttribLocation(prog, "a_pos");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const tex = gl.createTexture();
    if (!tex) return;

    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const uSrc = gl.getUniformLocation(prog, "u_src");
    const uSrcSize = gl.getUniformLocation(prog, "u_srcSizePx");
    const uHostPos = gl.getUniformLocation(prog, "u_hostPosPx");
    const uHostSize = gl.getUniformLocation(prog, "u_hostSizePx");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRefract = gl.getUniformLocation(prog, "u_refraction");
    const uBlur = gl.getUniformLocation(prog, "u_blur");
    const uRadius = gl.getUniformLocation(prog, "u_radiusPx");

    let raf = 0;

    function resizeGLCanvas() {
      const r = hostEl.getBoundingClientRect();
      const w = Math.max(1, Math.floor(r.width * dpr));
      const h = Math.max(1, Math.floor(r.height * dpr));
      if (glEl.width !== w || glEl.height !== h) {
        glEl.width = w;
        glEl.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    const ro = new ResizeObserver(() => resizeGLCanvas());
    ro.observe(hostEl);

    function frame(t: number) {
      resizeGLCanvas();

      const hostRect = hostEl.getBoundingClientRect();

      const srcW = Math.max(1, bg.width);
      const srcH = Math.max(1, bg.height);

      gl.useProgram(prog);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, tex);

      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, bg);

      gl.uniform1i(uSrc, 0);
      gl.uniform2f(uSrcSize, srcW, srcH);

      gl.uniform2f(uHostPos, hostRect.left, hostRect.top);
      gl.uniform2f(uHostSize, hostRect.width, hostRect.height);

      gl.uniform1f(uTime, t * 0.001);
      gl.uniform1f(uRefract, refraction);
      gl.uniform1f(uBlur, blur);
      gl.uniform1f(uRadius, radius);

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

      raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      gl.deleteTexture(tex);
      gl.deleteProgram(prog);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      if (buf) gl.deleteBuffer(buf);
    };
  }, [sourceCanvasId, radius, refraction, blur]);

  return (
    <div ref={hostRef} className={`relative overflow-hidden ${className}`}>
      <canvas
        ref={glCanvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ borderRadius: radius }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}