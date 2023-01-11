import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import { useNavigate } from 'react-router-dom';
import { UpdateTemoignage } from '../../../actions/Temoignages/TemoignageAction';
import AllRoutes from '../../../nametitle/AllRoutes';

const UpdateTemoignagePage = () => {
  const  navigate =  useNavigate();
  const [idTemoignage, setidTemoignage] = useState("");
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [coverPicture, setcoverPicture] = useState("");
  const [video, setvideo] = useState("");
  const [audio, setaudio] = useState("");
  const [content, setcontent] = useState("");
  const [previewSource, setpreviewSource] = useState("");
  const { quill, quillRef } = useQuill();

  
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<h1>Bonne rédaction</h1>');
    }
  }, [quill]);
  // ************************************************Photo
  const HandleFileInputChangePhoto = (e) => {
    const file = e.target.files[0];
    previewFilePhoto(file);
  }
  // previewFile
  const previewFilePhoto = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
      setcoverPicture(reader.result);
      // console.log(previewSource)
    }
  }
  // ************************************************ Vidéo
  const HandleFileInputChangeVideo = (e) => {
    const file = e.target.files[0];
    previewFileVideo(file);
  }
  // previewFile
  const previewFileVideo = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
      setvideo(reader.result);
      // console.log(previewSource)
    }
  }

  // ************************************************ Vidéo
  const HandleFileInputChangeAudio = (e) => {
    const file = e.target.files[0];
    previewFileAudio(file);
  }
  // previewFile
  const previewFileAudio = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource(reader.result);
      setaudio(reader.result);
      // console.log(previewSource)
    }
  }
  
  return (
    <div>
      <div class="pt-4 pb-2">
        <div class="w-full flex justify-center ">

          <a href={`/${AllRoutes.admin}/${AllRoutes.temoins}`}>
          <button class="btn btn-outline-primary py-2" type="submit">retour</button>
          </a>
          <h2 class="w-full text-2xl ">Modifier cet temoignage</h2>
          <h2 class="w-full text-xl text-white ">nom du temoignage</h2>
        </div>
      </div>
      <form>
        <div class="flex justify-center row g-8 h-[750px]">
          <div class="col-lg-9">
            <form class="pb-6" 
             onSubmit={(e)=>{
              e.preventDefault();
              UpdateTemoignage(idTemoignage,title,coverPicture,description,content,video,audio,navigate);
             }}
            >
              <div class="row g-3">
                <div class="col-12">
                  <label class="text-xl">Titre de de votre témoignage *</label>
                  <input type="text" required value={title} onChange={(e)=>{settitle(e.target.value)}} class="form-control bg-light border-0 px-4 py-2" placeholder="titre" style={{ height: "40px" }} />
                </div>
                <div class="col-12 flex space-x-3">
                  <label class="text-xl">Photo *</label>
                  <input type="file" required class="form-controlt border-0 px-4 " onChange={HandleFileInputChangePhoto} accept={`.JPG,.PNG,.JPEG`} placeholder="Nom Complet"  />
                     <img src={coverPicture} class="h-[50px] w-[50px]"/> 
                </div>
                <div class="col-12 flex space-x-3">
                  <label class="text-xl">vidéo *</label>
                  <input type="file" required class="form-controlt border-0 px-4 " onChange={HandleFileInputChangeVideo} accept={`.MP4`} placeholder="Nom Complet"  />
                  {
                    video && ( <label class="text-green-600" >vidéo télécharger</label> )
                  }
                </div>
                <div class="col-12 flex space-x-3">
                  <label class="text-xl">audio *</label>
                  <input type="file" required class="form-controlt border-0 px-4 " onChange={HandleFileInputChangeAudio} accept={`.MP3`} placeholder="Nom Complet"  />
                  {
                    audio && ( <label class="text-green-600" >audio télécharger</label> )
                  }
                </div>
                <div class="col-12">
                  <label class="text-xl">description *</label>
                  <textarea required value={description} onChange={(e)=>{setdescription(e.target.value)}} class="form-control bg-light border-0 px-4" placeholder="Ajouter une description" style={{ height: "55px" }} />
                </div>
                <div class="col-12">
                  <label class="text-xl">redaction *</label>
                  <div class="w-full h-[200px]" >
                    <div ref={quillRef} />
                  </div>
                </div>
                <div class="col-12 mt-5 py-5">
                  <button class="btn btn-outline-primary w-100 py-3" type="submit">Appliquer </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </form>


    </div>)
}

export default UpdateTemoignagePage;