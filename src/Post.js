import React, { useState } from 'react'

export default function Post(props) {



  let darn = React.createRef()

  function changecolor() {
    darn.current.style.fontSize = '40px'
    darn.current.style.color = 'yellow'
  }



  function returncolor() {
    darn.current.style.fontSize = '34px'
    darn.current.style.color = 'black'
  }


  const [Like, setLike] = useState(0)


  const [Dislike, setDislike] = useState(0)


  function like() {
    setLike(Like + 1)
  }


  function dislike() {
    setDislike(Dislike + 1)
  }


  return (
    <div className='post_daryn'>

      <h1 ref={darn} onMouseEnter={changecolor} onMouseLeave={returncolor}>{props.postTitle}</h1>

      <p>{props.text}</p>


      <div className='battin'>

        <button>бавить  в избр❤️ </button>

        <button>жми и звони💮</button>




        <h1 >like:{Like}</h1>

        <h1 >Dislike:{Dislike}</h1>



        <div className='like'>
          <button onClick={like}>like</button>
        </div>


        <div className='Dislike'>
          <button onClick={dislike}>Dislike</button>
        </div>


        <div className='delete'>
          <button onClick={() => props.deleletePost(props.id)}>удалить пост </button>
        </div>






































      </div>





    </div>
  )
}
