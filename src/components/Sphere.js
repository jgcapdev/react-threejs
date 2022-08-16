import { useSphere } from '@react-three/cannon';
import { useEffect } from 'react';

const Sphere = (props) => {
  const [ref, api] = useSphere((index) => ({
    mass: 1,
    onCollide: (e) => {
      if (e.contact.bi.id === 42) {
        console.log('Contacto con amarillo');
      }
    },
    ...props,
  }));

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'w') {
        console.log('arriba');

        console.log(props.position);
      } else if (e.key === 's') {
        console.log('abajo');

        console.log(props.position);
      } else if (e.key === 'a') {
        console.log('izquierda');
      } else if (e.key === 'd') {
        console.log('derecha');
      } else if (e.key === 'r') {
        api.position.set(props.position[0], props.position[1], props.position[2]);
      }
    });
  });

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <sphereGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default Sphere;
