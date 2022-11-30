import React from 'react'

const ListUserPage = () => {
    const  items = [1,1,1,1,1,1,1,1,1,1,1]
  return (
    <div class="w-full">
            <div class="py-1 my-2 mx-1 bg-cyan-700 text-white px-2 py-2 rounded-lg">
                <h2 class=" ">utlisateurs</h2>
            </div>
            <div class="w-full  rounded-lg bg-white px-2 h-[600px] overflow-y-scroll ">
                <div class="w-full flex justify-between py-3 ">
                    {/* Barre de recherche */}
                    <div class="input-group rounded-lg w-[400px]">
                        <input type="text" class="form-control  w-full" placeholder="rechercher..." />
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
                    {/* Lien Ajouter */}
                    <div >
                        <button type="btn" class=" btn btn-primary px-4 px-2">Ajouter</button>
                    </div>

                </div>
                <div class="w-full flex space-x-2">
                    <div class="w-full">
                        <div class="w-full bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                            <div class="w-full mt-2 overflow-x-auto">
                                <table class="w-full whitespace-nowrap">

                                    <thead>

                                        <tr tabindex="0" class="w-full focus:outline-none my-2 py-2 h-11 border border-gray-100 rounded">
                                            <th>
                                                ID
                                            </th>
                                            <th class="border-l">
                                                Nom complet
                                            </th>
                                            <th class="pl-4 border-l py-1">
                                                Email
                                            </th>
                                            <th class="pl-4 border-l py-1">
                                                téléphone
                                            </th>

                                            <th class="pl-4 border-l py-1 space-x-2">
                                                action
                                            </th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {
                                            items.map(() => {
                                                return (
                                                    <tr tabindex="0" class="w-full focus:outline-none hover:bg-gray-200 my-2 py-2 h-11 border border-gray-100 rounded">
                                                        <td>
                                                            id
                                                        </td>
                                                        <td class="">
                                                            nom
                                                        </td>
                                                        <td class="pl-4">
                                                            email
                                                        </td>
                                                        <td class="pl-4">
                                                            numéro
                                                        </td>
                                                        <td class="pl-4 space-x-2">
                                                            <button type="btn" class=" text-blue-900 hover:underline px-1 px-2 py-1">
                                                                {/* <FaRegEye class="h-5 w-5"/> */}
                                                                voire
                                                            </button>
                                                            <button type="btn" class="  text-lime-900 hover:underline px-1 px-2 py-1">modifier</button>
                                                            <button type="btn" class="  text-red-900 hover:underline px-1 px-2 py-1">bloquer</button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
  )
}

export default ListUserPage