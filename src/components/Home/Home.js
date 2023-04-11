import React, { useEffect, useState } from 'react'
import img from '../../image/cover.png'
import './Home.css'
import Job from '../JobCategory/Job';


export default function Home() {
  const [jobCategory, setjobCategory] = useState([]);

  useEffect(() => {
    fetch('jopCategory.json')
      .then(res => res.json())
      .then(data => setjobCategory(data))
  }, [])

  return (
    <div>
      <div className='bg-light'>
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-6 order-md-first">
              <div>
                <h1 className="banner-heading">One Step Closer To Your <span>Dream Job</span></h1>
                <p className="banner-desc">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn-custom">Get Started</button>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <img src={img} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className='container my-5'>
        <div class='text-center'>
          <h1>Job Category List</h1>
          <p class='text-gray'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
        <div class='row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4'>
          {
            jobCategory.map(job =>
              <div class='col' key={job.id}>
                <Job job={job}></Job>
              </div>
            )
          }
        </div>
      </div>

      <div className='container my-5'>
      <div class='text-center'>
          <h1>Features Jobs</h1>
          <p class='text-gray'>Explore thousands of job opportunities with all the information you need. Its your future</p>
        </div>
      </div>
    </div>
  )
}
