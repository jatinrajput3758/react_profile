import React from 'react'

export default function AP_status1(props) {
    return (
        <div className='container p-4 mt-4 rounded shadow'>
            <h5 className=' mb-4 '><span className=" text-info">Assisment</span> Project Status </h5>

            <p className=' text-start mb-1 fw-light'> Web Design</p>
            <div className="progress rounded" style={{ height: "7px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: props.width }} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className=' text-start mb-1 mt-3 fw-light'> Web Design</p>
            <div className="progress rounded" style={{ height: "7px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className=' text-start mb-1 mt-3 fw-light'> Web Design</p>
            <div className="progress rounded" style={{ height: "7px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className=' text-start mb-1 mt-3 fw-light'> Web Design</p>
            <div className="progress rounded" style={{ height: "7px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <p className=' text-start mb-1  mt-3 fw-light'> Web Design</p>
            <div className="progress rounded" style={{ height: "7px" }}>
                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    )
}
