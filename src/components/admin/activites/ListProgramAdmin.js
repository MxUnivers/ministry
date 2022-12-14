import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadAllProgram, UpdateProgram } from '../../../actions/Activites/Programmes';
import ModalAddProgram from '../../../modal/admin/actvites/ModalAddProgram';

const ListProgramAdmin = () => {

  const navigate = useNavigate("");
  const [idProgram, setidProgram] = useState("")
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


  const [ProgramList, setProgramList] = useState([])
  useEffect(() => {
    LoadAllProgram(setProgramList);
  }, [])
  return (
    <div>
      <div class="w-full container-fluid py-5">

        <div class="w-full flex space-x-3 justify-between mb-5">
          <div class="input-group">
            <input type="text" class="form-control p-1" placeholder="rechercher programme ..." />
            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
          </div>
          {/* Ajouter button */}
          <button class="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#addModal" >Ajouter</button>
        </div>
        {/* Modal Add Event */}
        <ModalAddProgram />

        <div class="w-full ">
          {/* <button type="button" class="btn btn-outline-primary py-1 px-2" data-bs-toggle="modal" data-bs-target="#updateModal">modifier</button> */}

          <div class="w-full blog-item mb-5">
            {
              ProgramList && ProgramList.length > 0 ?
                (
                  ProgramList.map((item) => {
                    return (
                      <div class=" w-full border lg:max-w-full ">
                        {/* <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none */}
                        <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                          <div class="mb-8">
                            <p class="text-sm text-gray-600 flex items-center">
                              <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                              </svg>
                              Members only
                            </p>
                            <div class="text-gray-900 font-bold text-xl mb-2">{item.title}</div>
                            <p class="text-gray-700 text-base line-clamp-4">{item.description}</p>
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
                                  Modifier cet programme
                                </h6>
                                <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
                              </div>
                              <div class="modal-body h-[440px] container flex justify-center">
                                <div class="flex justify-center row g-8">
                                  <div class="col-lg-9">
                                    <form onSubmit={(e) => {
                                      e.preventDefault();
                                      UpdateProgram(idProgram, title, coverPicture, description, navigate);
                                    }}>
                                      <div class="row g-3">
                                        <div class="col-12">
                                          <input type="text" onChange={(e) => { settitle(e.target.value) }} value={title} required class="form-control bg-light border-0 px-4 py-1" placeholder="tittre ..." style={{ height: "40px" }} />
                                        </div>
                                        <div class="col-12 flex">
                                          <input type="file" onChange={HandleFileInputChange} accept=".JPNG,.JPEG,.PNG" required class="form-control bg-light border-0 px-4" placeholder="Votre email" style={{ height: "40px" }} />

                                          <img src={`${coverPicture}`} class="h-[50px] h-[50px]" />

                                        </div>
                                        <div class="col-12">
                                          <textarea onChange={(e) => { setdescription(e.target.value) }} value={description} required class="form-control bg-light border-0 px-4" placeholder="description ..." style={{ height: "155px" }} />
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
                <div>Accun programme en cours  ...</div>
            }
          </div>
        </div>
      </div>
    </div>)
}

export default ListProgramAdmin;