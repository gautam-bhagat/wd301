import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound : React.FC = () => {
  const navigate = useNavigate();
  

  return (
    <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
    <div className="rounded-lg bg-white p-8 text-center shadow-xl">
      <h1 className="mb-4 text-4xl font-bold">404</h1>
      <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>
      <button id="backToHomeButton" onClick={()=>{ navigate("/home");}} className="mt-4 inline-block rounded bg-gray-500 px-4 py-2 font-semibold text-white hover:bg-gray-600"> Go back to Home </button>
    </div>
  </div>
  )
}

export default NotFound
