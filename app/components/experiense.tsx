import { ContactShadows, OrbitControls, Environment } from "@react-three/drei";

import { Avatar } from "../3D/Avatar";
import { useState } from "react";

export const Experience = () => {
  const [anim, setAnim] = useState("Idle");

  return (
    <>
      <group position-y={-2.5}>
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
        <Avatar animation={anim} />
      </group>
    </>
  );
};
