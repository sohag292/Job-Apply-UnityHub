import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/Fake';
import Applydetails from '../Applydetails/Applydetails';

export default function Appliedjobs() {
  const [cart, setCart] = useState([]);
  const pData = useLoaderData();

  useEffect(() => {
    const saveCart = getShoppingCart();
    let newArr = [];
    for (const id in saveCart) {
      const foundProduct = pData.find((product) => product.id === id);
      if (foundProduct) {
        foundProduct.quantity = saveCart[id];
        newArr.push(foundProduct);
      }
    }
    setCart(newArr);
  }, [pData]);
  console.log(cart);

  return (
    <div className="">
      <h1 className='text-center bg-light p-5'>Applied Jobs</h1>
      {
        cart.map((carts)=><Applydetails
        key={carts.id}
        carts={carts}
        
        >

        </Applydetails>)
      }
    </div>
  );
}
