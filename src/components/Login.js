import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            // Faz a requisição para o backend
            const response = await axios.post('http://localhost:3000/login', { email, password });

            // Verifica se o login foi bem-sucedido
            if (response.data && response.data.user) {
                // Armazena o nome do usuário no localStorage
                localStorage.setItem('username', response.data.user.name);

                // Redireciona para a página de boas-vindas
                navigate('/welcome');
            } else {
                setError('Login failed. Please check your credentials.');
            }
        } catch (error) {
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button onClick={() => navigate('/register')}>Register</button>
                <button type="submit">Login</button>
            </form>

        </div>
    );
};

export default Login;
