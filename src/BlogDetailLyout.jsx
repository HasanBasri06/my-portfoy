import Header from './partials/Header';

export default function BlogDetailLyout({children}) {
    
  return (
        <div className='main'>
          <Header />
          <div className='content'>
            {children}
          </div>
        </div>
  )
}
