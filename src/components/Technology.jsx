import React from 'react'

function Technology() {
    const technologies = ['PHP', 'Laravel', 'Javascript', 'Vue', 'React', 'Git', 'Redis', 'Jquery', 'Html', 'Css', 'Bootstrap', 'Tailwind']

    return (
        <>
            <h3 className='title'>Kullandığım Teknolojiler</h3>
            <div className='usedTechnologies'>
                {
                    technologies.map(technology => <div>{technology}</div>)
                }
            </div>
        </>
    )
}

export default Technology