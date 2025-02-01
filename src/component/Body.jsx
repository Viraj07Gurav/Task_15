import React from 'react'
import Header from './header'
import Cards from './Cards'
import Footer from './Footer'
import '../App.css'

function Body() {
  return (
    <div>
        <div className=" w-full bg-white flex justify-center  ">
                <div className="w-100 bg-gradient-to-r from-pink-100 via-yellow-100
               to-pink-300 border-2 border-purple-900 rounded-3xl p-3">
                   <Header />
                   <Cards/>
                   <Footer/>
        </div>
        </div>
    </div>
  )
}

export default Body