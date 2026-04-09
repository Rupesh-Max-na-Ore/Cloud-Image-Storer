// if not use useEffect api continuous call multiple times instead of just one

import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {


    const [posts, setPosts] = useState([
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
            caption: 'A beautiful sunset over the mountains.'
        }
    ])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/posts')
                setPosts(response.data)
            } catch (err) {
                console.error("Error fetching posts:", err)
            }
        }

        fetchPosts()
    }, [])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map(post => (
                        <div key={post.id} className='post'>
                            <img src={post.image} alt={post.caption} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <p>No posts to show</p>
                )
            }
        </section>
    )
}

export default Feed
