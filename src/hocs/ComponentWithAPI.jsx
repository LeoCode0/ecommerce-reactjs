import React, { useState, useEffect } from 'react'

export const ComponentWithAPI = (Component) => ({ API }) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
  }, [])


  if(loading){
    return <p>Loading...</p>
  }
  console.log(data)

  return <Component data={data} />
}
