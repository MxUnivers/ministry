import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutTemoignageAdmin = () => {
  return (
    <div>
      <div class="w-full px-3 py-2">
        <div class=" w-full relative w-full flex flex-col space-x-2">
          <div class="py-1 bg-lime-400 text-white px-2 py-2 rounded-lg">
            <h2 class=" ">Temoignages</h2>
          </div>
          <div class="w-full px-2 flex justify-center shadow-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LayoutTemoignageAdmin
