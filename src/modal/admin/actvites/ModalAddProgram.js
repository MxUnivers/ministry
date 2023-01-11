import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateProgram } from '../../../actions/Activites/Programmes';

const ModalAddProgram = () => {
  const navigate = useNavigate("");

  const [title, settitle] = useState("")
  const [coverPicture, setcoverPicture] = useState("");
  const [description, setdescription] = useState("");
  
  const HandleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
}
  // previewFile
const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setcoverPicture(reader.result);
        // console.log(previewSource)
    }
}


  return (
    <div class=" modal fade " id="addModal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content rounded-0">
          <div class="modal-header relative">
            <h6 class=" modal-title  text-primary text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>
              Ajouter un programme
            </h6>
            <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div class="modal-body container flex justify-center">
            <div class="flex justify-center row g-8">
              <div class="col-lg-9">
                <form onSubmit={(e)=>{
                  e.preventDefault();
                  CreateProgram(title,coverPicture,description,navigate);
                }}>
                  <div class="row g-3">
                    <div class="col-12">
                      <input type="text" onChange={(e)=>{settitle(e.target.value)}} value={title} required class="form-control bg-light border-0 px-4 py-1" placeholder="tittre ..." style={{ height: "40px" }} />
                    </div>
                    <div class="col-12 flex">
                      <input type="file" onChange={HandleFileInputChange} accept=".JPNG,.JPEG,.PNG" required class="form-control bg-light border-0 px-4" placeholder="Votre email" style={{ height: "40px" }} />
                      {
                        coverPicture && 
                        (
                          <img src={`${coverPicture}`}class="h-[50px] h-[50px]" />
                        )
                      }
                    </div>
                    <div class="col-12">
                      <textarea  onChange={(e)=>{setdescription(e.target.value)}} value={description} required class="form-control bg-light border-0 px-4" placeholder="description ..." style={{ height: "155px" }} />
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

export default ModalAddProgram;
