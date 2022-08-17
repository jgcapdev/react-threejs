import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

const RoomModel = (props) => {
  const { nodes, materials } = useGLTF('/assets/models/roomgood.gltf');
  const group = useRef();

  return (
    <group ref={group} dispose={null} {...props} position={[0, 1.4, 0]}>
      <group>
        {/* <mesh castShadow receiveShadow geometry={nodes.couch001.geometry} material={materials.Material}></mesh> */}
        {/* <mesh castShadow receiveShadow geometry={nodes.couch002.geometry} material={materials.Material}></mesh> */}
        {/* <mesh castShadow receiveShadow geometry={nodes.couch003.geometry} material={materials.Material}></mesh> */}
        {/* <mesh castShadow receiveShadow geometry={nodes.cushon.geometry} material={materials.Material}></mesh> */}
        {/* <mesh castShadow receiveShadow geometry={nodes.cushon001.geometry} material={materials.Material}></mesh> */}
        {/* <mesh castShadow receiveShadow geometry={nodes.cushon002.geometry} material={materials.Material}></mesh> */}
        <mesh
          castShadow
          receiveShadow
          position={[0, 0.41, 0]}
          geometry={nodes.floor.geometry}
          material={materials.Material}
        ></mesh>
        <group position={[0, -0.8, -1]}>
          <mesh castShadow receiveShadow geometry={nodes.couch.geometry} material={materials.Material}></mesh>
          <mesh castShadow receiveShadow geometry={nodes.pillow.geometry} material={materials.Material}></mesh>
          <mesh castShadow receiveShadow geometry={nodes.pillow001.geometry} material={materials.Material}></mesh>
          <mesh castShadow receiveShadow geometry={nodes.pillow002.geometry} material={materials.Material}></mesh>
          <mesh
            castShadow
            receiveShadow
            position={[0, -0.13, 1.5]}
            geometry={nodes.rug.geometry}
            material={materials.Material}
          ></mesh>
        </group>
        <mesh castShadow receiveShadow geometry={nodes.wall.geometry} material={materials.Material}></mesh>
      </group>
    </group>
  );
};

export default RoomModel;
