import React, { useEffect, useState } from 'react'
import { HiUserGroup } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
import { LoadAllMember, UpdateMember } from '../../../actions/Members/MemberAction';
import ModalAddMember from '../../../modal/admin/members/ModalAddMember';

const ListMemberPage = () => {





    const navigate = useNavigate("");
    const [idUser, setidUser] = useState("")
    const [name, setname] = useState("");
    const [coverPicture, setcoverPicture] = useState("");
    const [email, setemail] = useState("");
    const [code, setcode] = useState("");
    const [telephone, settelephone] = useState("");
    const [pays, setpays] = useState("");
    const [password, setpassword] = useState("");
    const [MemberList, setMemberList] = useState([1]);

    useEffect(() => {
        LoadAllMember(setMemberList);
    }, [])
    // Recherche

    const HandleFileInputChangePhoto = (e) => {
        const file = e.target.files[0];
        previewFilePhoto(file);
    }
    const previewFilePhoto = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setcoverPicture(reader.result);
            // console.log(previewSource)
        }
    }


    return (
        <div class="w-full">
            <div class="py-1 my-2 mx-1 bg-cyan-700 text-white px-2 py-2 rounded-lg flex justify-center ">
                <h2 class=" text-white flex space-x-3 items-center text-xl"><HiUserGroup class="text-white w-8 h-8" />Membres</h2>
            </div>
            <div class="w-full  rounded-lg bg-white px-2 h-[600px] overflow-y-scroll ">
                <div class="w-full flex justify-between py-3 ">
                    {/* Barre de recherche */}
                    <div class="w-full input-group rounded-lg w-[400px]">
                        <input type="text" class="form-control  w-full" placeholder="rechercher..." />
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
                    {/* Lien Ajouter */}
                    <div >
                        <button type="btn" class=" btn btn-primary px-4 px-2" data-bs-toggle="modal" data-bs-target="#addMember">
                            Ajouter
                        </button>
                    </div>
                    {/* Modal Add User */}
                    <ModalAddMember />
                </div>
                <div class="w-full flex space-x-2">
                    <div class="w-full">
                        <div class="w-full bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
                            <div class="w-full mt-2 overflow-x-auto">

                                {

                                    MemberList && MemberList.length > 0
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
                                                    {MemberList.map(() => {
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
                                                                                        Modifier cet membre
                                                                                    </h6>
                                                                                    <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
                                                                                </div>
                                                                                <div class="modal-body container flex justify-center">
                                                                                    <div class="flex justify-center row g-8">
                                                                                        <div class="col-lg-9">
                                                                                            <form
                                                                                                onSubmit={(e) => {
                                                                                                    e.preventDefault();
                                                                                                    UpdateMember(idUser, name, email, code, telephone, pays, password, navigate)
                                                                                                }}>
                                                                                                <div class="row g-3">
                                                                                                    <div class="col-12">
                                                                                                        <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="nom d'membre" style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12 flex space-x-3 w-full  py-2  ">
                                                                                                        <input type="file" onChange={HandleFileInputChangePhoto} accept=".JPEG , .JPG, .PNG" placeholder="nom d'membre" style={{ height: "55px" }} />
                                                                                                        <img src={coverPicture} class="h-[40px] w-[40px]" />
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <input type="email" value={email} onChange={(e) => { setemail(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="email" style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12 flex">

                                                                                                        <select class="form-control" onChange={(e) => { setcode(e.currentTarget.value) }} >
                                                                                                            <option value="225">+225</option>
                                                                                                            <option value="225">+226</option>
                                                                                                            <option value="225">+227</option>
                                                                                                            <option value="225">+229</option>
                                                                                                            <option value="225">+330</option>
                                                                                                        </select>
                                                                                                        <input type="number" value={telephone} onChange={(e) => { settelephone(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="telephone" style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} class="form-control bg-light border-0 px-4" placeholder="mot de passe" style={{ height: "55px" }} />
                                                                                                    </div>
                                                                                                    <div class="col-12 flex space-x-5 items-center">
                                                                                                        <input type="checkbox" value={password} onChange={(e) => { setpassword(e.target.value) }} class="form h-5 w-5 bg-light border-0 px-4" placeholder="mot de passe" style={{ height: "55px" }} />
                                                                                                        <label class="text-danger">bloquer accès</label>
                                                                                                    </div>
                                                                                                    <div class="col-12">
                                                                                                        <button class="btn btn-outline-primary w-100 py-3" type="submit">modifier </button>
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
                                                                                        Débloquer cet membre
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
                                                                                        Bloquer cet membre
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
                                        <div class="w-full flex justify-center ">Auccun membres dans la base de données ... </div>

                                }


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default ListMemberPage