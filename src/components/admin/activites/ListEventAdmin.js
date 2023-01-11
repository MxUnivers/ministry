import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { LoadAllEvent, UpdateEvent } from '../../../actions/Activites/Evenement';
import ModalAddEvent from '../../../modal/admin/actvites/ModalAddEvent';

const ListEventAdmin = () => {
  const navigate = useNavigate("");
  const [idEvent, setidEvent] = useState("")

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


  const [search, setsearch] = useState("");
  const [EventList, setEventList] = useState([]);
  const [SearchEventList, setSearchEventList] = useState([]);
  useEffect(() => {
    LoadAllEvent(setEventList);
    LoadAllEvent(setSearchEventList);
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
            <input type="text" class="form-control p-1" placeholder="rechercher evenement ..." />
            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
          </div>
          {/* Ajouter button */}
          <button class="btn btn-primary px-4" data-bs-toggle="modal" data-bs-target="#addModal" >Ajouter</button>
        </div>
        {/* Modal Add Event */}
        <ModalAddEvent />

        <div class="w-full ">
          <div class="w-full blog-item mb-5">
            {
              EventList && EventList.length > 0 ?
                (
                  EventList.map(() => {
                    return (
                      <div class="w-full my-2 visible relative w-full row g-0 bg-light overflow-hidden">
                        <div class="col-12 col-sm-5 h-50">
                          <img class="img-fluid h-50" src="img/blog-1.jpg" style={{ objectFit: "cover" }} />
                        </div>
                        <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                          <div class="p-4">
                            <div class="d-flex mb-3">
                              <small class="me-3"><i class="bi bi-bookmarks me-2"></i>type evement</small>
                              <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                            </div>
                            <h5 class="text-uppercase mb-3"> evenement 1</h5>
                            <p class="line-clamp-2">Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                            <a class="text-primary text-uppercase" href="#">voire<i class="bi bi-chevron-right"></i></a>
                          </div>
                        </div>
                        <div class="absolute top-1 right-3">
                          {/* Modifier */}
                          <button type="button"
                            onClick={() => { }}
                            class="btn btn-outline-primary py-1 px-2" data-bs-toggle="modal" data-bs-target="#updateModal">modifier</button>
                        </div>
                        {/* Modal Event */}
                        <div class=" modal fade " id="updateModal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div class="modal-dialog">
                            <div class="modal-content rounded-0">
                              <div class="modal-header relative">
                                <h6 class=" modal-title  text-primary text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>
                                  Modifier evenement
                                </h6>
                                <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
                              </div>
                              <div class="modal-body h-[440px] container flex justify-center">
                                <div class="flex justify-center row g-8">
                                  <div class="col-lg-9">
                                    <form onSubmit={(e) => {
                                      e.preventDefault();
                                      UpdateEvent(idEvent, title, coverPicture, description, date, navigate);
                                    }}>
                                      <div class="row g-3">
                                        <div class="col-12">
                                          <input type="text" required value={title} onChange={(e) => { settitle(e.target.value) }} class="form-control bg-light border-0 px-4 py-1" placeholder="titre" style={{ height: "40px" }} />
                                        </div>
                                        <div class="col-12 flex">
                                          <input type="file" onChange={HandleFileInputChange} accept=".JPNG,.JPEG,.PNG" required class="form-control bg-light border-0 px-4" placeholder="image" style={{ height: "40px" }} />
                                          <img src={`${coverPicture}`} class="h-[50px] h-[50px]" />
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

                      </div>
                    )
                  })
                ) :
                <div>Aucun Evnement en cours ...</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListEventAdmin;