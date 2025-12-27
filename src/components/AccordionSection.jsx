import React, { useState } from 'react';

// A reusable section component
const AccordionSection = ({ title, arabicTitle, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200">
      {/* Clickable Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 px-2 hover:bg-stone-100 transition-colors"
      >
        <div className="flex items-center gap-4">
          <span className={`transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
            ▼
          </span>
          <h2 className="text-xl font-bold text-stone-800">{title}</h2>
        </div>
        <span className="text-xl font-bold text-stone-400">{arabicTitle}</span>
      </button>

      {/* Expandable Content */}
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1000px] pb-4' : 'max-h-0'}`}>
        <ul className="px-4 space-y-3">
          {items.map((item, index) => (
            <li key={index} className="flex justify-between items-baseline gap-2">
              <span className="font-medium text-stone-700">{item.name}</span>
              <div className="flex-grow border-b border-dotted border-stone-300 mx-2"></div>
              <span className="font-bold text-red-800">{item.price}</span>
              <span className="text-right min-w-[80px] text-stone-600">{item.ar}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default AccordionSection;