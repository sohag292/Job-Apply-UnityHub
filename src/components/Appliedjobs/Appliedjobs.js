import { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getmanCart } from '../../utilities/Fake';
import Applydetails from '../Applydetails/Applydetails';

export default function Appliedjobs() {
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState('All');
  const pData = useLoaderData();

  useEffect(() => {
    const saveJob = getmanCart();
    let newArr = [];
    for (const id in saveJob) {
      const foundjob = pData.find((job) => job.id === id);
      if (foundjob) {
        foundjob.quantity = saveJob[id];
        newArr.push(foundjob);
      }
    }
    setCart(newArr);
  }, [pData]);

 
  const filteredCart = filter === 'All' ? cart : cart.filter(c => c.work_area === filter);

  return (
    <div className="">
      <h1 className='text-center bg-light p-5'>Applied Jobs</h1>
      <div className='container d-flex'>
        <div className="ms-auto">
          <select name="" id="" value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">All</option>
            <option value="Remote">Remote</option>
            <option value="OnSite">OnSite</option>
          </select>
        </div>
      </div>
      {
        filteredCart.map((carts) => <Applydetails
          key={carts.id}
          carts={carts}
        >
        </Applydetails>)
      }
    </div>
  );
}
