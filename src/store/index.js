import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#000000', // Changed to charcoal grey color
  color1: '#EFBD48',
  isLogoTexture: false,
  isFullTexture: false,
  logoDecal: './src/assets/tshirt/ai.png',
  fullDecal: './src/assets/tshirt/ai.png',
  modelPath: './src/assets/tshirt/shirt_baked.glb',
});

export default state;