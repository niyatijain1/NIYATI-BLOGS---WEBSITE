import React from 'react'
import Chip from '../../../common/chip'
import './styles.css';
import { Link } from 'react-router-dom';

const BlogItem = ({blog}) => {
  return (
    <div className='blogItem-wrap'>
        <img  className='blogItem-cover' src={blog.cover} alt="cover" />
        <Chip label={blog.category}/>
        <h3>{blog.title}</h3>
        <p className='blogItem-desc'>{blog.description}</p>
        <footer>
            <div className='blogItem-author'>
                <img src={blog.authorAvatar} alt="avatar" />
            <div>
            <h6>{blog.authorName}</h6>
            <p>{blog.createdAt}</p>
            </div>
            </div>
            <Link className='blogItem-link' to ={`/blog/${blog.id}`}>➝</Link>
        </footer>
      
    </div>
  )
}

export default BlogItem
