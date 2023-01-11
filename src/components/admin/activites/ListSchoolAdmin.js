import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoadAllSchool, UpdateSchool } from '../../../actions/Activites/School';
import ModalAddSchoolBible from '../../../modal/admin/actvites/ModalAddSchoolBible';

const ListSchoolBibleAdmin = () => {
  const navigate = useNavigate();

  const [idSchool, setidSchool] = useState("")
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
  const [search, setsearch] = useState("");
  const [EnseignementList, setEnseignementList] = useState([]);
  const [SearchEnseignementList, setSearchEnseignementList] = useState([]);
  useEffect(() => {
    LoadAllSchool(setEnseignementList);
    LoadAllSchool(setSearchEnseignementList);
  }, []);

  // Recherche
  const HandleSearch = (e) => {
    setsearch(e.target.value);
  }
  return (
    <div>
      <div class="w-full container-fluid py-5">

        <div class="w-full flex space-x-3 justify-between mb-5">
          <div class="input-group">
            <input type="text" class="form-control p-1" placeholder="rechercher enseignement ..." />
            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
          </div>
          {/* Ajouter button */}
          <button class="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#addModal" >Ajouter</button>
        </div>
        {/* Modal Add Event */}
        <ModalAddSchoolBible />

        <div class="w-full ">
          {/* <button type="button" class="btn btn-outline-primary py-1 px-2" data-bs-toggle="modal" data-bs-target="#updateModal">modifier</button> */}

          <div class="w-full blog-item mb-5">
            {
              EnseignementList && EnseignementList.length > 0 ?
                (
                  EnseignementList.map(() => {
                    return (
                      <div class="max-w-sm w-full lg:max-w-full lg:flex">
                        <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                          style={{ backgroundImage: `url('https://images.pexels.com/photos/8383498/pexels-photo-8383498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
                          title="Woman holding a mug">
                        </div>
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                          <div class="mb-8">
                            <p class="text-sm text-gray-600 flex items-center">
                              <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                              </svg>
                              Members only
                            </p>
                            <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                          </div>
                          <div class="flex items-center">
                            <div class="mx-3 flex space-x-3">
                              <button type="button" class="btn btn-outline-success" data-bs-toggle="updateModal" data-bs-target="#audioModal">modifier</button>
                            </div>
                          </div>
                        </div>
                        {/* Modal Event */}
                        <div class=" modal fade " id="updateModal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content rounded-0">
                              <div class="modal-header relative">
                                <h6 class=" modal-title  text-primary text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>
                                  Modifier
                                </h6>
                                <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
                              </div>
                              <div class="modal-body h-[440px] container flex justify-center">
                                <div class="flex justify-center row g-8">
                                  <div class="col-lg-9">
                                    <form onSubmit={(e) => { UpdateSchool(idSchool, title, coverPicture, descripion, video, audio, navigate) }}>
                                      <div class="row g-3">
                                        <div class="col-12 flex">
                                          <label class="form-control border-0 px-4" style={{ height: "40px" }}>titre</label>
                                          <input type="text" value={title} onChange={(e) => { settitle(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="titre de la vidéo" style={{ height: "40px" }} />
                                        </div>
                                        <div class="col-12 flex">
                                          <label class="form-control border-0 px-4" style={{ height: "40px" }}>Image</label>
                                          <input type="file" onChange={HandleFileInputChangePhoto} required class="form-control bg-light border-0 px-4" accept=".JPEG , .JPG" placeholder="image" style={{ height: "40px" }} />
                                          <img src={`${coverPicture}`} class="h-[50px] h-[50px]" />
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
                                          <textarea value={descripion} onChange={(e) => { setdescripion(e.target.value) }} required class="form-control bg-light border-0 px-4" placeholder="description evenement" style={{ height: "155px" }} />
                                        </div>
                                        <div class="col-12">
                                          <button class="btn btn-outline-primary w-100 py-3" type="submit">Modifier</button>
                                        </div>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    )
                  })
                ) :
                <div>Acun Enseignement en cours ...</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
export default ListSchoolBibleAdmin;