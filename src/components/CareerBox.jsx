import React from 'react';

function Tecknology({tecknology, index}) {
    return <span key={index}>{tecknology}</span>
}

function CareerBox({career, index}) {
    return (
        <div className='careerBox' key={index}>
            <h4 className='careerTitle'>{career.company}</h4>
            <div className='careerRow'>
                <h5 className='careerCity'>{career.title}</h5>
                <div className='careerDate'>{career.date}</div>
            </div>
            <p className='careerDesc'>{career.description}</p>
            <div className='careerTechnologies'>
                { career.technologies.map((tecknology, index) => <Tecknology tecknology={tecknology} key={index} />) }
            </div>
        </div>
    )
}

export default CareerBox