import React from 'react'
import { useNavigate } from 'react-router-dom'


const ProductItem = ({data}) => {
    const navigate = useNavigate()
    const verMas = ()=>{
        navigate(`producto/${data.id}`)
    }
   
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={data.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"></h5>
        <p className="card-text">
          {data.description}
        </p>
        <button onClick={verMas}>Detalles</button>
      </div>
    </div>
  )
}

export default ProductItem
