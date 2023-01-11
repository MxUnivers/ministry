
import React, { useEffect, useState } from 'react';
import ModalAddUser from '../../../modal/admin/users/ModalAddUser';
import { FiUsers } from 'react-icons/fi';
import { LoadAllUser, UpdateUser } from '../../../actions/Users/UserAction';
import { useNavigate } from 'react-router-dom';



const ListUserPage = () => {
    const navigate = useNavigate("");
    const [idUser, setidUser] = useState("")
    const [username, setusername] = useState("");
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [telephone, settelephone] = useState("");
    const [password, setpassword] = useState("");
    const [UserList, setUserList] = useState([1])

    useEffect(() => {
        LoadAllUser(setUserList);
    }, [])
    // Recherche

    return (
        <div class="w-full">
            <div class="py-1 my-2 mx-1 bg-cyan-700 text-white px-2 py-2 rounded-lg flex justify-center ">
                <h2 class=" text-white flex space-x-3 items-center text-xl"><FiUsers class="text-white w-8 h-8" />Utlisateurs</h2>
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
                        <button type="btn" class=" btn btn-primary px-4 px-2" data-bs-toggle="modal" data-bs-target="#addModal">
                            Ajouter
                        </button>
                    </div>
                    {/* Modal Add User */}
                    <ModalAddUser />
                </div>
                <div class="w-full flex space-x-2">
                    <div class="w-full">
                        <div class="w-full bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                            <div class="w-full mt-2 overflow-x-auto">

                                {

                                    UserList && UserList.length > 0
                                        ?
                                        (
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
                                                    {UserList.map(() => {
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
                                                                    <button type="btn" class="  text-lime-900 hover:underline px-1 px-2 py-1" data-bs-toggle="modal" data-bs-target="#updateUser">modifier</button>
                                                                    <button type="btn" class="  text-green-600 hover:underline px-1 px-2 py-1 " data-bs-toggle="modal" data-bs-target="#showUser">débloquer</button>
                                                                    <button type="btn" class="  text-red-900 hover:underline px-1 px-2 py-1" data-bs-toggle="modal" data-bs-target="#hideUser">bloquer</button>
                                                                    {/* Modal Update */}
                                                                    <div class=" modal fade " id="updateUser" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <div class="modal-dialog">
                                                                            <div class="modal-content rounded-0">
                                                                                <div class="modal-header relative">
                                                                                    <h6 class=" modal-title  text-primary text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>
                                                                                        Modifier cet utlisateur
                                                                                    </h6>
                                                                                    <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
                                                                                </div>
                                                                                <div class="modal-body container flex justify-center">
                                                                                    <div class="flex justify-center row g-8">
                                                                                        <div class="col-lg-9">
                                                                                            <form
                                                                                                onSubmit={(e) => {
                                                                                                    e.preventDefault();
                                                                                                    UpdateUser(idUser, username, firstname, lastname, email, telephone, password, navigate)
                                                                                                }}>
                                                                                                <div class="row g-3">
                                                                                                    <div class="col-12">
                                                                                                        <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="nom d'utlisateur" style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <input type="text" value={firstname} onChange={(e) => { setfirstname(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="nom .." style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <input type="text" value={lastname} onChange={(e) => { setlastname(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="prenoms .." style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="email" style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12 flex">
                                                                                                        <select class="form-control" >
                                                                                                            <option>+225</option>
                                                                                                            <option>+226</option>
                                                                                                            <option>+227</option>
                                                                                                            <option>+229</option>
                                                                                                            <option>+330</option>
                                                                                                        </select>
                                                                                                        <input type="number" value={telephone} onChange={(e) => { settelephone(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="telephone" style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="mot de passe" style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <button class="btn btn-outline-primary w-100 py-3" type="submit">modifier</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    {/* Modal Access */}
                                                                    <form class=" modal fade " id="showUser" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <div class="modal-dialog">
                                                                            <div class="modal-content rounded-0">
                                                                                <div class="modal-header relative">
                                                                                    <h6 class=" modal-title  text-success text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>
                                                                                        Débloquer cet utlisateur
                                                                                    </h6>
                                                                                    <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
                                                                                </div>
                                                                                <div class="modal-body container flex justify-center">

                                                                                    <div class="flex justify-center row g-8">
                                                                                        <div class="col-lg-9">
                                                                                            <form class="w-full flex flex-col">
                                                                                                <div class="flex py-2 px-3 items-center justify-center">
                                                                                                    <h2 class="text-xl">Nom complet</h2>
                                                                                                </div>
                                                                                                <div class="flex flex-row justify-between space-x-2">
                                                                                                    <div class="col-12">
                                                                                                        <button class="btn btn-outline-success w-100 py-2" type="submit">Débloquer</button>
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <button type="button" class="btn btn-light w-100 py-1">annuler</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                    {/* Modal Delete */}
                                                                    <div class=" modal fade " id="hideUser" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                                        <div class="modal-dialog">
                                                                            <div class="modal-content rounded-0">
                                                                                <div class="modal-header relative">
                                                                                    <h6 class=" modal-title  text-danger text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>
                                                                                        Bloquer cet utlisateur
                                                                                    </h6>
                                                                                    <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
                                                                                </div>
                                                                                <div class="modal-body container flex justify-center">

                                                                                    <div class="flex justify-center row g-8">
                                                                                        <div class="col-lg-9">
                                                                                            <form class="w-full flex flex-col">
                                                                                                <div class="flex py-2 px-3 items-center justify-center">
                                                                                                    <h2 class="text-xl">Nom complet</h2>
                                                                                                </div>
                                                                                                <div class="flex flex-row justify-between space-x-2">
                                                                                                    <div class="col-12">
                                                                                                        <button class="btn btn-outline-danger w-100 py-2" type="submit">Bloquer</button>
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <button class="btn btn-light w-100 py-1">annuler</button>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </form>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })}

                                                </tbody>
                                            </table>
                                        )
                                        :
                                        <div class="w-full flex justify-center ">Auccun utlisateurs dans la base de données ... </div>

                                }


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ListUserPage