import React from 'react';
import Header from '@modules/home/header/Header'
import Boxs from '@modules/home/content/boxs/Boxs'
import Author from '@modules/home/content/author/Author'
import Popup from '@modules/home/popup/Popup';

function Home() {
  const [isShow, setIsShow] = React.useState(false)
  const handleChange = () => {
    setIsShow(!isShow)
  }
  return (
    <>
       <div className="py-12 px-[100px] max-sm:px-5">
          <div>
            <Header onChange={handleChange}/>
          </div>
          <div className="flex gap-5 max-xl:flex-col">
              <div className="">
                <Author onChange={handleChange}/>
              </div>
              <div>
                <Boxs />
              </div>
          </div>
          {isShow ? <Popup onChange={handleChange}/> : ''}
        </div>
    </>
  )
}

export default Home;

