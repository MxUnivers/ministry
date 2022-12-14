import React from 'react'

const ModalSignupMember = () => {
  return (

    <div class=" modal fade " id="member" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content rounded-0">
          <div class="modal-header relative">
            <h6 class=" modal-title  text-primary text-uppercase display-7 text-uppercase mb-0" id="exampleModalLabel" style={{ maxWidth: "600px" }}>Vos Informations</h6>
            <button type="button" class="absolute top-3 right-4 btn btn-close text-2xl " data-bs-dismiss="modal" aria-label="Close">X</button>
          </div>
          <div  class="modal-body container flex justify-center">
          
          <div class="flex justify-center row g-8">
            <div class="col-lg-9">
              <form>
                <div class="row g-3">
                  <div class="col-12">
                    <input type="text" required class="form-control bg-light border-0 px-4" placeholder="Nom Complet" style={{ height: "55px" }} />
                  </div>
                  <div class="col-12">
                    <input type="email" required class="form-control bg-light border-0 px-4" placeholder="Votre email" style={{ height: "55px" }} />
                  </div>
                  <div class="col-12">
                    <input type="number" required class="form-control bg-light border-0 px-4" placeholder="Numéro de téléphone" style={{ height: "55px" }} />
                  </div>
                  <div class="col-12">
                    <button class="btn btn-outline-primary w-100 py-3" type="submit">Denvenir Membre</button>
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

export default ModalSignupMember;