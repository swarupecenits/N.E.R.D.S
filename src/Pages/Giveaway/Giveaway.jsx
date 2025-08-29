import { useState } from 'react';
// Corrected import paths to be absolute from the src directory
import RegistrationPage from '/src/components/Giveaway/RegistrationPage.jsx';
import RiddlePage from '/src/components/Giveaway/RiddlePage.jsx';
import SuccessPage from '/src/components/Giveaway/SuccessPage.jsx';
import { Header, Footer } from '/src/components/Giveaway/HeaderAndFooter.jsx';


export default function Giveaway() {
  const [page, setPage] = useState('registration'); // 'registration', 'riddle', 'success'
  const [user, setUser] = useState(null);

  const handleRegister = (userData) => {
    setUser(userData);
    setPage('riddle');
  };

  const handleSolve = (finalUserData) => {
    setUser(finalUserData);
    setPage('success');
  };

  const renderPage = () => {
    switch (page) {
      case 'registration':
        return <RegistrationPage onRegister={handleRegister} />;
      case 'riddle':
        return <RiddlePage user={user} onSolve={handleSolve} />;
      case 'success':
        return <SuccessPage user={user} />;
      default:
        return <RegistrationPage onRegister={handleRegister} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-black w-full">
      <main className="flex-grow flex items-center justify-center p-4">
        {renderPage()}
      </main>
    </div>
  );
}