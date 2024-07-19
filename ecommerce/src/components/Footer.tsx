import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto text-center">
                <p>&copy; 2024 My Website. All rights reserved.</p>
                <p>Designed with <span role="img" aria-label="heart">❤️</span> by You</p>
            </div>
        </footer>
    );
};

export default Footer;
