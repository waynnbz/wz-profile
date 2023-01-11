import React from 'react';

function Header() {
  return (
    <div>
      <button
        className="bg-gray-800 text-gray-200 dark:bg-gray-200 dark:text-gray-800 font-medium p-2 rounded-full"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
      </button>
    </div>
  );
}

export default Header;
