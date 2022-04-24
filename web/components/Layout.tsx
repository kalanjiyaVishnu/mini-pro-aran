import React from 'react'
import Nav from './Nav'
type propType = {
  children: JSX.Element
}
const Layout: React.FC<propType> = ({ children }) => {
  return (
    <main className="min-h-screen bg-[#121212] py-8 font-body text-white ">
      <div className="mx-auto flex  w-screen max-w-[94%] flex-col items-center justify-center ">
        <Nav />
        {children}
      </div>
    </main>
  )
}
export default Layout
