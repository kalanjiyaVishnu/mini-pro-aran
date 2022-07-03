import React from 'react'
import Nav from './Nav'
type propType = {
  children: any
}
const Layout: React.FC<propType> = ({ children }) => {
  return (
    <main className="bgq-[#121212x] h-[100vh] max-h-max min-h-screen w-full overflow-x-hidden   bg-primary-bg-color py-8">
      {/* <img
        src="https://www.howtogeek.com/wp-content/uploads/2021/07/windows-10-logo.jpeg?width=1198&trim=1,1&bg-color=000&pad=1,1"
        className="absolute top-0 left-0 bottom-0 right-0 h-screen w-screen opacity-75 "
      /> */}
      <Nav />
      <div className="z-20 mx-auto mt-10 flex h-full w-screen max-w-[80%] flex-col  py-10 ">
        {children}
      </div>
      <section className="h-screen"></section>
    </main>
  )
}
export default Layout
