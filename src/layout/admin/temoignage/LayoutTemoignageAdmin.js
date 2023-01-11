import React from 'react'
import { Outlet } from 'react-router-dom'
import {BsFillChatTextFill} from  "react-icons/bs";


const LayoutTemoignageAdmin = () => {
  return (
    <div>
      <div class="w-full px-3 py-2">
        <div class=" w-full relative w-full flex flex-col space-x-2">
        <div class="py-1 my-2 mx-1 bg-lime-700 text-white px-2 py-2 rounded-lg flex justify-center ">
                <h2 class=" text-white flex space-x-3 items-center text-xl"><BsFillChatTextFill class="text-white w-8 h-8"/>Temoignages</h2>
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
