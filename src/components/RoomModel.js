import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useGLTF } from '@react-three/drei';

const RoomModel = () => {
  const gltf = useGLTF('/assets/models/roomgood.glb');

  console.log(gltf);

  return <primitive object={gltf.scene} />;
};

export default RoomModel;
