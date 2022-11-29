import React from 'react'
import { FiUsers } from 'react-icons/fi';
import MemberCompDashBoard from '../../components/admin/dasboard/MemberCompDashBoard';
import UserCompoDashboard from '../../components/admin/dasboard/UserCompoDashboard';

const DasboardAdmin = () => {
  const bgImg1 = "https://images.pexels.com/photos/5063055/pexels-photo-5063055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bgImg2 = "https://images.pexels.com/photos/5063055/pexels-photo-5063055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bgImg3 = "https://images.pexels.com/photos/5063055/pexels-photo-5063055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bgImg4 = "https://images.pexels.com/photos/5063055/pexels-photo-5063055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div class="container-fluid w-full p-2">
      <div class="w-full ">
        <h2 class="px-5">DasboardAdmin</h2>

        {/*  */}
        <div class="grid grid-cols-4 gap-3">
          <div class="bg-lime-600 text-white flex space-x-2 rounded-lg p-2 px-1">
            <div><img src={`${bgImg1}`} class="h-10 w-10" /></div>
            <div>
              <h2 class="text-2xl font-bold flex"><FiUsers/>Témoignages</h2>
              <div>
                <label>
                  nombres : <span class="font-bold text-2xl ">100</span>
                </label>
              </div>
              <div>
                <button class="hover:underline bg-light py-1 px-2 rounded-lg text-lime-700 ">
                  voire
                </button>
              </div>
            </div>
          </div>
          <div class="bg-lime-600 text-white flex space-x-2 rounded-lg p-2 px-1">
            <div><img src={`${bgImg1}`} class="h-10 w-10" /></div>
            <div>
              <h2 class="text-2xl font-bold flex"><FiUsers/>activités</h2>
              <div>
                <label>
                  nombres : <span class="font-bold text-2xl ">100</span>
                </label>
              </div>
              <div>
                <button class="hover:underline bg-light py-1 px-2 rounded-lg text-lime-700 ">
                  voire
                </button>
              </div>
            </div>
          </div>
          <div class="bg-lime-600 text-white flex space-x-2 rounded-lg p-2 px-1">
            <div><img src={`${bgImg1}`} class="h-10 w-10" /></div>
            <div>
              <h2 class="text-2xl font-bold flex"><FiUsers/> membres</h2>
              <div>
                <label>
                  nombres : <span class="font-bold text-2xl ">100</span>
                </label>
              </div>
              <div>
                <button class="hover:underline bg-light py-1 px-2 rounded-lg text-lime-700 ">
                  voire
                </button>
              </div>
            </div>
          </div>
          <div class="bg-lime-600 text-white flex space-x-2 rounded-lg p-2 px-1">
            <div><img src={`${bgImg1}`} class="h-10 w-10" /></div>
            <div>
              <h2 class="text-2xl font-bold flex"><FiUsers/> utilisateur</h2>
              <div>
                <label>
                  nombres : <span class="font-bold text-2xl ">100</span>
                </label>
              </div>
              <div>
                <button class="hover:underline bg-light py-1 px-2 rounded-lg text-lime-700 ">
                  voire
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-3 mt-5">
          <UserCompoDashboard/>
          <MemberCompDashBoard/>
        </div>

      </div>
    </div>
  )
}

export default DasboardAdmin;