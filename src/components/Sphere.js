import { useSphere } from '@react-three/cannon';
import { useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { usePlayerControls } from '../utils/useControls';
import * as THREE from 'three';

const Sphere = (props) => {
  const direction = new THREE.Vector3();
  const frontVector = new THREE.Vector3();
  const sideVector = new THREE.Vector3();
  const speed = new THREE.Vector3();
  const SPEED = 5;

  const [ref, api] = useSphere((index) => ({
    mass: 1,
    onCollide: (e) => {
      console.log(e);
      if (e.body.id === 66) {
        console.log('Contacto con amarillo');
      } else if (e.body.id === 67) {
        console.log('Contacto con rojo');
      } else if (e.body.id === 68) {
        console.log('Contacto con verde');
      }
    },
    position: props.position,
    ...props,
  }));

  const { forward, backward, left, right, jump } = usePlayerControls();
  const velocity = useRef([0, 0, 0]);
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  useFrame((state) => {
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED);
    speed.fromArray(velocity.current);

    api.velocity.set(direction.x, velocity.current[1], direction.z);
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) api.velocity.set(velocity.current[0], 1, velocity.current[2]);
  });

  return (
    <mesh castShadow position={props.position} ref={ref}>
      <sphereGeometry args={props.args} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default Sphere;
