import { gql, useQuery } from "@apollo/client";

const GET_LOCATIONS = gql`
  query {
    locations(page: 1) {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;


const LocationsPage = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Locations</h1>
      <div className="grid grid-cols-2 gap-6">
        {data.locations.results.map((location: any) => (
          <div key={location.id} className="p-4 border rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-bold">{location.name}</h2>
            <p className="text-gray-700">{location.type} - {location.dimension}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationsPage;