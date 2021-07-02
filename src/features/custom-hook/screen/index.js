import React from 'react'
import useGateData from '../hooks/useGetData'
import Table from '../../call-api/components/Table'

const CustomHook = () => {
  const [data, loading] = useGateData('https://jsonplaceholder.typicode.com/posts')
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

export default CustomHook
