import React, { useState } from 'react'

const ModalAddUser = () => {
  const [username, setusername] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [telephone, settelephone] = useState("");
  const [password, setpassword] = useState("");

  return (
    <div class=" modal fade " id="addModal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content rounded-0">
          <div class="modal-header relative">
            <h6 class=" modal-title  text-primary text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>
              Ajouter nouvel utlisateur
            </h6>
            <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div class="modal-body container flex justify-center">
            <div class="flex justify-center row g-8">
              <div class="col-lg-9">
                <form>
                  <div class="row g-3">
                    <div class="col-12">
                      <input type="text" value={username} onChange={(e)=>{setusername(e.target.value)}} required class="form-control bg-light border-0 px-4" placeholder="nom d'utlisateur" style={{ height: "55px" }} />
                    </div>
                    <div class="col-12">
                      <input type="text" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}  required class="form-control bg-light border-0 px-4" placeholder="nom .." style={{ height: "55px" }} />
                    </div>
                    <div class="col-12">
                      <input type="text" value={lastname} onChange={(e)=>{setlastname(e.target.value)}}  required class="form-control bg-light border-0 px-4" placeholder="prenoms .." style={{ height: "55px" }} />
                    </div>
                    <div class="col-12">
                      <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}  required class="form-control bg-light border-0 px-4" placeholder="email" style={{ height: "55px" }} />
                    </div>
                    <div class="col-12 flex">
                      <select class="form-control" >
                        <option>+225</option>
                        <option>+226</option>
                        <option>+227</option>
                        <option>+229</option>
                        <option>+330</option>
                      </select>
                      <input type="number" value={telephone} onChange={(e)=>{settelephone(e.target.value)}}  required class="form-control bg-light border-0 px-4" placeholder="telephone" style={{ height: "55px" }} />
                    </div>
                    <div class="col-12">
                      <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}}  required class="form-control bg-light border-0 px-4" placeholder="mot de passe" style={{ height: "55px" }} />
                    </div>
                    <div class="col-12">
                      <button class="btn btn-outline-primary w-100 py-3" type="submit">Ajouter</button>
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

export default ModalAddUser;
