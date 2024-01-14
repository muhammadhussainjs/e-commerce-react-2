import React ,{useEffect , useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import Card from '../../components/card/Card'

const Singleproduct = () => {
  const params = useParams()
  console.log(params);
  const [data , setData]= useState(null)

  useEffect(()=>{
      axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res)=>{
          console.log(res.data);
          setData(res.data)
          console.log(data);
      })
      .catch((err)=>{
          console.log(err);

      })

  }, [])
  return (
    <>
    <div className='mt-24 ml-24 w-3/4 '>
      {data ? <Card src={data.image} title={data.title} description={data.description} showbtn={false}/>:<h1 className='text-[2rem]'>Loading...</h1>}
  </div>  </>

  )
}

export default Singleproduct