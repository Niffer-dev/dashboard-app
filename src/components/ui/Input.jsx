import React from 'react'

const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm">{label}</label>}
      <input
        {...props} // ✅ passes name, type, value, onChange, etc.
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input