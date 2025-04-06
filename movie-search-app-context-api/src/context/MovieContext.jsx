import { createContext, useState, useContext, useEffect } from "react";
import { searchMovies } from "../api/omdbService";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);
    const [filterType, setFilterType] = useState("");
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState("");

    // searchMovies is a function that takes in the search term, page number, and filter type as parameters and returns a promise that resolves to the search results.
    const fetchMovies = async (
        term = searchTerm,
        page = page,
        type = filterType
    ) => {
        try {
            const data = await searchMovies(term, page, type);
            if (data.Response === "True") {
                setMovies(data.Search);
                setTotalResults(Number(data.totalResults));
                setError("");
            } else {
                setMovies([]);
                setTotalResults(0);
                setError(data.Error);
            }
        } catch {
            setError("An error occurred while fetching movies." + error);
        }
    };

    useEffect(() => {
        if (searchTerm) {
            fetchMovies(searchTerm, page, filterType);
        }
    }, [page, filterType]);

    return (
        <MovieContext.Provider
            value={{
                searchTerm,
                setSearchTerm,
                movies,
                setMovies,
                filterType,
                setFilterType,
                page,
                setPage,
                totalResults,
                setTotalResults,
                error,
                setError,
                fetchMovies,
            }}
        >
            {children}
        </MovieContext.Provider>
    );
};

// Custom Hook to access the MovieContext
export const useMovieContext = () => useContext(MovieContext);
