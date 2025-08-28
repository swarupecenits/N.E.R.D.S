import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import gridBackground from '../../assets/tshirt/grid.svg';
import { FancyButton } from '../../components/FancyButton';
import Shirt from '../../components/tshirt_canvas/Shirt';
import Backdrop from '../../components/tshirt_canvas/Backdrop';
import CameraRig from '../../components/tshirt_canvas/CameraRig';
import { Environment, Center } from '@react-three/drei';
// const ShirtModel = () => {
//     const { scene } = useGLTF('/shirt_baked.glb');
//     return <primitive object={scene} scale={7.5} />; // Increased scale from 1.5 to 2.5
// };
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import {
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from '../../config/motion';
import state from '../../store';

const Merch = () => {
    const snap = useSnapshot(state);

    return (
        <div className="app transition-all ease-in main flex flex-col md:mt-[-5rem] md:flex-row min-h-screen h-auto md:h-screen relative">
            {/* Gradient Background */}
            <div className="absolute inset-0 tshirt_gradient z-0"></div>

            {/* Repeated Grid SVG Background */}
            <div
                className="absolute inset-0 bg-repeat z-0"
                style={{ backgroundImage: `url(${gridBackground})`, backgroundSize: 'auto' }}
            ></div>

            {/* Left Side Animated Intro */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start z-10 px-4 py-8 md:px-16 md:py-0 min-h-[50vh] md:min-h-0">
                <AnimatePresence>
                    {snap.intro && (
                        <motion.section className="home" {...slideAnimation('left')}>
                            <motion.div className="home-content" {...headContainerAnimation}>
                                <motion.div {...headTextAnimation}>
                                    <h1 className="head-text">
                                        N<span className='orange_gradient '>.</span>E<span className='orange_gradient '>.</span>R<span className='orange_gradient '>.</span>D<span className='orange_gradient '>.</span>S<span className='orange_gradient '>.</span> <br className="xl:block hidden" /> MERCH
                                    </h1>
                                </motion.div>
                                <motion.div
                                    {...headContentAnimation}
                                    className="flex flex-col gap-5"
                                >
                                    <p className="max-w-md font-normal text-gray-300 text-base">
                                        Create your unique and exclusive shirt with our state-of-the-art 3D customization tool. <strong>Unleash your creativity</strong> and define your own style.
                                    </p>
                                    <FancyButton
                                        title1="CUSTOMIZE"
                                        title2="T-SHIRT"
                                        handleClick={() => state.intro = false}
                                        customStyles="w-fit px-4 mt-1.5 py-2.5 font-bold text-sm"
                                    />
                                </motion.div>
                            </motion.div>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>

            {/* Right Side 3D Model */}
            <div className="w-full md:w-1/2 z-10 min-h-[300px] h-[50vh] md:h-full flex items-center justify-center">
                <Canvas
                    shadows
                    camera={{ position: [0, 0, 0], fov: 25 }}
                    gl={{ preserveDrawingBuffer: true }}
                    className="w-full h-full min-h-[300px] max-w-full transition-all ease-in"
                >
                    <ambientLight intensity={0.5} />
                    <Environment preset="city" />

                    <CameraRig>
                        <Center>
                            <Shirt />
                        </Center>
                    </CameraRig>
                </Canvas>
            </div>
        </div>
    );
};

export default Merch;