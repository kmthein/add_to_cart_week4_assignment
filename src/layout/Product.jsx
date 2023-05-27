import React, { useState } from 'react'
import Card from '../component/Card'
import { FRUITS } from '../component/FRUITS'

const Product = () => {
  const [fruits, setFruits] = useState(FRUITS);
  return (
    <div className='flex lg:justify-start justify-center  flex-wrap gap-[40px] ml-[20px]'>
      {
        fruits.map((fruit) => (
          <Card key={fruit.id} id={fruit.id} name={fruit.name} price={fruit.price} img={fruit.img} />
        ))
      }
    </div>
  )
}

export default Product