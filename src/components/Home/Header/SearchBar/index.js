import React from 'react'
import './styles.css'

const SearchBar = ({value,formSubmit,clearSearch,handleSearchKey}) => {
  return (
    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input type="text" placeholder='search by category' value={value} onChange={handleSearchKey} />
            {value &&  <span onClick={clearSearch}> X </span>}
            <button>Go</button>
        </form>
      
    </div>
  )
}

export default SearchBar
