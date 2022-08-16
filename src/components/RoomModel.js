import { useGLTF } from '@react-three/drei';

const RoomModel = () => {
  const gltf = useGLTF('/assets/models/roomgood.glb');

  return <primitive object={gltf.scene} />;
};

export default RoomModel;
