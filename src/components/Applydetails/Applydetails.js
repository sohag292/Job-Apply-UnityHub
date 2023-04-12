import React from 'react'
import {FaSearchLocation, FaDollarSign} from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function Applydetails({ card }) {
    const {image, company_name, job_title,work_area,time,address,salary,id}  = card;
    // console.log(details);
    console.log('card===',card)
    return (
        <div>
           <div className="col-sm-6">
    <div className="card mb-4">
      <div className="card-body p-4">
        <img src={image} alt="" />
        <h4 className='mt-4'>{job_title}</h4>
        <h5 className='text-gray'>{company_name}</h5>
        <div className="d-flex my-3 ">
          <button className='btn btn-outline-primary me-3  fw-bold'>{work_area}</button>
          <button className='btn btn-outline-primary  fw-bold'>{time}</button>
        </div>
        <div className="d-flex">
            <p className='me-4 text-gray fw-bold'><FaSearchLocation/> {address}</p>
            <p className='text-gray fw-bold'><FaDollarSign/>Salary: {salary}</p>
        </div>
        {/* <button className='details-btn'>View Details</button> */}
        <Link to={`/friend/${id}`} className='details-btn'>View Details</Link>
        
      </div>
    </div>
    
  </div>
        </div>
    )
}
