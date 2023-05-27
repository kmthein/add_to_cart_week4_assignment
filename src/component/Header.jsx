import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { itemContext } from '../store/itemContext';

const Header = ({showCartHandler}) => {
  const {cartItems} = useContext(itemContext);

  const totalCart = cartItems.reduce((currentVal, item) => {
    return currentVal + item.amount
  }, 0);

  return (
    <div>   
        <nav className=' py-2 flex items-center justify-between'>
            <div>
                <h2 className=' text-[35px] uppercase text-violet-700 font-bold'>Freshy</h2>
            </div>
            <div>
                <FaShoppingCart onClick={showCartHandler} className='text-violet-700 text-2xl inline-block relative mt-3 ml-1 cursor-pointer'/>
                  <span className=' bg-red-600 text-white w-[20px] h-[20px] text-center pt-[2px] ml-[-5px] absolute text-xs rounded-full'>{totalCart}</span> 
                
            </div>
        </nav>        
    </div>
  )
}

export default Header