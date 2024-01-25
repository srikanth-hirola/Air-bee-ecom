import React from 'react'

const Search = ({ state, setState, title }) => {
    return (
        <input type='text' className='border-1 rounded w-[400px] mr-2 px-2 py-1 h-[40px]' value={state} onChange={(e) => setState(e.target.value)} placeholder={`Search By ${title}`} />
    )
}

export default Search