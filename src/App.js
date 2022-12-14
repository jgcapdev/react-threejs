import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import Box from './components/Box';
import Floor from './components/Floor';
import Sphere from './components/Sphere';
import Text from './components/Text';

import { useSelector } from 'react-redux';
import { store } from './store.js';
import { Provider } from 'react-redux';
import Model from './components/Model';

function App() {
  const text = useSelector((state) => state.text);

  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [12, 9, 11], fov: 30 }}>
      <Provider store={store}>
        <ambientLight intensity={1} />
        <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />

        <axesHelper args={[100, 100, 100]} />

        <Text
          bold
          position-y={4.5}
          position-x={-1.5}
          position-z={7}
          rotation-y={Math.PI * 0.5}
          lineHeight={1}
          letterSpacing={-0.05}
          fontSize={1.5}
          color="black"
        >
          {text}
        </Text>

        <Physics gravity={[0, -9.8, 0]}>
          <Sphere position={[0, 3, 0]} args={[0.5]} color="purple" />

          <Box position={[0, 0.5, 0]} args={[2, 1, 2]} color="orange" />
          <Box position={[5, 1, 0]} args={[1.5, 2, 1.3]} color="red" />
          <Box position={[0, 0.5, 5]} args={[3, 1, 1.3]} color="green" />

          <Model />

          <Floor rotation={[Math.PI / -2, 0, 0]} color="white" />
        </Physics>

        <Stats />
        <OrbitControls />
      </Provider>
    </Canvas>
  );
}

export default App;
