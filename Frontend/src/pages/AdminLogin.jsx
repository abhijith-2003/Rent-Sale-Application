import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

function AdminLogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);  
    const navigate = useNavigate();

    // admin credentials 
    const ADMIN_EMAIL = 'admin@gmail.com';
    const ADMIN_PASSWORD = 'admin';

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            navigate('/admin-dashboard');
        } else {
            setError('Invalid email or password');
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl mb-4 flex justify-center font-semibold">Admin Login</h2>
                {error && <div className="text-red-500 mb-4">{error}</div>}

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full mb-4 p-2 border border-gray-300 rounded"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <div className="relative mb-4">
                        <input
                            type={showPassword ? "text" : "password"} 
                            placeholder="Password"
                            className="w-full p-2 border border-gray-300 rounded"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                       
                        <span
                            className="absolute right-3 top-3 cursor-pointer"
                            onClick={togglePassword}
                        >
                            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} 
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <p className="text-center mt-4">Back to User Login?
                    <Link to="/login" className=" mx-2 text-sm text-blue-500 hover:text-blue-700">
                         Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default AdminLogin;
