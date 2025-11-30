import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium border transition
      ${active ? "bg-black text-white border-black" : "bg-white text-gray-700 border-gray-300"}
      hover:bg-black hover:text-white`}
    >
      {label}
    </button>
  );
};

export default Pill;