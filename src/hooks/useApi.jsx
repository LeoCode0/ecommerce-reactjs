import { useEffect, useState } from "react";

export const useApi = (API) => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(json => {
        setData(json)
        setLoading(false)
      })
      .catch(err => {
        setError(true)
        setData(err)
        setLoading(false)
      })
  }, [])

  return {data, error, loading}

}
