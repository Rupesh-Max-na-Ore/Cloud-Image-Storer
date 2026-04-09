import React from 'react'
import axios from 'axios'
import 

const CreatePost = () => {
      // by default html reloads the page when form is submitted, to prevent that we use e.preventDefault() in the handleSubmit function
      const handleSubmit = async (e) => {
          e.preventDefault()

          const formData = new FormData(e.target)
          axios.post('http://localhost:3000/create-post', formData).then((res)=>{
                console.log(res.data) 
                alert("Post created successfully")
                e.target.reset() // reset the form after successful submission
          })
          .catch((err)=>{
                console.error("Error creating post:", err)
                alert("Error creating post")
          })
      }
      
  
    return (
    <section className='create-post-section'>
      <h1>Create Post</h1>

      <form onSubmit={handleSubmit}>
        <input type="file" name='image' accept='image/*' />
        <input type="text" name='caption' placeholder='Enter caption' required />
        <button type='submit'>Create Post</button>
      </form>
    </section>
  )
}

export default CreatePost