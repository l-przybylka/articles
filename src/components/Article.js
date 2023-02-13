import React from 'react'
let { state } = useLocation();

const Article = () => {
console.log(state)
  return (
    <div>Article</div>
  )
}

export default Article