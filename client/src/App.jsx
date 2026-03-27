import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Tournaments from './pages/Tournaments';
import Teams from './pages/Teams';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';

function App() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gaming-dark overflow-y-auto">
      <nav className="border-b border-gaming-red/20 bg-gaming-black px-6 py-4 flex justify-between items-center sticky top-0 z-10">
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-wider text-white">
            DREAM <span className="text-gaming-red">E-SPORTS</span>
          </h1>
        </Link>
        <div className="flex items-center space-x-6">
          <Link to="/tournaments" className="text-gray-300 hover:text-white transition-colors">Tournaments</Link>
          <Link to="/teams" className="text-gray-300 hover:text-white transition-colors">Teams</Link>
          <Link to="/leaderboard" className="text-gray-300 hover:text-white transition-colors">Leaderboard</Link>
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="text-gray-300 hover:text-white transition-colors">Profile</Link>
              <button onClick={handleLogout} className="text-gray-300 hover:text-white transition-colors">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
              <Link to="/register" className="bg-gaming-red text-white px-4 py-2 rounded font-bold hover:bg-red-600 transition-colors uppercase text-sm tracking-wider">Join</Link>
            </>
          )}
        </div>
      </nav>

      <main className="flex-grow flex items-center justify-center p-6">
        <Routes>
          <Route path="/" element={
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white">
                Dominate The <span className="text-gaming-red">Arena</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
                Welcome to the dashboard. More features coming soon.
              </p>
              {!isAuthenticated && (
                <Link to="/login" className="inline-block bg-transparent border-2 border-gaming-red text-gaming-red font-bold px-8 py-3 rounded hover:bg-gaming-red hover:text-white transition-all uppercase tracking-widest">
                  Enter Arena
                </Link>
              )}
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;