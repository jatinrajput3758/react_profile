import React from 'react'
import Avatar from './Images/ava3.webp'

export default function Profile() {
    return (
        <div className=' border justify-content-center shadow m-4 rounded'>
            <div className=' text-center m-3'>
                <img src={Avatar} alt='' className='rounded-circle' style={{ width: "130px" }} />
            </div>
            <h4 className='text-center fw-medium'>jatin</h4>
            <p className=' text-center m-1 opacity-75'>Full Stack Web Developer</p>
            <p className=' text-center opacity-75'>Master in Premier Pro Tool</p>
            <div className=' d-flex m-4  justify-content-center'>
                <button className=' btn btn-info m-2 text-white fw-bold'>Follow</button>
                <button className=' btn btn-outline-info m-2 text-info fw-bold'>Follow</button>
            </div>
        </div>
    )
}
