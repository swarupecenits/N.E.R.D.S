
import React, { useState, useEffect } from 'react';
import { db, sampleRiddles, utils } from '/src/config/firebase.js';
import { ref, get, set, query, orderByChild, equalTo } from 'firebase/database';
import Tshirt_Loader from '../../components/Merch_components/Tshirt_Loader.jsx';

const LoadingSpinner = () => (
    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
);

export default function RiddlePage({ user, onSolve }) {
  const [riddles, setRiddles] = useState([]);
  const [currentRiddle, setCurrentRiddle] = useState(null);
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRiddles = async () => {
      try {
        const riddlesRef = ref(db, 'riddles');
        const snapshot = await get(riddlesRef);
        if (snapshot.exists()) {
          setRiddles(Object.values(snapshot.val()));
        } else {
          setRiddles(sampleRiddles);
        }
      } catch (err) {
        console.error("Error fetching riddles:", err);
        setRiddles(sampleRiddles);
      }
    };
    fetchRiddles();
  }, []);

  useEffect(() => {
    if (riddles.length > 0) {
      setCurrentRiddle(riddles[Math.floor(Math.random() * riddles.length)]);
    }
  }, [riddles]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!answer.trim()) {
      setError("Please enter an answer.");
      return;
    }

    setIsLoading(true);

    if (answer.trim().toLowerCase() === currentRiddle.answer.toLowerCase()) {
      try {
        const participantsRef = ref(db, 'participants');
        const q = query(participantsRef, orderByChild('scholarId'), equalTo(user.scholarId));
        const snapshot = await get(q);

        if (snapshot.exists()) {
          setError("This Scholar ID has already submitted an entry.");
          setIsLoading(false);
          return;
        }

        const uniqueId = utils.generateUniqueId();
        const participantData = {
          ...user,
          uniqueId,
          riddleId: currentRiddle.id,
          riddleQuestion: currentRiddle.question,
          answer: answer.trim(),
          timestamp: Date.now(),
        };
        const newParticipantRef = ref(db, `participants/${uniqueId}`);
        await set(newParticipantRef, participantData);

        setTimeout(() => {
            onSolve({ ...user, uniqueId, solvedRiddle: currentRiddle.question });
        }, 1000);

      } catch (err) {
        console.error("Firebase submission error:", err);
        setError(`Submission failed: ${err.message}. Please check your Firebase rules.`);
        setIsLoading(false);
      }
    } else {
      setTimeout(() => {
        setError(`Incorrect answer. The correct answer was "${currentRiddle.answer}". Try again later!`);
        setIsLoading(false);
      }, 1000);
    }
  };

  if (!currentRiddle) {
    return (
      <div className="flex items-center justify-center w-full h-64">
        <Tshirt_Loader />
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wider">
          Solve the Riddle
        </h2>
        <p className="text-slate-400 mt-1">{user.name} - {user.scholarId}</p>
      </div>

      {/* Riddle Text Container */}
      <div className="text-center bg-black/20 border border-white/20 rounded-lg p-6 my-8">
          <h3 className="text-xl font-medium text-white/90">{currentRiddle.question}</h3>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="riddle-answer" className="block text-sm font-medium text-slate-300 mb-2">
            Your Answer <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="riddle-answer"
            value={answer}
            onChange={(e) => { setAnswer(e.target.value); setError(''); }}
            className={`w-full bg-black/40 border ${error ? 'border-red-500/80' : 'border-white/30'} rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
            placeholder="Enter your answer"
          />
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
        <button type="submit" disabled={isLoading} className="w-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-lg py-3 px-6 transition duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
          {isLoading ? <LoadingSpinner /> : 'Submit Answer'}
        </button>
      </form>
    </div>
  );
};