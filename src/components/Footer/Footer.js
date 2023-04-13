import React from 'react'
import logo from '../../image/Group 9969.png'
import './Footer.css'
export default function Footer() {
    return (
        <div className='bg-dark'>
            <footer className='py-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <h3 className='text-white'>UnityHub</h3>
                            <p className='text-light'>There are many variations of passages of Lorem Ipsum, but the majority have suffered alteration in some form.</p>
                            <img src={logo} alt='UnityHub Logo' className='img-fluid mb-3' />
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <h6 className='text-light'>Company</h6>
                            <p className='text-light'>About Us</p>
                            <p className='text-light'>Work</p>
                            <p className='text-light'>Latest News</p>
                            <p className='text-light'>Careers</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <h6 className='text-light'>Company</h6>
                            <p className='text-light'>About Us</p>
                            <p className='text-light'>Work</p>
                            <p className='text-light'>Latest News</p>
                            <p className='text-light'>Careers</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <h6 className='text-light'>Company</h6>
                            <p className='text-light'>About Us</p>
                            <p className='text-light'>Work</p>
                            <p className='text-light'>Latest News</p>
                            <p className='text-light'>Careers</p>
                        </div>
                        <div className='col-lg-2 col-md-4 col-sm-6'>
                            <h6 className='text-light'>Company</h6>
                            <p className='text-light'>About Us</p>
                            <p className='text-light'>Work</p>
                            <p className='text-light'>Latest News</p>
                            <p className='text-light'>Careers</p>
                        </div>
                    </div>
                    <hr className='gray-hr' />
                    <div className='row'>
                        <div className='col-md-6 text-md-start text-center'>
                            <p className='text-light'>&copy; 2023 UnityHub. All Rights Reserved</p>
                        </div>
                        <div className='col-md-6 text-md-end text-center'>
                            <p className='text-light'>Powered by UnityHub</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
