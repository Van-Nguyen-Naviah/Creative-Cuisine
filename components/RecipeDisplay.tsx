
import React from 'react';

interface RecipeDisplayProps {
  recipe: string | null;
  isLoading: boolean;
  error: string | null;
}

const LoadingSpinner: React.FC = () => (
  <div className="flex flex-col items-center justify-center gap-4 p-8">
     <svg className="animate-spin h-12 w-12 text-emerald-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    <p className="text-gray-600 font-medium">Crafting your recipe...</p>
  </div>
);

const RecipeContent: React.FC<{ content: string }> = ({ content }) => {
    const lines = content.split('\n').filter(line => line.trim() !== '');
    
    return (
        <div className="prose max-w-none">
            {lines.map((line, index) => {
                if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold text-emerald-700 !mb-2">{line.substring(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-semibold">{line.substring(3)}</h2>;
                }
                if (line.startsWith('- ')) {
                    return <li key={index} className="ml-5 list-disc">{line.substring(2)}</li>;
                }
                if (line.match(/^\d+\.\s/)) {
                    return <p key={index} className="!mt-4">{line}</p>;
                }
                return <p key={index} className="italic text-gray-600 !mt-1">{line}</p>;
            })}
        </div>
    );
};


const RecipeDisplay: React.FC<RecipeDisplayProps> = ({ recipe, isLoading, error }) => {
  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return (
        <div className="flex flex-col items-center justify-center gap-2 p-8 bg-red-50 border-l-4 border-red-400 text-red-700">
          <p className="font-bold">Oops! Something went wrong.</p>
          <p>{error}</p>
        </div>
      );
    }
    if (recipe) {
      return <RecipeContent content={recipe} />;
    }
    return (
      <div className="flex flex-col items-center justify-center text-center gap-4 p-8">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-xl font-semibold text-gray-500">Your recipe will appear here</h3>
        <p className="text-gray-400">Select some ingredients and a diet, then press "Generate Recipe" to start!</p>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg min-h-[400px] p-6 transition-all duration-300">
      {renderContent()}
    </div>
  );
};

export default RecipeDisplay;

