import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await axios.get('/users/me');
        setUser(res.data.data);
      } catch (err) {
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gaming-red text-xl">Loading Profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gaming-red text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-4xl font-heading text-white text-center tracking-widest uppercase mb-8">
        Player <span className="text-gaming-red">Profile</span>
      </h2>

      {/* Player ID Card */}
      <div className="bg-gaming-black border-2 border-gaming-red/30 rounded-lg p-8 mb-8 shadow-2xl shadow-gaming-red/20 hover:border-gaming-red/50 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 bg-gaming-dark border-2 border-gaming-red rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-gaming-red">
              {user?.gamingAlias?.charAt(0) || user?.username?.charAt(0) || 'P'}
            </span>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-2">{user?.gamingAlias || 'Player'}</h3>
            <p className="text-gray-400 mb-1"><span className="text-gaming-red">Username:</span> {user?.username}</p>
            <p className="text-gray-400 mb-1"><span className="text-gaming-red">Email:</span> {user?.email}</p>
            <p className="text-gray-400">
              <span className="text-gaming-red">Rank:</span> 
              <span className={`ml-2 px-3 py-1 rounded ${
                user?.valorantRank === 'Radiant' ? 'bg-yellow-500/20 text-yellow-400' :
                user?.valorantRank === 'Immortal' ? 'bg-purple-500/20 text-purple-400' :
                user?.valorantRank === 'Ascendant' ? 'bg-blue-500/20 text-blue-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {user?.valorantRank || 'Unranked'}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-gaming-black border border-gaming-red/20 rounded-lg p-6 text-center hover:border-gaming-red/50 transition-all duration-300">
          <div className="text-4xl font-bold text-gaming-red mb-2">{user?.wins || 0}</div>
          <div className="text-gray-400 uppercase tracking-wider">Wins</div>
        </div>
        <div className="bg-gaming-black border border-gaming-red/20 rounded-lg p-6 text-center hover:border-gaming-red/50 transition-all duration-300">
          <div className="text-4xl font-bold text-gaming-red mb-2">{user?.losses || 0}</div>
          <div className="text-gray-400 uppercase tracking-wider">Losses</div>
        </div>
        <div className="bg-gaming-black border border-gaming-red/20 rounded-lg p-6 text-center hover:border-gaming-red/50 transition-all duration-300">
          <div className="text-4xl font-bold text-gaming-red mb-2">{user?.kills || 0}</div>
          <div className="text-gray-400 uppercase tracking-wider">Kills</div>
        </div>
        <div className="bg-gaming-black border border-gaming-red/20 rounded-lg p-6 text-center hover:border-gaming-red/50 transition-all duration-300">
          <div className="text-4xl font-bold text-gaming-red mb-2">{user?.deaths || 0}</div>
          <div className="text-gray-400 uppercase tracking-wider">Deaths</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;