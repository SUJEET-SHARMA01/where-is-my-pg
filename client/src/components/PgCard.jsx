import { Link } from 'react-router-dom';

export default function PgCard({ pg }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition duration-300">
      <img src={pg.image} alt={pg.name} className="w-full h-48 object-cover" />
      <div className="p-5">
        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${pg.gender_type === 'Boys' ? 'bg-blue-100 text-blue-800' : 'bg-pink-100 text-pink-800'}`}>
          {pg.gender_type} Only
        </span>
        <h3 className="text-xl font-bold mt-2 text-gray-800">{pg.name}</h3>
        <p className="text-gray-500 text-sm mt-1">📍 {pg.location}</p>
        
        {/* Amenities Icons/Badges */}
        <div className="flex gap-2 my-3 text-xs text-gray-600">
          {pg.wifi && <span className="bg-gray-100 px-2 py-1 rounded">📶 WiFi</span>}
          {pg.ac && <span className="bg-gray-100 px-2 py-1 rounded">❄️ AC</span>}
          {pg.food_included && <span className="bg-gray-100 px-2 py-1 rounded">🍴 Food</span>}
        </div>

        <div className="flex justify-between items-center mt-4 border-t pt-3">
          <div>
            <p className="text-xs text-gray-400">Starts from</p>
            <p className="text-lg font-extrabold text-blue-600">₹{pg.starting_price}/mo</p>
          </div>
          <Link to={`/pg/${pg.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:bg-blue-700 transition">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
