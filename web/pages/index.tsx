import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 right-0 z-0 h-screen w-screen  opacity-80 ">
        <img
          src="https://www.howtogeek.com/wp-content/uploads/2021/07/windows-10-logo.jpeg?width=1198&trim=1,1&bg-color=000&pad=1,1"
          className="-z-50 h-full w-full object-cover"
        />
      </div>
      <main className="z-30  flex h-full items-center justify-center">
        <div className=" my-auto flex flex-col sm:w-2/3">
          <span className="mb-12 h-2  bg-gray-800 dark:bg-white"></span>
          <h1 className="font-bebas-neue flex flex-col text-6xl font-black uppercase leading-none text-gray-800 dark:text-white sm:text-8xl">
            When god closes a door, He Opens a
            <span className="text-5xl sm:text-7xl">Window</span>
          </h1>
          <p className="text-sm text-gray-700 dark:text-white sm:text-base">
            Dimension of reality that makes change possible and understandable.
            An indefinite and homogeneous environment in which natural events
            and human existence take place.
          </p>
          {/* <div className="mt-8 flex">
            <a
              href="/register"
              className="text-md mr-4 rounded-lg border-2 border-transparent bg-gray-800 py-2 px-4 uppercase text-white shadow-md transition-all  duration-150 hover:bg-gray-800"
            >
              Get started
            </a>
            <a
              href="#"
              className="text-md rounded-lg border-2 border-gray-800
             border-opacity-80  bg-transparent py-2 px-4 uppercase text-warmGray-900 hover:bg-gray-800 hover:text-white "
            >
              Read more
            </a>
          </div> */}
          <div className="mt-5 flex items-baseline sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="/register"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
              >
                {' '}
                Get started{' '}
              </a>
            </div>
            <div className="mt-3  sm:mt-0 sm:ml-3 ">
              <a
                href="/about"
                className="flex w-full items-center justify-center rounded-md border-2 border-transparent border-indigo-600 bg-transparent px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-50 hover:bg-opacity-10  md:py-4 md:px-10 md:text-lg"
              >
                {' '}
                About us{' '}
              </a>
            </div>
          </div>
        </div>
        <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
          {/* <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxd4I-nmZwpRUP2x0pX_RVyoXHk5VNP-a8fw&usqp=CAU"
          className="m-auto max-w-xs md:max-w-sm"
        /> */}
        </div>
      </main>
    </>
  )
}

export default Home
