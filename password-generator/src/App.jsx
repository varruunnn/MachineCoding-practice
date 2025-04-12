import React from 'react'
import PassGen from './components/PassGen'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-purple-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-6">
          <h1 className="text-2xl font-bold text-white text-center">
            Password Generator
          </h1>
        </div>
        <PassGen />
      </div>
      <p className="text-white text-sm mt-6 opacity-70">
        Create strong, secure passwords with ease
      </p>
    </div>
  )
}

export default App