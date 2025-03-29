import { useState, useEffect } from 'react'
import { searchMovies } from '../api/omdbService'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'
import FilterDropdown from '../components/FilterDropdown'

function Home() {
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState([])
    const [filterType, setFilterType] = useState('');
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        try {
            const response = await searchMovies(searchTerm, page, filterType);
            if (response.Response === 'True') {
                setMovies(response.Search);
                setTotalResults(response.totalResults);
                setError('');
            } else {
                setMovies([]);
                setTotalResults(0);
                setError(response.Error);
            }

        } catch {
            setError('An error occurred while fetching movies.');
        }
    }

    useEffect(() => {
        if (searchTerm) {
            handleSearch();
        }
    }, [page, filterType])

    const totalPages = Math.ceil(totalResults / 10);

    return (
        <div className='p-4 max-w-5xl mx-auto'>
            <h1 className='text-2xl font-bold mb-4'>Movie Search App</h1>
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onSearch={() => { setPage(1); handleSearch(); }} />
            <FilterDropdown filterType={filterType} setFilterType={setFilterType} />
            {error && <p className='text-red-500'>{error}</p>}
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
            {totalResults > 10 && (
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={(newPage) => { setPage(newPage); }}
                />
            )}
        </div>
    )
}

export default Home