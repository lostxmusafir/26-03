import { useState, useEffect } from 'react';
import axios from '../api/axios';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({ name: '', game: '' });
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const res = await axios.get('/teams');
        setTeams(res.data.data || []);
      } catch (err) {
        setError('Failed to load teams');
      } finally {
        setLoading(false);
      }
    };
    fetchTeams();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');
    try {
      await axios.post('/teams', formData);
      setFormSuccess('Team created successfully!');
      setFormData({ name: '', game: '' });
      // Refresh teams list
      const res = await axios.get('/teams');
      setTeams(res.data.data || []);
    } catch (err) {
      setFormError(err.response?.data?.message || 'Failed to create team');
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gaming-red text-xl">Loading Teams...</div>
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
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-heading text-white text-center tracking-widest uppercase mb-8">
        Team <span className="text-gaming-red">Roster</span>
      </h2>

      {/* Create Team Form */}
      <div className="bg-gaming-black border border-gaming-red/20 rounded-lg p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-4">Create New Team</h3>
        {formError && <div className="p-3 text-sm text-white bg-gaming-red/80 rounded mb-4">{formError}</div>}
        {formSuccess && <div className="p-3 text-sm text-white bg-green-500/80 rounded mb-4">{formSuccess}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Team Name</label>
            <input 
              type="text" 
              required 
              value={formData.name}
              className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:outline-none focus:border-gaming-red text-white transition-colors"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Game</label>
            <input 
              type="text" 
              required 
              value={formData.game}
              className="w-full px-4 py-2 bg-gaming-dark border border-gray-700 rounded focus:outline-none focus:border-gaming-red text-white transition-colors"
              onChange={(e) => setFormData({...formData, game: e.target.value})}
            />
          </div>
          <button type="submit" className="w-full py-3 mt-4 font-bold tracking-wider text-white uppercase transition-colors bg-gaming-red hover:bg-red-600 rounded">
            Create Team
          </button>
        </form>
      </div>

      {/* Teams Grid */}
      {teams.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">
          No teams found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teams.map((team) => (
            <div 
              key={team._id} 
              className="bg-gaming-black border border-gaming-red/20 rounded-lg p-6 hover:border-gaming-red/50 transition-all duration-300 shadow-lg shadow-gaming-red/10"
            >
              <h3 className="text-xl font-bold text-white mb-3">{team.name}</h3>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-gaming-red">Captain:</span> {team.captain?.username || 'Unknown'}</p>
                <p><span className="text-gaming-red">Game:</span> {team.game || 'Valorant'}</p>
                <p><span className="text-gaming-red">Players:</span> {team.players?.length || 0}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Teams;