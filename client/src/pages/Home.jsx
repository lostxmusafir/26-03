import { Link } from 'react-router-dom';

const Home = () => {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <div className="w-full space-y-20 pb-12">
      {/* Hero Section */}
      <section className="text-center pt-20 pb-10 px-4">
        <h1 className="text-5xl md:text-8xl font-heading font-bold uppercase tracking-widest text-white mb-6 drop-shadow-lg">
          Dominate The <span className="text-gaming-red drop-shadow-[0_0_15px_rgba(255,70,85,0.8)]">Arena</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          The ultimate platform for competitive Valorant players. Form your squad, enter elite tournaments, track your stats, and climb the global leaderboard.
        </p>
        
        {isAuthenticated ? (
          <Link to="/tournaments" className="inline-block bg-gaming-red text-white font-bold px-10 py-4 rounded hover:bg-red-600 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,70,85,0.4)] hover:shadow-[0_0_30px_rgba(255,70,85,0.6)]">
            Enter Arena
          </Link>
        ) : (
          <div className="space-x-4">
            <Link to="/register" className="inline-block bg-gaming-red text-white font-bold px-10 py-4 rounded hover:bg-red-600 transition-all uppercase tracking-widest shadow-[0_0_20px_rgba(255,70,85,0.4)] hover:shadow-[0_0_30px_rgba(255,70,85,0.6)]">
              Join Roster
            </Link>
            <Link to="/login" className="inline-block bg-transparent border-2 border-gray-600 text-gray-300 font-bold px-10 py-4 rounded hover:border-gaming-red hover:text-gaming-red transition-all uppercase tracking-widest">
              Login
            </Link>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold uppercase tracking-widest text-white text-center mb-10">
          Platform <span className="text-gaming-red">Features</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-gaming-black border border-gray-800 p-8 rounded hover:border-gaming-red/50 transition-colors group">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-gaming-red transition-colors">Epic Tournaments</h3>
            <p className="text-gray-400">
              Compete in high-stakes brackets. View live schedules, match updates, and claim your share of the prize pool.
            </p>
          </div>

          <div className="bg-gaming-black border border-gray-800 p-8 rounded hover:border-gaming-red/50 transition-colors group">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-gaming-red transition-colors">Squad Up</h3>
            <p className="text-gray-400">
              Create your dream 5-man roster. Manage your team, recruit top-tier agents, and build unstoppable synergy.
            </p>
          </div>

          <div className="bg-gaming-black border border-gray-800 p-8 rounded hover:border-gaming-red/50 transition-colors group">
            <h3 className="text-2xl font-bold text-white mb-4 uppercase tracking-wider group-hover:text-gaming-red transition-colors">Global Leaderboard</h3>
            <p className="text-gray-400">
              Every kill counts. Track your K/D, win rate, and climb the ranks to prove you are the best Radiant in the lobby.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;