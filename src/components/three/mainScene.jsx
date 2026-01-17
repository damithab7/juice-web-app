import { useScroll, MotionPathControls, useMotion } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from 'three';
import { generateCirclePoints } from "../utils/generateCirclePoints.js";

function AutoMoveObject() {
    const scroll = useScroll();
    const motion = useMotion();

    useFrame((state, delta) => {
        motion.current += delta * 0.1
        // console.log(scroll.offset);
    })
}

function ScrollMoveObject() {
    const scroll = useScroll();
    const motion = useMotion();

    useFrame((state, delta) => {
        motion.current = scroll.offset
        // console.log(scroll.offset);
    })
}

export function MainScene() {
    const boxRef = useRef();

    const { curve, straightLine } = useMemo(() => {
        const start = new THREE.Vector3(0, -4, 0);
        const end = new THREE.Vector3(0, 4, 0);
        const straightLine = new THREE.CatmullRomCurve3([start, end], false);

        const circlePoints = generateCirclePoints(15, 2);
        const curve = new THREE.CatmullRomCurve3(circlePoints, true);

        return {curve, straightLine};
    },[]);



    return (
        <>
            <MotionPathControls
                curves={[straightLine]}
                object={boxRef}
                debug={true}>
                <ScrollMoveObject />
            </MotionPathControls>

             <MotionPathControls
                curves={[curve]}
                focus={[0,0,0]}
                debug={true}>
                <AutoMoveObject />
            </MotionPathControls>
            
            <group ref={boxRef}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            </group>


        </>
    );
}