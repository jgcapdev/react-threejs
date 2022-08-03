import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import './App.css';

function App() {
  return (
    <Canvas camera={{ position: [8, 1.5, 8], fov: 25 }}>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>

      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
