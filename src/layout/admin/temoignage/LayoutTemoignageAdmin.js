import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutTemoignageAdmin = () => {
  return (
    <div>
        <div class="w-full">
            <div class=" w-full relative w-full flex flex-col space-x-2">
                <div class="py-3 bg-emerald-800 text-white">
                <h2 class="text-white text-2xl">Temoignages</h2>
                </div>
                <div class="w-full px-2">
                    <Outlet/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LayoutTemoignageAdmin
