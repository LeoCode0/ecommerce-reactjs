import React from 'react'

export const OnlyImages = ({ data }) => {
  return (
    <ul>
      {data.map(items => <li><img src={items.images[0]} alt="" /></li>)}
    </ul>
  )
}
