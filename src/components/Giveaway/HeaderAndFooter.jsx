import React from 'react';

export function Header() {
  return (
    <header className="bg-blue-50 dark:bg-gray-800 text-center py-6 border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">N.E.R.D.S Giveaway</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">Solve riddles to win amazing prizes!</p>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-yellow-50 dark:bg-gray-800 text-center py-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">&copy; {new Date().getFullYear()} N.E.R.D.S</p>
      </div>
    </footer>
  );
}
