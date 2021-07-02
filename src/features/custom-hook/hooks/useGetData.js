import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetData = (path) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const { data } = await axios.get(path)
        // console.log('data', data)
        setData(data)
      } catch (error) {
        // console.log('errors', error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])

  return [data, loading]
}

export default useGetData
