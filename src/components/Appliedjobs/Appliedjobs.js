import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import {FaSearchLocation, FaDollarSign} from 'react-icons/fa';
// import Applydetails from '../applydetails/applydetails';
import Applydetails from '../Applydetails/Applydetails';
export default function Appliedjobs() {
  
  const saveCart = useLoaderData();
  // const dataOnsite = (data) => {
  //   if (data == "Onsite") {
  //     const onsite = saveCart.filter(
  //       (data) => data.work_area === "Onsite"
  //     );
  //     setCarts(onsite);
  //   } else if (data == "all") {
  //     setCarts(saveCart);
  //   }
  // };

  return (
    <div className=''>
       

            {saveCart.map((card) => (
        <Applydetails key={card?.id} card={card}></Applydetails>
      ))}


      
    </div>
  )
}
