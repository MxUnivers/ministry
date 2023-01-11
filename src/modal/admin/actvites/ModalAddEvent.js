import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateEvent } from '../../../actions/Activites/Evenement';

const ModalAddEvent = () => {
  
  const  navigate =  useNavigate("");

  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [description, setdescription] = useState("");
  const [coverPicture, setcoverPicture] = useState("");
  
  // *************************************************** Photo
  const HandleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  }
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
              Ajouter nouvel évenement
            </h6>
            <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div class="modal-body container flex justify-center">
            <div class="flex justify-center row g-8">
              <div class="col-lg-9">
              <form onSubmit={(e)=>{
                  e.preventDefault();
                  CreateEvent(title,coverPicture,description,date,navigate);
                }}>
                  <div class="row g-3">
                    <div class="col-12">
                      <input type="text" required value={title} onChange={(e) => { settitle(e.target.value) }} class="form-control bg-light border-0 px-4 py-1" placeholder="titre" style={{ height: "40px" }} />
                    </div>
                    <div class="col-12 flex">
                      <input type="file" onChange={HandleFileInputChange} accept=".JPNG,.JPEG,.PNG" required class="form-control bg-light border-0 px-4" placeholder="image" style={{ height: "40px" }} />
                      {coverPicture && (<img src={`${coverPicture}`} class="h-[50px] h-[50px]" />)}
                    </div>
                    <div class="col-12 flex">
                      <label class="form-control border-0 px-4" style={{ height: "40px" }}>date</label>
                      <input type="date" value={date} onChange={(e) => { setdate(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="date" style={{ height: "40px" }} />
                    </div>
                    <div class="col-12">
                      <textarea required value={description} onChange={(e) => { setdescription(e.target.value) }} class="form-control bg-light border-0 px-4" placeholder="description de l'evement ..../donne par ../but../" style={{ height: "155px" }} />
                    </div>
                    <div class="col-12">
                      <button class="btn btn-outline-primary w-100 py-3" type="submit">Ajouter évenment</button>
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

export default ModalAddEvent;
