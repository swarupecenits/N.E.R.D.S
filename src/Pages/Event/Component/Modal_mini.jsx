import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModalMenu = () => {
  // State to track if the modal is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the modal on button click
  const toggleModal = () => setIsOpen(!isOpen);

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: '-100vh' },
    visible: { opacity: 1, y: '0', transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, y: '-100vh', transition: { duration: 0.3 } }
  };

  return (
    <div>
      {/* Button to open/close the modal */}
      <button 
        onClick={toggleModal} 
        className="bg-blue-500 text-white px-6 py-2 rounded-lg"
      >
        Toggle Menu
      </button>

      {/* AnimatePresence will handle the mounting and unmounting of the modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
          >
            {/* Modal content */}
            <motion.div 
              className="bg-white rounded-lg p-6 w-64 text-center shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, transition: { duration: 0.4 } }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
            >
              <h2 className="text-lg font-bold mb-4">Menu</h2>
              <ul>
                <li className="py-2">Option 1</li>
                <li className="py-2">Option 2</li>
                <li className="py-2">Option 3</li>
              </ul>
              <button 
                onClick={toggleModal} 
                className="bg-red-500 text-white px-4 py-2 mt-4 rounded-lg"
              >
                Close Menu
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalMenu;
