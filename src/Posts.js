import React, { useState } from 'react'
import Post from './Post'

export default function Posts(props) {

  let postData = props.posts

  const [posts_data, setPosts] = useState(postData)

  const [text, setText] = useState("")

  const [postTitle, setTitle] = useState("")

  const addNewPost = () => {
    const newPost = {
      id: Date.now(),
      text,
      postTitle
    }

    setPosts([...posts_data, newPost])
    setText("")
    setTitle("")
  }

  function deleletePost(post_id) {
    setPosts(posts_data.filter(p => p.id != post_id))
  }

  let posts = posts_data.map(p => {
    return <Post postTitle={p.postTitle} text={p.text} deleletePost={deleletePost} id={p.id} />
  })

  return (
    <div className='all_posts'>


      <form className='form' action="">

        <div className="form-post">

          <div className="form-input"></div>
          <input type='text' value={postTitle} onChange={e => setTitle(e.target.value)} placeholder='что то-что то'></input>
        </div>

        <div>
          <div className="form-input"></div>
          <input type='text' value={text} onChange={e => setText(e.target.value)} placeholder='текст поста'></input>
        </div>

        <button className='but' type='button' onClick={addNewPost}>добавить</button>


      </form>







      {posts}

    </div>
  )
}
