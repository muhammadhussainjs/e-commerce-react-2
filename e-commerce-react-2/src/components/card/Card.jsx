import React from 'react'
import { useNavigate  , useParams} from 'react-router-dom'

const Card = ({src , title , description , id ,showbtn=true }) => {
  const navigate = useNavigate()
  

  function Singleproductpage(){
    navigate(`/singleproduct/${id}`)
    
  }



  return (
  
<>

 
   <div class="card  card-side bg-base-100 shadow-xl ">
  <figure><img src={src} alt="image" className='w-48' /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{description}</p>
    <p>{id}</p>
    <div class="card-actions justify-end">
     {showbtn ?  <button onClick={Singleproductpage} class="btn btn-primary">showdetails</button>: false}
    </div>
  </div>
</div>


</>
  )
}

export default Card