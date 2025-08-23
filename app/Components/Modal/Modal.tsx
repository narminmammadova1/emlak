// components/Modal.tsx
"use client"
import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      {children}
    </div>,
    document.body
  );
};

export default Modal;
