import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-wide">🏠 Apna PG</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className=' hover:underline'>About</Link>
          <button className="bg-white text-blue-600 px-4 py-1.5 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            List Your PG
          </button>
        </div>
      </div>
    </nav>
  );
}
