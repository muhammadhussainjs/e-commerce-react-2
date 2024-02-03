import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../../components/card/Card'

const Product = () => {
    const [data , setData]= useState([])

    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
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
<div className=' gap-6 text-center d-flex justify-content-center w-2/4 ml-12 mt-12 mb-12'>
     {data.length > 0 ? data.map((item)=>{
       return <Card key={item.id} src={item.image} title={item.title.slice(0,30)} description={item.description.slice(0,60)} id={item.id}/>

    }): <h1 className='text-[2rem] font-mono'>Loading...</h1>}
    </div>
    </>

  )
}

export default Product