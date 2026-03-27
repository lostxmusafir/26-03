import { useState, useEffect } from 'react';
import axios from '../api/axios';

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get('/users/leaderboard');
        setLeaderboard(res.data.data || []);
      } catch (err) {
        setError('Failed to load leaderboard');
      } finally {
        setLoading(false);
      }
    };
    fetchLeaderboard();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gaming-red text-xl">Loading Leaderboard...</div>
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
        Global <span className="text-gaming-red">Rankings</span>
      </h2>

      {leaderboard.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">
          No players found
        </div>
      ) : (
        <div className="space-y-4">
          {leaderboard.map((player, index) => (
            <div 
              key={player._id || index}
              className={`bg-gaming-black border rounded-lg p-6 flex items-center justify-between transition-all duration-300 ${
                index === 0 ? 'border-yellow-500/50 shadow-lg shadow-yellow-500/20' :
                index === 1 ? 'border-gray-400/50 shadow-lg shadow-gray-400/20' :
                index === 2 ? 'border-orange-500/50 shadow-lg shadow-orange-500/20' :
                'border-gaming-red/20 hover:border-gaming-red/50'
              }`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl ${
                  index === 0 ? 'bg-yellow-500/20 text-yellow-400' :
                  index === 1 ? 'bg-gray-400/20 text-gray-300' :
                  index === 2 ? 'bg-orange-500/20 text-orange-400' :
                  'bg-gaming-red/20 text-gaming-red'
                }`}>
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{player.gamingAlias || player.username}</h3>
                  <p className="text-gray-400 text-sm">
                    <span className="text-gaming-red">Rank:</span> {player.valorantRank || 'Unranked'}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gaming-red">{player.wins || 0}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Wins</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leaderboard;