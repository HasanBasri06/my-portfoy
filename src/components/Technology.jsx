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
            level: '85%',
            color: '#be123c',
        },
        {
            name: 'Javascript',
            level: '75%',
            color: '#67e8f9',
        },
        {
            name: 'Vue',
            level: '75%',
            color: '#10b981',
        },
        {
            name: 'React',
            level: '75%',
            color: '#1e40af',
        },
        {
            name: 'NextJs',
            level: '85%',
            color: '#032B43',
        },
        {
            name: 'Git',
            level: '75%',
            color: '#9f1239',
        },
        {
            name: 'Redis',
            level: '50%',
            color: '#713f12',
        },
        {
            name: 'Cursor',
            level: '85%',
            color: '#D00000',
        },
        {
            name: 'AI',
            level: '85%',
            color: '#3F88C5',
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
            level: '90%',
            color: '#172554',
        },
        {
            name: 'WebSocket',
            level: '30%',
            color: '#f9a8d4'
        },
        {
            name: 'Docker',
            level: '45%',
            color: '#3b82f6'
        },
        {
            name: 'NodeJs',
            level: '45%',
            color: 'yellow'
        },
        {
            name: 'ExpressJs',
            level: '50%',
            color: 'green'
        }
    ]

    return (
        <>
            <h3 className='title'>Kullandığım Teknolojiler</h3>
            <div className='usedTechnologies'>
                {
                    technologies.map((technology, index) => (
                        <div key={index} className='usedTechnologiesBox' title={technology.name} style={{'--border': '1px solid ' + technology.color}}>
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