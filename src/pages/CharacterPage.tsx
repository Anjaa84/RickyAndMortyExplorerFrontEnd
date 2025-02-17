import { gql, useQuery } from "@apollo/client";


const GET_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
        species
      }
    }
  }
`;

const CharacterPage = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Characters</h1>
      <div className="grid grid-cols-3 gap-6">
        {data.characters.results.map((character: any) => (
          <div key={character.id} className="p-4 border rounded-lg shadow-lg bg-white">
            <img src={character.image} alt={character.name} className="w-full rounded-md" />
            <h2 className="text-xl font-bold mt-2">{character.name}</h2>
            <p className="text-gray-700">{character.species}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterPage;