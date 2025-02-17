import { Link } from "react-router-dom";

 const HomePage = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold">Welcome to Rick & Morty Explorer</h1>
      <p className="mt-4 text-lg">Discover characters, episodes, and locations from the Rick and Morty universe.</p>
      <div className="mt-6 space-x-4">
        <Link to="/characters" className="px-4 py-2 bg-blue-600 text-white rounded">Explore Characters</Link>
        <Link to="/episodes" className="px-4 py-2 bg-green-600 text-white rounded">Browse Episodes</Link>
        <Link to="/locations" className="px-4 py-2 bg-purple-600 text-white rounded">View Locations</Link>
      </div>
    </div>
  );
};

export default HomePage;