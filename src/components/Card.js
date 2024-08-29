import React from 'react'

export default function Card(props) {
    return (
        <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-2'>

            <div className=" card" >
                <img src={props.image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title ">{props.title}</h5>
                    <p className="card-text">{props.techStack}</p>
                    <div className=" d-flex justify-content-between flex-sm-row flex-column align-items-center">
                        <p className='text-dark'>Source Code</p>
                        <a href={props.repo} className='fs-3 text-black'><i className='fa-brands fa-github'></i></a>
                    </div>
                </div>
            </div>

        </div>
    )
}