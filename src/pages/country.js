import React from 'react'
import { useParams, Navigate } from 'react-router-dom'

const Country = ({country}) => {
  const { name } = useParams()
  return (
    <div>
      {name}
    </div>
  )
}

export default Country
