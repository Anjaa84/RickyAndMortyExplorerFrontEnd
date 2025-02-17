import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import HomePage from "./pages/HomePage";
import CharacterPage from "./pages/CharacterPage";
import EpisodesPage from "./pages/EpisodesPage.tsx";
import LocationsPage from "./pages/LocationsPage.tsx";

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <nav className="p-4 bg-gray-800 text-white flex justify-center space-x-4">
          <Link to="/" className="hover:underline">Home </Link>
          <Link to="/characters" className="hover:underline">Characters </Link>
          <Link to="/episodes" className="hover:underline">Episodes </Link>
          <Link to="/locations" className="hover:underline">Locations </Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters" element={<CharacterPage />} />
          <Route path="/episodes" element={<EpisodesPage />} />
          <Route path="/locations" element={<LocationsPage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
