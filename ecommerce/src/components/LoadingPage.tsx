'use client';
import React from 'react';
import '../../src/styles/LoadingPage.css'; // Import CSS file for styling

const LoadingPage: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading...</p>
        </div>
    );
};

export default LoadingPage;
