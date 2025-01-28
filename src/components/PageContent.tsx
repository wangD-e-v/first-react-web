import React from 'react';

const PageContent: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="text-center">
    <h1 className="text-2xl sm:text-4xl font-bold mb-4">{title}</h1>
    <p className="text-sm sm:text-lg">{description}</p>
  </div>
);

export default PageContent;
