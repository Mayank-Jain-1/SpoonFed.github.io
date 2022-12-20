import React from 'react'

export const Navbar = () => {
  return (
    <nav className='row w-100 position-absolute d-none d-md-flex justify-content-end px-5 mt-3 '>
      <a className='col-1 p-3 text-decoration-none text-white mx-4' href="https://google.com">Login</a>
      <a className='col-2 p-3 text-decoration-none text-white border border-white border-2 navlink' href="https://google.com">Create an account</a>
    </nav>
  )
}

export default Navbar