import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CreateMember } from '../../../actions/Members/MemberAction';

const ModalAddMember = () => {
  const navigate = useNavigate("");
    const [idUser, setidUser] = useState("")
    const [name, setname] = useState("");
    const [coverPicture, setcoverPicture] = useState("");
    const [email, setemail] = useState("");
    const [code, setcode] = useState("");
    const [telephone, settelephone] = useState("");
    const [pays, setpays] = useState("");
    const [password, setpassword] = useState("");


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

    return (<div class=" modal fade " id="addMember" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                CreateMember( name,coverPicture, email, code, telephone, pays, password, navigate)
                            }}>
                            <div class="row g-3">
                                <div class="col-12">
                                    <input type="text" value={name} onChange={(e) => { setname(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="nom d'membre" style={{ height: "55px" }} />
                                </div>
                                <div class="col-12 flex space-x-3 w-full  py-2  ">
                                    <input type="file" onChange={HandleFileInputChangePhoto} accept=".JPEG , .JPG, .PNG" placeholder="nom d'membre" style={{ height: "55px" }} />
                                    {<img src={coverPicture} class="h-[40px] w-[40px]" />}
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
    )
}

export default ModalAddMember;
