import { useBox } from '@react-three/cannon';

const Box = (props) => {
  const [ref] = useBox((index) => ({ mass: 1, ...props }));

  return (
    <mesh castShadow receiveShadow position={props.position} ref={ref}>
      <boxGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default Box;
