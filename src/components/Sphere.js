import { useSphere } from '@react-three/cannon';

const Sphere = (props) => {
  const [ref] = useSphere((index) => ({ mass: 1, ...props }));

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <sphereGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default Sphere;
