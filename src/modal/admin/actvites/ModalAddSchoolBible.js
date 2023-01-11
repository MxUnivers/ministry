import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreateSchool } from '../../../actions/Activites/School';

const ModalAddSchoolBible = () => {
  const  navigate =  useNavigate();

  const [coverPicture, setcoverPicture] = useState("");
  const [title, settitle] = useState("");
  const [descripion, setdescripion] = useState("");
  const [audio, setaudio] = useState("");
  const [video, setvideo] = useState("");

  // ******************************************* Photo
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
  // **************************************************Vidéo
  const HandleFileInputChangeVideo = (e) => {
    const file = e.target.files[0];
    previewFileVideo(file);
  }
  const previewFileVideo = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setvideo(reader.result);
      // console.log(previewSource)
    }
  }
  // ***************************************************Audio
  const HandleFileInputChangeAudio = (e) => {
    const file = e.target.files[0];
    previewFileAudio(file);
  }
  const previewFileAudio = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setaudio(reader.result);
      // console.log(previewSource)
    }
  }

  return (
    <div class=" modal fade " id="addModal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content rounded-0">
          <div class="modal-header relative">
            <h6 class=" modal-title  text-primary text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>
              Ajouter un media d'enseignement
            </h6>
            <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div class="modal-body container flex justify-center">
            <div class="flex justify-center row g-8">
              <div class="col-lg-9">
                <form onSubmit={(e)=>{CreateSchool(title,coverPicture,descripion,video,audio,navigate)}}>
                  <div class="row g-3">
                    <div class="col-12 flex">
                      <label class="form-control border-0 px-4" style={{ height: "40px" }}>titre</label>
                      <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} required class="form-control bg-light border-0 px-4" placeholder="titre de la vidéo" style={{ height: "40px" }} />
                    </div>
                    <div class="col-12 flex">
                      <label class="form-control border-0 px-4" style={{ height: "40px" }}>Image</label>
                      <input type="file" onChange={HandleFileInputChangePhoto} required class="form-control bg-light border-0 px-4" accept=".JPEG , .JPG" placeholder="image" style={{ height: "40px" }} />
                      {coverPicture && (<img src={`${coverPicture}`} class="h-[50px] h-[50px]" />)}
                    </div>
                    <div class="col-12 flex">
                      <label class="form-control border-0 px-4" style={{ height: "40px" }}>Video</label>
                      <input type="file" onChange={HandleFileInputChangeVideo} required class="form-control bg-light border-0 px-4" placeholder="vidéo" style={{ height: "40px" }} />
                    </div>
                    <div class="col-12 flex">
                      <label class="form-control border-0 px-4" style={{ height: "40px" }}>Audio</label>
                      <input type="file" onChange={HandleFileInputChangeAudio} required class="form-control bg-light border-0 px-4" placeholder="audio" style={{ height: "40px" }} />
                    </div>
                    <div class="col-12">
                      <label class="form-control border-0 px-4" style={{ height: "40px" }}>Description</label>
                      <textarea value={descripion} onChange={(e)=>{setdescripion(e.target.value)}} required class="form-control bg-light border-0 px-4" placeholder="description evenement" style={{ height: "155px" }} />
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

export default ModalAddSchoolBible;
