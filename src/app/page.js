"use client";
import React from "react";

import { TracingBeamDemo } from "./components/TracingBeam/TracingBeamDemo";
import { BackgroundBoxesDemo } from "./components/BackgroundBoxes/BackgroundBoxesDemo";
import { MacbookScrollDemo } from "./components/MacbookScroll/MacbookScrollDemo";
import { BentoGridCards } from "./components/BentoGrid/BentoGridDemo";
import { LampDemo } from "./components/Lamp/LampDemo";
import { MeteorsDemo } from "./components/Meteors/MeteorsDemo";
import { SpotlightDemo } from "./components/Spotlight/SpotlightDemo";

export default function Home() {
    return (
        <div className="py-4">
            {/* <TracingBeamDemo> */}
                <div className="mb-2">
                    {/* <BackgroundBoxesDemo /> */}
                </div>

                <div className="mb-2">
                    <MacbookScrollDemo />
                </div>

                <div className="mb-2 p-2 border-4 border-black rounded-lg">
                    <BentoGridCards />
                </div>

                <div className="mb-2">
                    <LampDemo />
                </div>

                <div className="mb-2 flex justify-items-stretch flex-wrap justify-between">
                    {/* <MeteorsDemo />
                    <MeteorsDemo />
                    <MeteorsDemo />
                    <MeteorsDemo />
                    <MeteorsDemo />
                    <MeteorsDemo />
                    <MeteorsDemo />
                    <MeteorsDemo /> */}
                </div>

                <div className="mb-2">
                    <SpotlightDemo />
                </div>
            {/* </TracingBeamDemo> */}
        </div>
    );
}
