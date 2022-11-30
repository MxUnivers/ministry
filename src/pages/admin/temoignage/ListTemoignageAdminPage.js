import React from 'react'
import {GrView} from "react-icons/gr";


const ListTemoignageAdminPage = () => {
  const bgImg = "";
  const items = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div class="w-full  rounded-lg bg-light px-2 py-2  ">
      <div class="w-full flex space-x-2 px-3">
        <div><img src={bgImg} /></div>
        <div class="w-full flex justify-between py-3 ">
          {/* Barre de recherche */}
          <div class="input-group rounded-lg w-[400px]">
            <input type="text" class="form-control  w-full" placeholder="rechercher..." />
            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
          </div>
          {/* Lien Ajouter */}
          <button type="btn" class=" btn btn-primary px-4 px-2">Ajouter</button>
        </div>
      </div>
      <div class="w-full flex space-x-2 h-[500px] overflow-y-scroll">
        <div class="w-full">
          <div class="w-full bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">

            <div class="w-full mt-2 overflow-x-auto">
              <div class="w-full whitespace-nowrap">
                <div class="w-full grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {
                    items.map(() => {
                      return (
                        <div tabindex="0" class="w-full btn-outline-light transition-all ease-linear h-[250px] duration-100 focus:outline-none my-2 border overflow-hidden border-gray-100 rounded-lg">

                          <div class="relative">
                            <div class=" flex space-x-3">
                              <div class="btn-danger px-1 py-1 ">Prière</div>
                              <div class="btn btn-danger px-1 py-1 text-white"><GrView class="text-white h-5 w-5" /></div>
                            </div>
                            <div class="py-1 ">
                              <h2 class="text-xl py-1">Titre du temoignage</h2>
                              <div class="flex space-x-3 items-center px-3">
                                <div><img src={bgImg} class="rounded-[50%] h-[50px] w-[50px] "/></div>
                                <div class=" text-black">Autheur</div>
                              </div>
                            </div>
                          </div>
                          <div class="rounded-t-lg mt-3">
                          <button type="button" class="btn btn-outline-primary">voire</button>
                          <button type="button" class="btn btn-outline-success">modifier</button>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ListTemoignageAdminPage;