import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { getMovieDetails } from "../api/omdbService"
import { useMovieContext } from "../context/MovieContext";

function MovieDetail() {
    const { imdbID } = useParams();
    console.log('Movie ID:', imdbID);
    // const [movie, setMovie] = useState(null);
    // const [error, setError] = useState(null);
    const {
        movies, setMovies,
        error, setError
    } = useMovieContext();

    useEffect(() => {
        async function fetchMovie() {
            try {
                console.log('Fetching movie details for:', imdbID);
                const data = await getMovieDetails(imdbID);
                if (data.Response === 'True') {
                    setMovies(data);
                    setError('');
                } else {
                    setMovies(null);
                    setError(data.Error);
                }
            } catch (error) {
                setError('An error occurred while fetching movie details. ' + error);
            }
        }

        fetchMovie();
    }, [imdbID]);

    if (error) return <p className="p-4 text-red-500">{error}</p>
    if (!movies) return <p className="p-4">Loading...</p>;
    return (
        <div className="p-4 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{movies.Title}</h1>
            <img src={movies.Poster !== 'N/A' ? movies.Poster : 'https://via.placeholder.com/300'}
                alt={movies.Title} className="w-full max-w-sm mb-4 rounded" />
            <p className="mb-2">Year: {movies.Year}</p>
            <p className="mb-2">Type: {setMovies.Type}</p>
            <p className="mb-2">IMDb Rating: {movies.imdbRating}</p>
            <p className="mb-2">IMDb Votes: {movies.imdbVotes}</p>
            <p className="mb-2">Runtime: {movies.Runtime}</p>
            <p className="mb-2">Genre: {movies.Genre}</p>
            <p className="mb-2">Director: {movies.Director}</p>
            <p className="mb-2">Writer: {movies.Writer}</p>
            <p className="mb-2">Actors: {movies.Actors}</p>
            <p className="mb-2">Plot: {movies.Plot}</p>
            <p className="mb-2">Language: {movies.Language}</p>
            <p className="mb-2">Country: {movies.Country}</p>
            <p className="mb-2">Awards: {movies.Awards}</p>

        </div>
    )
}

export default MovieDetail