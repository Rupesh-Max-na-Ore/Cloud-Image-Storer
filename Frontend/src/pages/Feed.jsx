import React from 'react'

const Feed = () => {

    const [posts, setPosts] = React.useState([
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
            caption: 'A beautiful sunset over the mountains.'
        }
    ])

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
