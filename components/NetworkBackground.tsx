import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const StarField = (props: any) => {
  const ref = useRef<any>();
  
  // Generate random points in a sphere - reduced count for better mobile performance
  const sphere = useMemo(() => random.inSphere(new Float32Array(1500), { radius: 1.5 }), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#38bdf8"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const NetworkBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]}>
        <StarField />
      </Canvas>
    </div>
  );
};

export default NetworkBackground;
