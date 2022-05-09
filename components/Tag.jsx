import React from 'react'

const Tag = (props) => {
  return (
   <a
   className="btn btn-link"
   style={{ textDecoration: "none" }}
   href={`/tema/[${props.slug}]`}
 >
   {props.text}
 </a>
  )
}

export default Tag