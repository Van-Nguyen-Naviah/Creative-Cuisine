
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-4xl font-extrabold text-emerald-600">
          Creative Cuisine Generator
        </h1>
        <p className="mt-2 text-lg text-gray-500">
          Turn your ingredients into a culinary masterpiece with AI!
        </p>
      </div>
    </header>
  );
};

export default Header;
