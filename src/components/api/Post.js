import React from 'react'

const Post = ({post}) => {
  return (
    <div className='api-main container'>
            {post.map((item)=>(
                
                <div className='api-item' key={item.id}>
                    <h3>{item.id}</h3>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                </div>
            ))}
    </div>
  )
}

export default Post