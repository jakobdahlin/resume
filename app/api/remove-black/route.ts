import sharp from "sharp"
import path from "path"
import fs from "fs"
import { NextResponse } from "next/server"

export async function GET() {
  const imagePath = path.join(process.cwd(), "public", "JDCert_A.png")

  try {
    const inputBuffer = fs.readFileSync(imagePath)

    const { data, info } = await sharp(inputBuffer)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true })

    for (let i = 0; i < data.length; i += 4) {
      const r = data[i]
      const g = data[i + 1]
      const b = data[i + 2]
      if (r < 30 && g < 30 && b < 30) {
        data[i + 3] = 0
      }
    }

    const transparentBuffer = await sharp(data, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4
      }
    })
      .png()
      .toBuffer()

    return new NextResponse(transparentBuffer, {
      status: 200,
      headers: {
        "Content-Type": "image/png"
      }
    })
  } catch (error) {
    return NextResponse.json({ error: "Failed to process image" }, { status: 500 })
  }
}
