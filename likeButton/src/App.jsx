import React from 'react'
import Like from './components/Like'

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-6">React Like Button</h1>
        <Like />
      </div>
    </div>
  )
}

export default App