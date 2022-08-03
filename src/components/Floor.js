const Floor = () => {
  return (
    <mesh receiveShadow rotation={[Math.PI / -2, 0, 0]}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
};

export default Floor;
