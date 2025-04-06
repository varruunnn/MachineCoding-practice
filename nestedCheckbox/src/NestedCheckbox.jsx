import React from "react";

const NestedCheckbox = ({ node, onCheck, level = 0 }) => {
    const handleChange = (e) => {
      onCheck(node.label, e.target.checked);
    };
  
    const hasChildren = node.children.length > 0;
    
    return (
      <div className={`ml-${level > 0 ? 6 : 0} mb-1`}>
        <label className="flex items-center cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={node.checked}
              onChange={handleChange}
              className="sr-only peer"
            />
            <div className="w-5 h-5 border-2 rounded border-gray-300 bg-white peer-checked:bg-blue-600 peer-checked:border-blue-600 transition-all">
              {node.checked && (
                <svg 
                  className="w-4 h-4 text-white absolute top-0 left-0" 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <polyline points="6 12 10 16 18 8" />
                </svg>
              )}
            </div>
          </div>
          <span className={`ml-2 text-sm ${hasChildren ? 'font-medium' : ''} group-hover:text-blue-600 transition-colors`}>
            {node.label}
          </span>
          {hasChildren && (
            <span className="ml-2 text-xs text-gray-500">({node.children.length})</span>
          )}
        </label>
        
        {hasChildren && (
          <div className={`ml-2 pl-4 border-l border-gray-200`}>
            {node.children.map((child) => (
              <NestedCheckbox
                key={child.label}
                node={child}
                onCheck={onCheck}
                level={level + 1}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

export default NestedCheckbox;
