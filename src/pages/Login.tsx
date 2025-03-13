import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LOGIN_API_URL } from '../config/config';
import Button from '../components/Button';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(LOGIN_API_URL, {
        username,
        password,
      });
      localStorage.setItem('token', response.data.accessToken);
      navigate('/');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="w-96 p-6 bg-white shadow-2xl rounded-2xl">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Login
        </h2>
        <form className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span className="absolute left-3 top-3 text-gray-500">👤</span>
          </div>
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="absolute left-3 top-3 text-gray-500">🔒</span>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <Button label="Login" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default Login;
