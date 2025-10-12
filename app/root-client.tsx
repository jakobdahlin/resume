"use client";

import React from "react";
import GradualBlur from "@/components/GradualBlur";

type Props = { children: React.ReactNode };

export default function RootClient({ children }: Props) {
  return (
    <>
      {/* page-wide bottom blur by default */}
      <GradualBlur
  target="page"
  position="top"
  height="6rem"
  strength={1.5}
  divCount={10}
  curve="ease-out"
/>
      {children}
    </>
  );
}