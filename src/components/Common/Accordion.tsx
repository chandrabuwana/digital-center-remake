'use client'
import react, { useState } from 'react';
const AccordionItem = ({ item, isOpen, onToggle }) => {
  const { title, description } = item;
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="pt-4 md:w-3/4">
      <button
        className="accordion-header flex justify-between items-center px-1 bg-black"
        onClick={onToggle}
      >
        <p className='text-lg font-bold text-left'>{isOpen ? '-' : '+'} <span className="font-medium font-kanit">{title}</span></p>
      </button>
      {isOpen && (
        <div className="accordion-content p-4 bg-black">
          {description}
        </div>
      )}
    </div>
  );
};
export default AccordionItem;