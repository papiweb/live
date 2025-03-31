import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import Earth from './components/Earth';
import LoadingScreen from './components/LoadingScreen';

function App() {
  return (
    <div className="w-full h-screen bg-black">
      <Suspense fallback={<LoadingScreen />}>
        <Canvas
          camera={{
            position: [0, 0, 4],
            fov: 45,
            near: 0.1,
            far: 1000
          }}
        >
          <color attach="background" args={['#020924']} />
          <Stars
            radius={300}
            depth={60}
            count={20000}
            factor={7}
            saturation={0}
            fade={true}
          />
          <ambientLight intensity={0.3} />
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} color="#2860d8" intensity={1} />
          <Earth />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </Canvas>
      </Suspense>
    </div>
  );
}

export default App;