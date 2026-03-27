import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../api/axios';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-gaming-black border border-gaming-red/20 rounded-lg shadow-2xl shadow-gaming-red/10">
      <h2 className="text-3xl font-heading text-white text-center tracking-widest uppercase">Agent <span className="text-gaming-red">Login</span></h2>
      {error && <div className="p-3 text-sm text-white bg-gaming-red/80 rounded">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
          <input 
            type="email" 
            required 
            className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:outline-none focus:border-gaming-red text-white transition-colors"
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
          <input 
            type="password" 
            required 
            className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:outline-none focus:border-gaming-red text-white transition-colors"
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <button type="submit" className="w-full py-3 mt-4 font-bold tracking-wider text-white uppercase transition-colors bg-gaming-red hover:bg-red-600 rounded">
          Authenticate
        </button>
      </form>
      <p className="text-sm text-center text-gray-400">
        New to the arena? <Link to="/register" className="text-gaming-red hover:underline">Register here</Link>
      </p>
    </div>
  );
};

export default Login;