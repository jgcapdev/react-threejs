import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import Box from './components/Box';
import Floor from './components/Floor';

import './App.css';

function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [10, 8, 11], fov: 40 }}>
      <ambientLight intensity={1} />
      <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />

      <Box />
      <Floor />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
