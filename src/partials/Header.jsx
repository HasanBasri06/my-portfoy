import React from 'react'

function Header() {
    const header = [
        {name: 'Hakkımda', to: ''},
        {name: 'Gündem', to: ''},
        {name: 'Teknolojiler', to: ''},
        {name: 'Kariyer', to: ''},
    ]

    return (
        <header>
            <ul>
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