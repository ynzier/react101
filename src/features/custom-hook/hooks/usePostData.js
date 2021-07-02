import { useCallback, useState } from 'react'
import axios from 'axios'

const useGetData = (path) => {
  const [responce, setResponce] = useState(null)
  const [loading, setLoading] = useState(false)

  const post = useCallback(async (body) => {
    setLoading(true)
    try {
      const { data } = await axios.post(path, body)
      setResponce(data)
    } catch (error) {
      setResponce('เกิดข้อผิดพลาด')
      console.log('error', error)
    } finally {
      setLoading(false)
    }
  }, [])

  return [post, responce, loading]
}

export default useGetData
