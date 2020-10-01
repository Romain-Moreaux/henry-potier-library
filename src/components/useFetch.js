import Axios from 'axios'
import { useEffect, useState } from 'react'

const useFetchApi = (initialUrl, initialData) => {
  const [data, setData] = useState(initialData)
  const [url, setUrl] = useState(initialUrl)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false)
      setIsLoading(true)

      try {
        const result = await Axios(url)
        setData(result.data)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }
    if (url) fetchData()
  }, [url])

  return [{ data, isLoading, isError }, setUrl]
}

export default useFetchApi
