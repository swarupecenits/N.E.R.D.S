import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// --- Firebase Configuration ---
const firebaseConfig = {
  apiKey: "AIzaSyCu1OOzIz6I8yNY8mvnos1biAYo_7Lh4LA",
  authDomain: "nerds-orientation-giveaway.firebaseapp.com",
  databaseURL: "https://nerds-orientation-giveaway-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nerds-orientation-giveaway",
  storageBucket: "nerds-orientation-giveaway.firebasestorage.app",
  messagingSenderId: "622357660139",
  appId: "1:622357660139:web:6da3c1bf43568c641699ae",
};

// --- Initialize Firebase ---
const app = initializeApp(firebaseConfig);

// --- CORRECTED DATABASE INITIALIZATION ---
// By passing the databaseURL directly to getDatabase, we ensure
// it connects to the correct regional instance immediately.
export const db = getDatabase(app, firebaseConfig.databaseURL);

// --- Sample Riddles (Fallback) ---
export const sampleRiddles = [
  { id: "r1", question: "I have keys but no locks. I have space but no room. You can enter, but you can't go outside. What am I?", answer: "keyboard" },
  { id: "r2", question: "The more you take, the more you leave behind. What am I?", answer: "footsteps" },
  { id: "r3", question: "I'm tall when I'm young, and short when I'm old. What am I?", answer: "candle" },
  { id: "r4", question: "What has hands but cannot clap?", answer: "clock" },
  { id: "r5", question: "What gets wet while drying?", answer: "towel" },
];

// --- Helper Functions ---
export const utils = {
  generateUniqueId: () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 9);
    return `GW${timestamp}${random}`.toUpperCase();
  },
  downloadText: (text, filename) => {
    const blob = new Blob([text], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  },
};
