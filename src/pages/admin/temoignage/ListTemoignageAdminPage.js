

import React, { useState, useEffect } from 'react';
import { GrView } from "react-icons/gr";
import { LoadAllTemoignage } from '../../../actions/Temoignages/TemoignageAction';
import AllRoutes from '../../../nametitle/AllRoutes';
import { Localvalue } from '../../../nametitle/localValue';


const ListTemoignageAdminPage = () => {


  const bgImg = "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const items = [1, 1, 1, 1, 1, 1, 1, 1];
  const description = `
  Les formes anciennes du Moyen Âge désignent au xiie siècle le volume qui contient le texte sacré des Évangiles, puis au xiiie siècle, le texte original d'un livre saint ou des propos de quelqu'un. Au xviie siècle le mot s’applique au passage d'un ouvrage pris comme référence et au début du xixe siècle le mot texte a son sens général d'« écrit »6.
  `;
  const [TemoignageList, setTemoignageList] = useState([]);
  useEffect(() => {
    LoadAllTemoignage(setTemoignageList)
  }, []);

  return (
    <div class="w-full flex flex-col justify-center  rounded-lg bg-white rounded-lg ">
      <div class="w-full flex space-x-2 pr-2 mt-5">
        {/* <div><img src={bgImg} class="h-[50%] w-[50%] rounded-[50%]"/></div> */}
        <div class="w-full flex justify-between py-3 ">
          {/* Barre de recherche */}
          <div class="input-group rounded-lg w-[400px]">
            <input type="text" class="form-control  w-full" placeholder="rechercher..." />
            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
          </div>
          {/* Lien Ajouter */}
          <a href={`/${AllRoutes.admin}/${AllRoutes.temoins}/${AllRoutes.add}`}>
            <button type="btn" class=" btn btn-primary px-4 px-2">Ajouter</button>
          </a>
        </div>
      </div>
      {
        TemoignageList && TemoignageList.length > 0 ?
          (
            <div class="w-full flex space-x-2 min-h-[500px] overflow-y-scroll">
              <div class="w-full">
                <div class="w-full bg-white ">
                  <div class="w-full mt-2 overflow-x-auto">
                    <div class="w-full whitespace-nowrap">
                      <div class="w-full grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                          TemoignageList.map((item) => {
                            return (
                              <div tabindex="0" class="w-full btn-outline-light transition-all ease-linear h-[270px] duration-100 focus:outline-none my-2 border overflow-hidden border-gray-100 rounded-lg">

                                <div class="">
                                  <div class=" flex space-x-3">
                                    <div class="btn-danger px-1 py-1 ">Prière</div>
                                    <div class="btn btn-danger px-1 py-1 text-white"><GrView class="text-white h-5 w-5" /></div>
                                  </div>
                                  <div class="py-1 ">
                                    <h2 class="text-xl py-1">{item.title}</h2>
                                    <div class="flex space-x-3 items-center px-3">
                                      <div><img src={bgImg} class="rounded-[50%] h-[50px] w-[50px] " /></div>
                                      <div class=" text-black">Autheur</div>
                                    </div>
                                    <div class="h-[50px] line-clamp-2 px-3 text-gray-400">
                                      <p>
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div class="rounded-t-lg mt-3">
                                  <a href={`/${AllRoutes.admin}/${AllRoutes.temoins}/${item._id}`} 
                                  onClick={ () => {
                                      localStorage.setItem(`${Localvalue.titleTemoignage}`, item.title)
                                      localStorage.setItem(`${Localvalue.coverPictureTemoignage}`, item.coverPicture)
                                      localStorage.setItem(`${Localvalue.titleTemoignage}`, item.title)
                                      localStorage.setItem(`${Localvalue.titleTemoignage}`, item.title)
                                    }} >
                                    <button type="button" class="btn btn-outline-primary">voire</button>
                                  </a>
                                  <a href={`/${AllRoutes.admin}/${AllRoutes.temoins}/${AllRoutes.update}/:id`}>
                                    <button type="button" class="btn btn-outline-success">modifier</button>
                                  </a>
                                </div>
                              </div>
                            )})}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
          :
          <div class="">Aucun témoignages ... </div>
      }
    </div>
  )
}

export default ListTemoignageAdminPage;