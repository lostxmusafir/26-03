import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Placeholder Navbar */}
      <nav className="border-b border-gaming-red/20 bg-gaming-black px-6 py-4">
        <h1 className="text-2xl font-bold tracking-wider text-white">
          DREAM <span className="text-gaming-red">E-SPORTS</span>
        </h1>
      </nav>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center p-6">
        <Routes>
          <Route path="/" element={
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-widest text-white">
                Dominate The <span className="text-gaming-red">Arena</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Frontend client initialized. Ready to connect to the E-sports Tournament API.
              </p>
            </div>
          } />
        </Routes>
      </main>
    </div>
  );
}

export default App;