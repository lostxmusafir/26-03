import { useState, useEffect } from 'react';
import axios from '../api/axios';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const res = await axios.get('/tournaments');
        setTournaments(res.data.data || []);
      } catch (err) {
        setError('Failed to load tournaments');
      } finally {
        setLoading(false);
      }
    };
    fetchTournaments();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gaming-red text-xl">Loading Tournaments...</div>
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
        Active <span className="text-gaming-red">Tournaments</span>
      </h2>
      
      {tournaments.length === 0 ? (
        <div className="text-center text-gray-400 text-lg">
          No active tournaments found
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tournaments.map((tournament) => (
            <div 
              key={tournament._id} 
              className="bg-gaming-black border border-gaming-red/20 rounded-lg p-6 hover:border-gaming-red/50 transition-all duration-300 shadow-lg shadow-gaming-red/10"
            >
              <h3 className="text-xl font-bold text-white mb-3">{tournament.title}</h3>
              <div className="space-y-2 text-gray-400">
                <p><span className="text-gaming-red">Game:</span> {tournament.game || 'Valorant'}</p>
                <p><span className="text-gaming-red">Entry Fee:</span> ${tournament.entryFee || 0}</p>
                <p><span className="text-gaming-red">Prize Pool:</span> ${tournament.prizePool || 0}</p>
                <p>
                  <span className="text-gaming-red">Status:</span> 
                  <span className={`ml-2 px-2 py-1 rounded text-sm ${
                    tournament.status === 'Upcoming' ? 'bg-yellow-500/20 text-yellow-400' :
                    tournament.status === 'Ongoing' ? 'bg-green-500/20 text-green-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {tournament.status || 'Upcoming'}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tournaments;