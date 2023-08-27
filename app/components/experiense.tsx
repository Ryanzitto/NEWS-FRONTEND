import {
  ContactShadows,
  OrbitControls,
  Sky,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";
import { Avatar } from "../3D/Avatar";

export const Experience = () => {
  return (
    <>
      <group position-y={-1}>
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 6}
        />
        <ContactShadows
          opacity={1}
          scale={9.5}
          blur={1}
          far={3}
          resolution={256}
        />
        <directionalLight intensity={1} />
        <ambientLight intensity={1} />
        <Environment preset="sunset" />
        <Avatar />
      </group>
    </>
  );
};
