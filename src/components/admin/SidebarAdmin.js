import React from 'react'
import {FiUsers} from  "react-icons/fi";
import AllRoutes from '../../nametitle/AllRoutes';



const SidebarAdmin = () => {
    const  bgImg = "https://scontent.fabj7-1.fna.fbcdn.net/v/t39.30808-6/279491809_1395567707582484_6190382817174491808_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeF7tKO9wFjgGzPdrOXkhH84IcNbOkFqO6whw1s6QWo7rD6Eyxesmd3x-ldDc4ExRnZgrJGZwSVY2eDhdOFpEWD-&_nc_ohc=B5XEfvkh1DMAX9yQbP5&_nc_ht=scontent.fabj7-1.fna&oh=00_AfAU_xeV1SGibyw1Gno0XAe2H9p7ELEHDhem3SVPNbHYLw&oe=638A7152";
  return (
    <div className="sticky top-0 left-0 z-50 w-[200px] h-screen bg-lime-700">
        <div class="flex flex-col items-center justify-center">
            <img src={bgImg} class="h-[50px] w-[50px] rounded-[50%]"/>
            <h2 class="px-2 text-white text-xl font-bold]">Plénitude</h2>
        </div>
        <div class="w-full h-screen">
            <div class="w-full">
                <div class="w-[200px] bg-lime-400 transition-all ease-linear duration-700 py-3 my-2">
                    <a href={`/${AllRoutes.admin}`} class="px-2 text-white w-[200px]">Dashboard</a>
                </div>
                <div class="w-[200px]  bg-lime-700 hover:bg-lime-400 transition-all ease-linear duration-700 py-3 my-2">
                    <a href={`/${AllRoutes.admin}/${AllRoutes.temoins}`} class="px-2 text-white w-[200px]">Temoignages</a>
                </div>
                <div class="w-[200px]  bg-lime-700 hover:bg-lime-400 transition-all ease-linear duration-700 py-3 my-2">
                    <a href={`/`} class="px-2 text-white w-[200px]">Activités</a>
                </div>
                <div class="w-[200px]  bg-lime-700 hover:bg-lime-400 transition-all ease-linear duration-700 py-3 my-2 flex item-center justify-center">
                    <a href={`/`} class="px-2 text-white w-[200px]  ">Membres</a>
                </div>
                <div class="w-[200px]  bg-lime-700 hover:bg-lime-400 transition-all ease-linear duration-700 py-3 my-2 flex item-center justify-center">
                    <a href={`/`} class="px-2 text-white w-[200px]  ">Utlisateurs</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SidebarAdmin
