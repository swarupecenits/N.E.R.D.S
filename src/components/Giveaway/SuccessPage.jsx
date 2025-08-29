import React, { useState } from 'react';
import { utils } from '/src/config/firebase.js';

export default function SuccessPage({ user }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(user.uniqueId).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    const handleDownload = () => {
        const data = `
Giveaway Competition - Winner Details
=====================================

Name: ${user.name}
Scholar ID: ${user.scholarId}
Unique ID: ${user.uniqueId}
Riddle Solved: ${user.solvedRiddle}
Date: ${new Date().toLocaleString()}

Please save this unique ID to claim your prize!
Contact support with this ID for prize redemption.
`;
        const filename = `giveaway-winner-${user.uniqueId}.txt`;
        utils.downloadText(data, filename);
    };


  return (
    <div className="w-full max-w-2xl mx-auto bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12 text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider mb-2">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
                Congratulations!
            </span>
        </h2>
        <p className="text-slate-400 mt-2 mb-8">You solved the riddle correctly!</p>

        {/* Unique ID Section */}
        <div className="text-center bg-black/20 border border-white/20 rounded-lg p-6 my-8">
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Your Unique ID</h3>
            <div className="flex items-center justify-center gap-4 mt-4">
                <span className="font-mono text-2xl md:text-3xl text-cyan-300 my-2">
                    {user.uniqueId}
                </span>
                <button 
                    onClick={handleCopy} 
                    title="Copy to clipboard" 
                    className={`p-3 rounded-lg transition-all duration-300 ${copied ? 'bg-cyan-500/50 text-white' : 'bg-black/20 border border-white/30 hover:bg-white/10'}`}
                >
                    {copied ? '✅' : '📋'}
                </button>
            </div>
            <p className="text-sm text-amber-400 mt-4">
                <strong>Important:</strong> Please save this ID to claim your prize!
            </p>
        </div>

        {/* Participant Details Section */}
        <div className="text-left bg-black/20 border border-white/20 rounded-lg p-6 my-8">
            <h4 className="text-md font-semibold text-white text-center uppercase tracking-wider mb-4">Participant Details</h4>
            <div className="space-y-3">
                <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-medium text-slate-400">Name:</span>
                    <span className="font-semibold text-white">{user.name}</span>
                </div>
                <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-medium text-slate-400">Scholar ID:</span>
                    <span className="font-semibold text-white">{user.scholarId}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium text-slate-400">Riddle Solved:</span>
                    <span className="font-semibold text-white text-right">{user.solvedRiddle}</span>
                </div>
            </div>
        </div>

        <div className="mt-8">
            <button 
                onClick={handleDownload} 
                className="w-full font-bold text-white bg-transparent border-2 border-purple-500 hover:bg-purple-500 rounded-lg py-3 px-8 transition duration-300 transform hover:scale-105"
            >
                Download ID
            </button>
        </div>
    </div>
  );
};
