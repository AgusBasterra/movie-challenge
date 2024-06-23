// src/pages/_error.tsx
import React from 'react';

const ErrorPage: React.FC = () => {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist or has been moved.</p>
    </div>
  );
};

export default ErrorPage;
