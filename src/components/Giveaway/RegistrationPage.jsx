import React, { useState } from 'react';

const LoadingSpinner = () => (
    <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
);

export default function RegistrationPage({ onRegister }) {
  const [name, setName] = useState('');
  const [scholarId, setScholarId] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!name.trim() || name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }
    const scholarIdPattern = /^[A-Za-z0-9]{6,12}$/;
    if (!scholarId.trim()) {
      newErrors.scholarId = "Scholar ID is required.";
    } else if (!scholarIdPattern.test(scholarId)) {
      newErrors.scholarId = "Scholar ID must be 9 alphanumeric characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      setTimeout(() => {
        onRegister({ name: name.trim(), scholarId: scholarId.trim() });
        setIsLoading(false);
      }, 500);
    }
  };


  return (
    <div className="w-full max-w-2xl mx-auto bg-black/30 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-8 md:p-12">
      <div className="text-center">
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white uppercase tracking-wider mb-2">
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 text-transparent bg-clip-text">
                Join The Giveaway
            </span>
        </h2>
        <p className="text-slate-400 mb-8">Fill in your details to start solving riddles!</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="participant-name" className="block text-sm font-medium text-slate-300 mb-2">
            Full Name <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="participant-name"
            value={name}
            onChange={(e) => { setName(e.target.value); setErrors({ ...errors, name: '' }); }}
            className={`w-full bg-black/40 border ${errors.name ? 'border-red-500/80' : 'border-white/30'} rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
            placeholder="Enter your full name"
          />
          {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="scholar-id" className="block text-sm font-medium text-slate-300 mb-2">
            Scholar ID <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            id="scholar-id"
            value={scholarId}
            onChange={(e) => { setScholarId(e.target.value); setErrors({ ...errors, scholarId: '' }); }}
            className={`w-full bg-black/40 border ${errors.scholarId ? 'border-red-500/80' : 'border-white/30'} rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-4 focus:ring-cyan-500/20 transition-all duration-300`}
            placeholder="e.g., 25EC10XXX"
          />
          {errors.scholarId && <p className="text-red-400 text-sm mt-2">{errors.scholarId}</p>}
        </div>
        <button type="submit" disabled={isLoading} className="w-full font-bold text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 rounded-lg py-3 px-6 transition duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
          {isLoading ? <LoadingSpinner /> : 'Start Competition'}
        </button>
      </form>
    </div>
  );
};
