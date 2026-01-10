import React from 'react'
import BlogDetailLyout from '../../BlogDetailLyout'
import { Router, useNavigate } from 'react-router'

export default function PHP85() {

    const navigate = useNavigate()

    let content = {
        title: 'PHP 8.5 de Gelen Özellikler',
        image: '/src/assets/php85.jpg',
        content: ``
    }

  return (
    <BlogDetailLyout>
        <div className='flex flex-col gap-8 mt-20'>
            <div className='flex flex-col gap-5 items-start'>
                <button className='px-4 py-1 rounded-md bg-red-500 font-semibold' onClick={() => navigate('blogs')}>Geri</button>
                <div className='flex flex-col gap-3'>
                    <h1 className='text-xl font-black'>{content.title}</h1>
                    <h4 className='text-sm text-gray-400'>12.01.2025</h4>
                </div>
            </div>
            <img className='w-full h-72 object-cover rounded-md' src={content.image} />
            <p className='leading-loose'>
            <span className='dropcap'>L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        <pre>{'<?'}php <span className='imp'>echo</span> 'Hello World'; {'?>'}</pre>
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
        </div>
    </BlogDetailLyout>
  )
}
