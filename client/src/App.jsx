import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tournaments from './pages/Tournaments';
import Teams from './pages/Teams';
import Profile from './pages/Profile';
import Leaderboard from './pages/Leaderboard';
import Matches from './pages/Matches';

function App() {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gaming-dark overflow-y-auto">
      <nav className="border-b border-gaming-red/20 bg-gaming-black px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link to="/">
          <h1 className="text-2xl font-bold tracking-wider text-white">
            DREAM <span className="text-gaming-red">E-SPORTS</span>
          </h1>
        </Link>
        <div className="space-x-4 flex items-center">
          <Link to="/tournaments" className="text-gray-300 hover:text-white transition-colors hidden md:inline-block">Tournaments</Link>
          <Link to="/teams" className="text-gray-300 hover:text-white transition-colors hidden md:inline-block">Teams</Link>
          <Link to="/matches" className="text-gray-300 hover:text-white transition-colors hidden md:inline-block">Matches</Link>
          <Link to="/leaderboard" className="text-gray-300 hover:text-white transition-colors hidden md:inline-block">Leaderboard</Link>
          
          <div className="pl-4 border-l border-gray-700 space-x-4">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="text-gaming-red hover:text-white transition-colors font-bold">Profile</Link>
                <button onClick={handleLogout} className="text-gray-400 hover:text-white transition-colors">Logout</button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-300 hover:text-white transition-colors">Login</Link>
                <Link to="/register" className="bg-gaming-red text-white px-4 py-2 rounded font-bold hover:bg-red-600 transition-colors uppercase text-sm tracking-wider">Join</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      <main className="flex-grow flex items-start justify-center p-0 md:p-6">
        <div className="w-full max-w-7xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/matches" element={<Matches />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;