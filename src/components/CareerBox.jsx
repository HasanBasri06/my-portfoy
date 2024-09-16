import React from 'react';

function CareerBox({career}) {
    return (
        <div className='career'>
            <div className='careerDateTime'>{career.date}</div>
            <div className='careerDetail'>
            <div>
                <h3>{career.title}</h3>
                <h4>{career.company}</h4>
            </div>
            <h4 className='careerDesc'>
                {career.description}
            </h4>
            <h5 className='pad-5'>{career.technologies.join(', ')}</h5>
            </div>
        </div>
    )
}

export default CareerBox