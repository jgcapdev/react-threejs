import { useGLTF } from '@react-three/drei';

const Model = ({ ...props }) => {
  const { nodes, materials } = useGLTF('/assets/models/roomgood.gltf');
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.wall.geometry} material={materials.Material} position={[0, 1.38, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.floor.geometry} material={materials.Material} position={[0, 1.8, 0]} />
      <mesh castShadow receiveShadow geometry={nodes.rug.geometry} material={nodes.rug.material} position={[0.53, 0.47, 0.53]} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.couch001.geometry}
        material={nodes.couch001.material}
        position={[0.24, 0.6, -0.97]}
      >
        <mesh castShadow receiveShadow geometry={nodes.couch.geometry} material={nodes.couch.material} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cushon.geometry}
          material={nodes.cushon.material}
          position={[-0.27, 0.53, -0.14]}
          rotation={[1.16, 0, 0]}
          scale={[0.35, 0.13, 0.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cushon002.geometry}
          material={nodes.cushon002.material}
          position={[0.52, 0.52, -0.19]}
          rotation={[1.16, 0, 0]}
          scale={[0.35, 0.13, 0.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillow.geometry}
          material={nodes.pillow.material}
          position={[-0.52, 0.47, 0.14]}
          rotation={[2.48, 0.75, -1.51]}
          scale={0.82}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillow001.geometry}
          material={nodes.pillow001.material}
          position={[0.78, 0.47, 0.08]}
          rotation={[-2.55, -0.15, 2.13]}
          scale={0.82}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.couch003.geometry}
        material={nodes.couch003.material}
        position={[-1, 0.59, 0.41]}
        rotation={[-Math.PI, 1.57, -Math.PI]}
      >
        <mesh castShadow receiveShadow geometry={nodes.couch002.geometry} material={nodes.couch002.material} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cushon001.geometry}
          material={nodes.cushon001.material}
          position={[-0.27, 0.53, -0.14]}
          rotation={[1.16, 0, 0]}
          scale={[0.35, 0.13, 0.32]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pillow002.geometry}
          material={nodes.pillow002.material}
          position={[-0.52, 0.47, 0.14]}
          rotation={[2.48, 0.75, -1.51]}
          scale={0.82}
        />
      </mesh>
    </group>
  );
};

export default Model;
