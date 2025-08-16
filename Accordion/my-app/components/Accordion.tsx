"use client"
import React from 'react'
import { useState } from 'react';
import { ChevronDown } from "lucide-react";
type AccordionItem = {
    id: number;
    title: string;
    content: string;
};
const items: AccordionItem[] = [
    {
        id: 1,
        title: "What is React?",
        content: "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and manage application state efficiently."
    },
    {
        id: 2,
        title: "How does Tailwind CSS work?",
        content: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup without writing CSS."
    },
    {
        id: 3,
        title: "What are the benefits of TypeScript?",
        content: "TypeScript adds static type checking to JavaScript, helping catch errors at compile time, improving code reliability, and enhancing developer experience with better IDE support."
    }
];
const Accordion = () => {
    const [openSections, setOpenSections] = useState<number[]>([]);
    // const [openSections, setOpenSections] = useState<number|null>(null);

    const toggleSection = (id: number) => {
        setOpenSections(prev =>
            // if we want that user can open multiple sections
            prev.includes(id) ? prev.filter(sec => sec !== id) : [...prev, id]
            // otherwise for only one 
            // (prev === id ? null : id)

        );
    };
    return (
        <div className='max-w-2xl mx-auto p-6'>
            <div className="space-y-2">
                {items.map(item => {
                    const isOpen = openSections.includes(item.id)
                    //const isOpen = openSections == item.id
                    return (
                        <div key={item.id} className='border border-gray-200 rounded-lg overflow-hidden shadow-sm duration-200 hover:shadow-md '>
                            <button className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                                onClick={() => toggleSection(item.id)}
                            >
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'
                                        }`}
                                />
                                <span className="font-medium text-gray-900 text-lg">{item.title}</span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                <div className="p-4 pt-0 bg-gray-50 border-t border-gray-100">
                                    <p className="text-gray-700 leading-relaxed">
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Accordion
