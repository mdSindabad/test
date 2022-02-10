import React from 'react'

const FormMenu = () => {
    return (
        <div className='container my-4 rounded-3 p-4 bg-white'>
            <div className='d-flex align-items-center mb-2'>
                <div className='me-4 bg-info py-2 px-3 rounded-3 text-white fw-bold'>1</div>
                <div>
                    <h6 className='text-secondary'>Create Blast Campaign</h6>
                    <p className='text-secondary'>Traffic blast to your campaign</p>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div className='me-4 bg-light py-2 px-3 rounded-3 fw-bold text-info'>2</div>
                <div>
                    <h6>Trackling Link</h6>
                    <p className='text-secondary'>The trackling link to track your stats</p>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div className='me-4 bg-light py-2 px-3 rounded-3 fw-bold text-info'>3</div>
                <div>
                    <h6>Live Map Feed</h6>
                    <p className='text-secondary'>See your clicks in real time!</p>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div className='me-4 bg-light py-2 px-3 rounded-3 fw-bold text-info'>4</div>
                <div>
                    <h6>Trafic Tiers</h6>
                    <p className='text-secondary'>Analyze the quality of your traffic</p>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div className='me-4 bg-light py-2 px-3 rounded-3 fw-bold text-info'>5</div>
                <div>
                    <h6>Live Map Feed</h6>
                    <p className='text-secondary'>See your clicks in real time</p>
                </div>
            </div>
            <div className='d-flex align-items-center mb-2'>
                <div className='me-4 bg-light py-2 px-3 rounded-3 fw-bold text-info'>6</div>
                <div>
                    <h6>Statistics</h6>
                    <p className='text-secondary'>Analyze your campaign in details</p>
                </div>
            </div>
        </div>
    )
}

export default FormMenu