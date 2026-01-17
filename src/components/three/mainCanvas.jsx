"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ScrollContainer } from "./ScrollContainer";
import { Sky } from "./sceneSky";

export function MainCanvas() {
    return (
        <div className="w-screen h-screen fixed-top top-0 left-0 fixed">
            <Canvas
                shadows
                dpr={[1, 2]}
                camera={{ fov: 55, position: [0, 0, 6] }}
            >
                <Environment files={"/images/purplesky.jpg"} />
                <ScrollContainer/>
                <Sky />
            </Canvas>
        </div>
    );
}