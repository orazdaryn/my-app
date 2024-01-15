import React, { useState } from 'react'
import Post from './Post'
import Posts from './Posts'

export default function Main(props) {

const [counter, setCounter] = useState(0)

function plus() {
  setCounter(counter + 1)
}

function minus() {
  setCounter(counter - 1)
}








  return (
   

    <main>







<Posts posts ={props.data} />

    </main>
  )
}
