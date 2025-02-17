import { gql, useQuery } from "@apollo/client";


const GET_EPISODES = gql`
  query {
    episodes(page: 1) {
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

const EpisodesPage = () => {
  const { loading, error, data } = useQuery(GET_EPISODES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Episodes</h1>
      <div className="grid grid-cols-2 gap-6">
        {data.episodes.results.map((episode: any) => (
          <div key={episode.id} className="p-4 border rounded-lg shadow-lg bg-white">
            <h2 className="text-xl font-bold">{episode.name}</h2>
            <p className="text-gray-700">{episode.episode} - {episode.air_date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EpisodesPage;