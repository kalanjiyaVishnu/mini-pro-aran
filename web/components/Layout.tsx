import React from 'react'
import Nav from './Nav'
type propType = {
  children: JSX.Element
}
const Layout: React.FC<propType> = ({ children }) => {
  return (
    <main className="bgq-[#121212]  h-screen py-8 font-body ">
      <Nav />
      <div className="mx-auto flex  h-full w-screen max-w-[80%] flex-col items-center justify-center ">
        {children}
      </div>
    </main>
  )
}
export default Layout
