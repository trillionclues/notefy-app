import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ handleSearchNotes }) => {
  // const [searchText, setSearchText] = useState('')
  return (
    <div className='search'>
      <MdSearch className='search-icons' size='1.5em' />
      <input
        onChange={(event) => handleSearchNotes(event.target.value)}
        type='text'
        placeholder='Search...'
      />
    </div>
  )
}

export default Search
