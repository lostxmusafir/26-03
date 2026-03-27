import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../api/axios';

const Register = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', gamingAlias: '', valorantRank: 'Unranked' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  const ranks = ['Unranked', 'Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Ascendant', 'Immortal', 'Radiant'];

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-gaming-black border border-gaming-red/20 rounded-lg shadow-2xl shadow-gaming-red/10">
      <h2 className="text-3xl font-heading text-white text-center tracking-widest uppercase">Join <span className="text-gaming-red">Roster</span></h2>
      {error && <div className="p-3 text-sm text-white bg-gaming-red/80 rounded">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Username</label>
          <input type="text" required className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:border-gaming-red text-white focus:outline-none" onChange={(e) => setFormData({...formData, username: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
          <input type="email" required className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:border-gaming-red text-white focus:outline-none" onChange={(e) => setFormData({...formData, email: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Password</label>
          <input type="password" required className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:border-gaming-red text-white focus:outline-none" onChange={(e) => setFormData({...formData, password: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Gaming Alias (e.g., Dream)</label>
          <input type="text" className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:border-gaming-red text-white focus:outline-none" onChange={(e) => setFormData({...formData, gamingAlias: e.target.value})} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">Valorant Rank</label>
          <select className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:border-gaming-red text-white focus:outline-none" onChange={(e) => setFormData({...formData, valorantRank: e.target.value})}>
            {ranks.map(rank => <option key={rank} value={rank}>{rank}</option>)}
          </select>
        </div>
        <button type="submit" className="w-full py-3 mt-4 font-bold tracking-wider text-white uppercase transition-colors bg-gaming-red hover:bg-red-600 rounded">
          Register
        </button>
      </form>
      <p className="text-sm text-center text-gray-400">
        Already registered? <Link to="/login" className="text-gaming-red hover:underline">Login here</Link>
      </p>
    </div>
  );
};

export default Register;