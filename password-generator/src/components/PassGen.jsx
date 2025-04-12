import React from 'react'

const PassGen = () => {
    const [length, setLength] = React.useState(8);
    const [includeUpper, setIncludeUpper] = React.useState(false);
    const [includeLower, setIncludeLower] = React.useState(false);
    const [includeNumbers, setIncludeNumbers] = React.useState(false);
    const [includeSymbols, setIncludeSymbols] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [copied, setCopied] = React.useState(false);

    const generatePassword = () => {
        const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lower = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";
        let chars = "";
        
        if(includeUpper) chars += upper; 
        if(includeLower) chars += lower;
        if(includeNumbers) chars += numbers;
        if(includeSymbols) chars += symbols;
        
        if(chars.length === 0) {
            alert("Please select at least one character set");
            return;
        }
        
        let newPassword = "";
        for(let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            newPassword += chars[randomIndex];
        }
        
        setPassword(newPassword);
        setCopied(false);
    }
    
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }
    
    return (
        <div className="p-6">
            <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                    <label className="text-gray-700 font-medium">Password Length</label>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-lg font-mono font-bold">{length}</span>
                </div>
                <input 
                    type="range" 
                    min="4" 
                    max="32" 
                    value={length} 
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600" 
                />
            </div>
            
            <div className="space-y-3 mb-6">
                <p className="text-gray-700 font-medium mb-2">Include Characters:</p>
                
                <div className="flex items-center">
                    <input 
                        id="uppercase" 
                        type="checkbox" 
                        checked={includeUpper} 
                        onChange={() => setIncludeUpper(!includeUpper)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300" 
                    />
                    <label htmlFor="uppercase" className="ml-2 text-gray-700">Uppercase Letters (A-Z)</label>
                </div>
                
                <div className="flex items-center">
                    <input 
                        id="lowercase" 
                        type="checkbox" 
                        checked={includeLower} 
                        onChange={() => setIncludeLower(!includeLower)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300" 
                    />
                    <label htmlFor="lowercase" className="ml-2 text-gray-700">Lowercase Letters (a-z)</label>
                </div>
                
                <div className="flex items-center">
                    <input 
                        id="numbers" 
                        type="checkbox" 
                        checked={includeNumbers} 
                        onChange={() => setIncludeNumbers(!includeNumbers)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300" 
                    />
                    <label htmlFor="numbers" className="ml-2 text-gray-700">Numbers (0-9)</label>
                </div>
                
                <div className="flex items-center">
                    <input 
                        id="symbols" 
                        type="checkbox" 
                        checked={includeSymbols} 
                        onChange={() => setIncludeSymbols(!includeSymbols)}
                        className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500 border-gray-300" 
                    />
                    <label htmlFor="symbols" className="ml-2 text-gray-700">Special Characters (!@#$...)</label>
                </div>
            </div>
            
            <button 
                onClick={generatePassword}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                Generate Password
            </button>
            
            {password && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-gray-700 font-medium">Your Password:</p>
                        <button 
                            onClick={copyToClipboard}
                            className={`text-sm px-3 py-1 rounded ${copied ? 'bg-green-100 text-green-800' : 'bg-indigo-100 text-indigo-800'} font-medium transition-colors`}
                        >
                            {copied ? 'Copied!' : 'Copy'}
                        </button>
                    </div>
                    <div className="p-3 bg-white rounded border border-gray-200 font-mono text-gray-800 break-all">
                        {password}
                    </div>
                </div>
            )}
        </div>
    )
}

export default PassGen