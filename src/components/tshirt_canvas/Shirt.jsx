import { useGLTF } from '@react-three/drei';

const Shirt = () => {
  const { scene } = useGLTF('/shirt_baked.glb');
  return <primitive object={scene} scale={0.5} />;
};

export default Shirt;