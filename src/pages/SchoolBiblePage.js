

import React from 'react';
import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import ReactAudioPlayer from 'react-audio-player';


const SchoolBiblePage = () => {
  const [item, setitem] = useState([1, 1, 1, 1, 1]);
  return (
    <div class="container-fluid w-full flex flex-col space-y-3 justify-center">


      <div class="col-lg-8 space-y-6 mx-5 my-5">
        <div class="py-2 ">
          <div class="text-3xl font-bold">Ecole Biblique</div>
        </div>
      </div>

      <div class="container">
        <div class="mb-5">
          <div class="input-group">
            <input type="text" class="form-control p-3" placeholder="Keyword" />
            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
          </div>
        </div>
        {/* Items de */}
        <div class="grid grid-cols-1 gap-5">

          {
            item && item.length > 0 ?
              (
                item.map(() => {
                  return (
                    <div class="max-w-sm w-full lg:max-w-full lg:flex">
                      <div class="w-full h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        style={{ backgroundImage: `url('https://images.pexels.com/photos/8383498/pexels-photo-8383498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}
                        title="Woman holding a mug">
                      </div>
                      <div class="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div class="mb-8">
                          <p class="text-sm text-gray-600 flex items-center">
                            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                            </svg>
                            Ensignement
                          </p>
                          <div class="text-gray-900 font-bold text-xl mb-2">Titre de l'enseignement ?</div>
                          <p class="text-gray-700 text-base">descripton de l'ensiegnement</p>
                        </div>
                        <div class="flex items-center">
                          <div class="mx-3 flex space-x-3">
                            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#audioModal">Audio</button>
                            <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#videoModal">Vidéo</button>
                            <button type="button" class="btn btn-outline-success">télécharger</button>
                          </div>
                        </div>
                      </div>
                      {/* Modal Audio */}
                      <div class="modal fade" id="audioModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content rounded-0">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Audio</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                            </div>
                            <div class="modal-body">
                              <div class="ratio ratio-16x9">
                                <ReactAudioPlayer src="https://www.cjoint.com/c/LKChcwiXni5" controls onPlay={true} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Modal vidéo */}
                      <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                          <div class="modal-content rounded-0">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Vidéo title</h5>
                              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                            </div>
                            <div class="modal-body">
                              <div class="ratio ratio-16x9">
                                <ReactPlayer url={'https://www.youtube.com/watch?v=qGvteC3dZnk'} controls onReady={true} height={"100%"} width={'100%'} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* End Modal Video */}
                    </div>
                  )
                })
              )
              :
              <div class="text-3xl font-bold">
                L'ecole en cours ...
              </div>

          }

        </div>



      </div>
    </div>
  )
}

export default SchoolBiblePage;