import * as THREE from 'three';

export function Sky(){
    return(
        <>
            <mesh>
                <sphereGeometry args={[100,100,32,32]} />
                <meshStandardMaterial color={"royalblue"} side={THREE.DoubleSide}/>
            </mesh>
        </>
    );
}