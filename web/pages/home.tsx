const Home = () => {
  return (
    <main className="">
      {/* <div className="flex h-screen w-screen items-center justify-center">
        <div className="container mx-auto my-2 max-w-xs overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="relative mb-6">
            <img
              className="w-full"
              src="https://media.istockphoto.com/photos/front-entrance-of-a-home-with-blue-door-picture-id187890234?k=20&m=187890234&s=612x612&w=0&h=ymd36P5XCpJxiibxbll1dlmqtwPu5oB0ZU-u9zUAdQI="
              alt="Profile picture"
            />
            <div
              className="absolute w-full text-center"
              style={{ bottom: '-30px' }}
            >
              <div className="mb-10">
                <p className="text-lg font-bold uppercase tracking-wide text-white">
                  Witch
                </p>
                <p className="text-sm text-gray-400">@witch_forever</p>
              </div>
              <button className="custombutton rounded-full p-4 transition duration-200 ease-in focus:outline-none">
                <svg
                  viewBox="0 0 20 20"
                  enable-background="new 0 0 20 20"
                  className="h-6 w-6"
                >
                  <path
                    fill="#FFFFFF"
                    d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                     C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                     C15.952,9,16,9.447,16,10z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 py-10 px-6 text-center tracking-wide">
            <div className="posts">
              <p className="text-lg">324</p>
              <p className="text-sm text-gray-400">Posts</p>
            </div>
            <div className="followers">
              <p className="text-lg">7542</p>
              <p className="text-sm text-gray-400">Followers</p>
            </div>
            <div className="following">
              <p className="text-lg">295</p>
              <p className="text-sm text-gray-400">Following</p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <br /> */}
      {/* <br /> */}
      <div className="mb-10  w-fit  rounded-sm bg-warmGray-800 py-1 px-2 text-2xl text-sec-text-color">
        The Market Place
      </div>

      <div className="flex ">
        <div className=" transform rounded-xl bg-white p-6 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            className="w-64 rounded-t-md object-cover"
            src="https://images.unsplash.com/photo-1509223197845-458d87318791"
            alt=""
          />
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-gray-700">
              Zebra succulent
            </h1>
            <p className="mt-2 text-sm text-gray-700">Two sizes</p>
            <div className="mt-3 flex space-x-4 p-1">
              <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-green-200">
                <span className="block h-6 w-6 rounded-full bg-green-400">
                  {' '}
                </span>
              </div>
              <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-blue-200">
                <span className="block h-6 w-6 rounded-full bg-blue-400">
                  {' '}
                </span>
              </div>
              <div className="transform cursor-pointer rounded-full border-4 p-1 transition duration-200 hover:scale-105 hover:border-yellow-200">
                <span className="block h-6 w-6 rounded-full bg-yellow-400">
                  {' '}
                </span>
              </div>
            </div>
            <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
              <button className="block cursor-auto text-xl font-semibold text-gray-700">
                $12.99
              </button>
              <button className="block rounded-lg bg-green-400 py-2 px-6 text-lg font-semibold text-green-100 shadow transition duration-300 hover:text-white hover:shadow-md">
                Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Home
