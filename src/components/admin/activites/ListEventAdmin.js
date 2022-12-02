import React from 'react'
import ModalAddEvent from '../../../modal/admin/actvites/ModalAddEvent';

const ListEventAdmin = () => {
  const items = [1];
  const bgImg = "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
              items && items.length > 0 ?
                (
                  items.map(() => {
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
                          <button type="button" class="btn btn-outline-primary py-1 px-2" data-bs-toggle="modal" data-bs-target="#updateModal">modifier</button>
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
                                    <form>
                                      <div class="row g-3">
                                        <div class="col-12">
                                          <input type="text" required class="form-control bg-light border-0 px-4 py-1" placeholder="nom evenement" style={{ height: "40px" }} />
                                        </div>
                                        <div class="col-12 flex">
                                          <input type="file" accept=".JPNG,.JPEG,.PNG" required class="form-control bg-light border-0 px-4" placeholder="Votre email" style={{ height: "40px" }} />
                                          <img src={`${bgImg}`} class="h-[50px] h-[50px]" />
                                        </div>
                                        <div class="col-12 flex">
                                          <label class="form-control border-0 px-4" style={{ height: "40px" }}>date</label>
                                          <input type="date" required class="form-control bg-light border-0 px-4" placeholder="Numéro de téléphone" style={{ height: "40px" }} />
                                        </div>
                                        <div class="col-12">
                                          <textarea required class="form-control bg-light border-0 px-4" placeholder="description evenement" style={{ height: "155px" }} />
                                        </div>
                                        <div class="col-12">
                                          <button class="btn btn-outline-primary w-100 py-3" type="submit">
                                            modifer
                                          </button>
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
                <div>Aucun Evnement ...</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListEventAdmin;