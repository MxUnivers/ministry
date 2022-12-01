import React from 'react'

const ListEventAdmin = () => {
  const items = [];
  return (
    <div>
      <div class="w-full container-fluid py-5">
        <div class="w-full mb-5">
          <div class="input-group">
            <input type="text" class="form-control p-3" placeholder="rechercher evenement ..." />
            <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
          </div>
        </div>

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
                          <h5 class="text-uppercase mb-3">Nom evenement</h5>
                          <p class="line-clamp-2">Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                          <a class="text-primary text-uppercase" href="#">voire<i class="bi bi-chevron-right"></i></a>
                        </div>
                      </div>
                      <div class="absolute top-1 right-3">
                        <button type="button" class="btn btn-outline-primary py-1 px-2">modifier</button>
                      </div>
                    </div>
                  )
                })
              ):
              <div>Aucun Evnement ...</div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListEventAdmin;