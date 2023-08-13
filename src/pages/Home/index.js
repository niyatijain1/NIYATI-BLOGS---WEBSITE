import React, { useState } from 'react'
import Header from '../../components/Home/Header'
import SearchBar from '../../components/Home/Header/SearchBar'
import BlogList from '../../components/Home/BlogList'
import blogList from '../../config/data';
import EmptyList from '../../components/common/EmptyList';

const Home = () => {
    const[blogs,setBlogs]=useState(blogList);
    const[searchKey,setSearchKey]=useState("");
    const handleSearchBar=(e)=>{
        e.preventDefault();
        handleSearchResults();

    }
    const handleSearchResults=()=>{
        const allBLogs = blogList;
        const filteredBlogs = allBLogs.filter((element)=>
            element.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        );
        setBlogs(filteredBlogs);
    };
    const handleClearSearch=()=>{
        setBlogs(blogList);
        setSearchKey("");
    }
  return (
    <div>
     <Header/>
     <SearchBar value={searchKey} clearSearch={handleClearSearch} formSubmit={handleSearchBar}
      handleSearchKey={(e)=>setSearchKey(e.target.value)}/>
     {!blogs.length?<EmptyList/>:<BlogList blogs={blogs}/>}
    </div>
  )
}

export default Home
