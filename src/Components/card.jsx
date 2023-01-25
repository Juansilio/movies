import React from 'react'
import { useParams } from 'react-router-dom'

const Card = ({imgUrl, titulo}) => {

  return (
    <div className="Card" style={{width: 200 }}>      
               <img src={imgUrl} className="card-img-top" alt="..." />
               <div className="card-body">
               <h5 className="card-title">Card title</h5>
               <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>          
    </div>
      </div>
  )
}

export default Card