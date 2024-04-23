"use client"
import React from "react"
import { TracingBeam } from "./TracingBeam"

export function TracingBeamDemo({ children }) {
    return (
        <TracingBeam className="">
            {/* <div className="max-w-2xl mx-auto antialiased pt-4 relative"> */}
            <div className="mx-auto antialiased pt-4 relative">
                {children}
            </div>
        </TracingBeam>
    )
}
