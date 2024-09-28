import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const username = localStorage.getItem('username');
    const navigate = useNavigate();

    // Caso não tenha um username, redireciona para a página de login
    if (!username) {
        navigate('/welcome');
        return null;
    }

    return (
        <div>
            <h1>Welcome, {username}!</h1>
        </div>
    );
};

export default Welcome;
