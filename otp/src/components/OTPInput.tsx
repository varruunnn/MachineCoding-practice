"use client"
import React from 'react';
import SingleInput from './SingleInput';
import { useOTP } from '@/hooks/useOTP';

interface Props {
  length?: number;
  onComplete?: (code: string) => void;
}

const OTPInput: React.FC<Props> = ({ length = 6, onComplete }) => {
  const {
    otp,
    inputRefs,
    handleChange,
    handleKeyDown,
    handlePaste,
  } = useOTP(length);

  React.useEffect(() => {
    const code = otp.join('');
    if (!otp.includes('') && onComplete) onComplete(code);
  }, [otp, onComplete]);

  return (
    <div className="flex gap-2 justify-center" onPaste={handlePaste}>
      {otp.map((digit, idx) => (
        <SingleInput
          key={idx}
          value={digit}
          ref={(el) => {inputRefs.current[idx] = el}}
          onChange={(e) => handleChange(e.target.value, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        />
      ))}
    </div>
  );
};

export default OTPInput;
