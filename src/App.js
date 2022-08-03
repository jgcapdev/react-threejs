import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import Box from './components/Box';
import Floor from './components/Floor';
import Sphere from './components/Sphere';

import './App.css';

function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [12, 9, 11], fov: 30 }}>
      <ambientLight intensity={1} />
      <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />

      <axesHelper args={[100, 100, 100]} />

      <Physics gravity={[0, -9.8, 0]}>
        <Sphere position={[0, 3, 0]} args={[0.5]} color="purple" />

        <Box position={[0, 0.5, 0]} args={[2, 1, 2]} color="orange" />
        <Box position={[5, 1, 0]} args={[1.5, 2, 1.3]} color="red" />
        <Box position={[0, 0.5, 5]} args={[3, 1, 1.3]} color="green" />

        <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
      </Physics>

      <Stats />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
