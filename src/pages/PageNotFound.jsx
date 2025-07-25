import React from 'react'

const PageNotFound = () => {
  return (
    <div>
    <section className="flex flex-col items-center justify-center mt-40">
        <div className="bg-white rounded-xl shadow-lg p-10 flex flex-col items-center">
            <h1 className="text-7xl font-extrabold text-red-500 mb-4 drop-shadow-lg">404</h1>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">Page Not Found</h2>
            <p className="text-lg text-gray-500 mb-6 text-center max-w-md">
                Sorry, the page you are looking for does not exist or has been moved.
            </p>
          
        </div>
    </section>
    </div>
  )
}

export default PageNotFound
