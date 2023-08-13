import React from 'react'
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({blogs}) => {
  return (
    <div className='blogList-wrap'>
        {
            blogs.map((element)=>{
                return(
                    <BlogItem blog={element} key={element.id} />
                )
            })
        }
      
    </div>
  )
}

export default BlogList
