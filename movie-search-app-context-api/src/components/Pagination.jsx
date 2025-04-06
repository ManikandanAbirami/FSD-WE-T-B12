import React from 'react'
import { useMovieContext } from '../context/MovieContext'

function Pagination({ totalPages }) {
    const { page, setPage } = useMovieContext();
    return (
        <div className='flex gap-2 mt-4'>
            <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
                Prev
            </button>
            <span className="self-center">{page}/{totalPages}</span>
            <button
                onClick={() => setPage(page + 1)}
                disabled={page === totalPages}
                className='bg-blue-500 text-white px-4 py-2 rounded-md'
            >
                Next
            </button>
        </div>
    )
}

export default Pagination