import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogList from '../../config/data';
import Chip from '../../components/common/chip';
import EmptyList from '../../components/common/EmptyList';
import { Link } from 'react-router-dom';
import './styles.css'

const Blog = () => {
    const {id} = useParams();
    const[blog,setBlog]=useState(null);
    useEffect(()=>{
        let newBlog= blogList.find((Element)=>Element.id===parseInt(id));
            
     
        if(newBlog){
            setBlog(newBlog);
        }

    },[]);
  return (
  <>
        {/* <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
       {
        blog ? (<div className="blog-wrap">
            <header>
                <p className='blog-data'>Published {blog.createdAt}</p>
                <h1>{blog.title}</h1>
                <div className='blog-subCategory'>
                    {
                        blog.subCategory.map((category,index)=>(
                         
                                
                                    <div key={index}>
                                    <Chip  label={category}/>
                                </div>
                                
                            
                           
                        ))
                    }
                </div>
            </header>
            <img src={blog.cover} alt="cover" />
            <p className='blog-desc'>{blog.description}</p>
        </div>):(<EmptyList/>)
       } */}
       <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      {blog ? (
        <div className='blog-wrap'>
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className='blog-subCategory'>
              {blog.subCategory.map((category, i) => (
                <div key={i}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
      )}
      
    </>
  )
}

export default Blog
