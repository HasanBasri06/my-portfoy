import React from 'react'

function Technology() {
    const technologies = [
        {
            name: 'PHP',
            level: '85%',
            color: '#3b0764',
        },
        {
            name: 'Laravel',
            level: '80%',
            color: '#be123c',
        },
        {
            name: 'Javascript',
            level: '70%',
            color: '#67e8f9',
        },
        {
            name: 'Vue',
            level: '50%',
            color: '#10b981',
        },
        {
            name: 'React',
            level: '50%',
            color: '#1e40af',
        },
        {
            name: 'Git',
            level: '60%',
            color: '#9f1239',
        },
        {
            name: 'Redis',
            level: '10%',
            color: '#713f12',
        },
        {
            name: 'Jquery',
            level: '70%',
            color: '#1e3a8a',
        },
        {
            name: 'Html',
            level: '100%',
            color: '#0f172a',
        },
        {
            name: 'Css',
            level: '90%',
            color: '#fcd34d',
        },
        {
            name: 'Bootstrap',
            level: '90%',
            color: '#1e1b4b',
        },
        {
            name: 'Tailwind',
            level: '80%',
            color: '#172554',
        },
    ]

    return (
        <>
            <h3 className='title'>Kullandığım Teknolojiler</h3>
            <div className='usedTechnologies'>
                {
                    technologies.map((technology, index) => (
                        <div key={index} className='usedTechnologiesBox' style={{'--border': '1px solid ' + technology.color}}>
                            <div className='technologyBar' style={{'--col': technology.color, '--level': technology.level}}></div>
                            <div className='technologyTitle'>{technology.name}</div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Technology