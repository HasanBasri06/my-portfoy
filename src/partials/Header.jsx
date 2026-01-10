import React from 'react'

function Header() {
    const header = [
        {name: 'Hakkımda', to: '/'},
        // {name: 'Blog', to: '/blogs'},
        {name: 'Gündem', to: '#gundem'},
        {name: 'Teknolojiler', to: '#technologies'},
        {name: 'Kariyer', to: '#career'},
    ]

    return (
        <header>
            <ul className='px-4'>
                { header.map((menu, index) => (
                    <li key={index}>
                        <a href={menu.to}>{ menu.name }</a>
                    </li>
                )) }
            </ul>
        </header>
  )
}

export default Header