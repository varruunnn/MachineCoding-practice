"use client"
import OTPInput from '@/components/OTPInput';

export default function Home() {
  const handleComplete = (code: string) => {
    console.log('OTP Complete:', code);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-black text-center">Enter OTP</h1>
        <OTPInput length={6} onComplete={handleComplete} />
      </div>
    </main>
  );
}
