const Box = () => {
  return (
    <mesh castShadow position={[0, 0.5, 0]}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

export default Box;
