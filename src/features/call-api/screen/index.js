import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/Table'

const CallAPI = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
        // console.log('data', data)
        setData(data)
      } catch (error) {
        console.log('errors', error)
      } finally {
        setLoading(false)
      }
    }
    getData()
  }, [])


  return (
    <div>
      {loading
        ? (
          <div>Loading...</div>
        )
        : (
          <Table
            data={data}
          />
        )}
    </div>
  )
}

export default CallAPI
