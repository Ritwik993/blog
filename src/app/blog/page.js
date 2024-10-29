import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/components/postCard/postCard'
import { getPosts } from '@/lib/data'

const Blog = async() => {
  const posts=await getPosts();
  return (
    <div className={styles.container}>
      {
        posts.map((post,i)=>{
          return <PostCard post={post} key={i}/>
        })
      }
    </div>
  )
}

export default Blog