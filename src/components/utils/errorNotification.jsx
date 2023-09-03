import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaXmark, FaExclamation } from "react-icons/fa6";
const ErrorNotification = ({ errorMsg, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 400 }}
        animate={{ x: errorMsg ? 0 : 400 }}
        transition={{ duration: 0.15 }}
        exit={{ x: 400 }}
        className={`fixed bottom-4 right-4 m-4 p-4 pr-8 bg-white text-gray-600 border-b-4 border-red-500 rounded shadow-lg transition-transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <p className="flex gap-2 items-center">
          <i className="bg-red-500 text-red-100 p-[3px] rounded-full">
            <FaExclamation />
          </i>
          {errorMsg}
        </p>
        <button
          className="absolute top-[4px] right-[4px] ml-2 hover:text-red-500 focus:outline-none"
          onClick={() => {
            setIsVisible(false);
            onClose();
          }}
        >
          <FaXmark />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default ErrorNotification;
