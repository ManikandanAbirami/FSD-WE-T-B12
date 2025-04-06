// import { useState, useEffect } from 'react'
// import { searchMovies } from '../api/omdbService'
import SearchBar from '../components/SearchBar'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'
import FilterDropdown from '../components/FilterDropdown'
import { useMovieContext } from '../context/MovieContext'

function Home() {

    const {
        searchTerm, setSearchTerm,
        movies,
        filterType, setFilterType, setPage,
        totalResults,
        error,
        fetchMovies
    } = useMovieContext();

    const handleSearch = async () => {
        setPage(1); // Reset page to 1 when searching
        fetchMovies(searchTerm, 1, filterType);
    }

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
                    totalPages={totalPages}
                />
            )}
        </div>
    )
}

export default Home