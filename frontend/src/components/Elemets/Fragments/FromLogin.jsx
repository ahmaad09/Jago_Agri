import React, { useState } from 'react';
import InputForm from '../Input/Index'; // Pastikan path sesuai
import Button from '../Button/Index'; // Pastikan path sesuai
import Forgot from '../Button/Forgot'; // Pastikan path sesuai

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email dan password wajib diisi!');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('Login berhasil!');
                window.location.href = '/dashboard';
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('Terjadi kesalahan saat menghubungi server.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleLogin} className="flex flex-col" method="POST">
            <InputForm
                type="email"
                name="email"
                placeholder="Email"
                htmlFor="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <InputForm
                type="password"
                name="password"
                placeholder="Password"
                htmlFor="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            {error && <p className="text-red-500 text-center">{error}</p>}

            <Forgot>Forgot Account?</Forgot>

            <div className="flex justify-center w-full mt-4">
                <Button
                    classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Loading..." : "Sign In"}
                </Button>
            </div>
        </form>
    );
};

export default Login;
