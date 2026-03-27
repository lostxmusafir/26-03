import { useState, useEffect } from 'react';
import axios from '../api/axios';

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const res = await axios.get('/matches');
        setMatches(res.data.data || []);
      } catch (err) {
        setError('Failed to load matches');
      } finally {
        setLoading(false);
      }
    };
    fetchMatches();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gaming-red text-xl">Loading Matches...</div>
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
        Match <span className="text-gaming-red">Schedule & Results</span>
      </h2>

      {matches.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">
          No matches found
        </div>
      ) : (
        <div className="space-y-6">
          {matches.map((match) => (
            <div 
              key={match._id} 
              className="bg-gaming-black border border-gaming-red/20 rounded-lg p-6 hover:border-gaming-red/50 transition-all duration-300 shadow-lg shadow-gaming-red/10"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Team A */}
                <div className="flex-1 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {match.teamA?.name || match.teamA || 'Team A'}
                  </h3>
                  {match.score && (
                    <div className="text-4xl font-bold text-gaming-red">{match.score.teamA_score || 0}</div>
                  )}
                </div>

                {/* VS */}
                <div className="flex flex-col items-center">
                  <div className="text-4xl font-bold text-gaming-red mb-2">VS</div>
                  <div className={`px-4 py-2 rounded text-sm font-bold uppercase tracking-wider ${
                    match.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    match.status === 'Live' ? 'bg-red-500/20 text-red-400 animate-pulse' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {match.status || 'Scheduled'}
                  </div>
                </div>

                {/* Team B */}
                <div className="flex-1 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {match.teamB?.name || match.teamB || 'Team B'}
                  </h3>
                  {match.score && (
                    <div className="text-4xl font-bold text-gaming-red">{match.score.teamB_score || 0}</div>
                  )}
                </div>
              </div>

              {/* Match Details */}
              <div className="mt-6 pt-4 border-t border-gaming-red/20 flex flex-wrap justify-center gap-6 text-gray-400">
                {match.tournament && (
                  <p><span className="text-gaming-red">Tournament:</span> {match.tournament?.title || match.tournament}</p>
                )}
                {match.scheduledAt && (
                  <p><span className="text-gaming-red">Date:</span> {new Date(match.scheduledAt).toLocaleDateString()}</p>
                )}
                {match.scheduledAt && (
                  <p><span className="text-gaming-red">Time:</span> {new Date(match.scheduledAt).toLocaleTimeString()}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Matches;