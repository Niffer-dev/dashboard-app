import React from 'react'

const Input = ({type, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input