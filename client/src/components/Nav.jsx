import React from 'react'
import {Navbar} from 'flowbite-react'
import {Link} from'react-router-dom'

const Nav = () => {
  return (
    <>
    <Navbar fluid={true} className="border-b-2  border-b-orange-500 py-6" >
      <div className="container mx-auto justify-between items-center">
        <Link to="/" className="text-3xl mx-4 font-bold text-orange-500 tracking-tight" >Foodies</Link>
      </div>

    </Navbar>
    </>
  )
}

export default Nav