"use client"
import { useRef, useState } from 'react';

export const useOTP = (length: number) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const focusInput = (index: number) => {
    const el = inputRefs.current[index];
    if (el) el.focus();
  };

  const handleChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < length - 1) {
      focusInput(index + 1);
    }
  };


  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key === 'Backspace') {
      if (!otp[index] && index > 0) {
        focusInput(index - 1);
      }
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const paste = e.clipboardData.getData('text').slice(0, length);
    const updated = paste.split('');
    setOtp([...updated, ...Array(length - updated.length).fill('')]);
    setTimeout(() => focusInput(updated.length), 0);
  };

  return {
    otp,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
    focusInput
  };
};
