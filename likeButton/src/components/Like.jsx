import React from 'react'
import { useState } from 'react'

const Like = () => {
    const [liked, setLiked] = useState(false);
    const [hovering, setHovering] = useState(false);
    const [likes, setLikes] = useState(100);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");
    
    const toggleLike = () => {
        setLiked(!liked);
        setLikes(prev => prev + (liked ? -1 : 1));
    };
    
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentInput.trim()) {
            setComments([commentInput.trim(), ...comments]);
            setCommentInput("");
        }
    };
    
    return (
        <div className="space-y-4">
            <div className="relative">
                <button
                    onClick={toggleLike}
                    onMouseEnter={() => setHovering(true)}
                    onMouseLeave={() => setHovering(false)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-lg transition-all duration-300 ${
                        liked ? "bg-pink-100 text-pink-600" : "bg-gray-100 text-gray-600"
                    } hover:shadow-md`}
                >
                    <span className="text-2xl">{liked ? "💖" : "🤍"}</span>
                    <span className="font-medium">{likes}</span>
                    
                    {hovering && (
                        <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded shadow-lg">
                            Click to {liked ? "Unlike" : "Like"}
                        </span>
                    )}
                </button>
            </div>
            
            <div className="mt-4">
                <form onSubmit={handleCommentSubmit} className="flex gap-2">
                    <input 
                        type="text" 
                        value={commentInput} 
                        onChange={(e) => setCommentInput(e.target.value)}
                        placeholder="Type your comment here..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button 
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                    >
                        Comment
                    </button>
                </form>
            </div>
            
            {comments.length > 0 && (
                <div className="mt-6">
                    <h3 className="text-lg font-medium text-gray-700 mb-2">Comments</h3>
                    <ul className="space-y-2">
                        {comments.map((comment, idx) => (
                            <li key={idx} className="bg-gray-50 p-3 rounded-lg border-l-4 border-indigo-400">
                                {comment}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Like