
import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Shirt = ({ onLoaded }) => {
  const called = useRef(false);
  const { scene } = useGLTF('/shirt_baked.glb', true, undefined, (gltf) => {
    if (!called.current && onLoaded) {
      called.current = true;
      onLoaded();
    }
  });
  return <primitive object={scene} scale={0.5} />;
};

export default Shirt;