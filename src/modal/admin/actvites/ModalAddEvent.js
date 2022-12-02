import React, { useState } from 'react';

const ModalAddEvent = () => {
  const [state, setstate] = useState();
  const [email, setemail] = useState();
  const [telephone, settelephone] = useState();
  const [pays, setpays] = useState();
  const [coverPicture, setcoverPicture] = useState();
  const [type, settype] = useState();
  const  bgImg =  "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
                <form>
                  <div class="row g-3">
                    <div class="col-12">
                      <input type="text" required class="form-control bg-light border-0 px-4 py-1" placeholder="nom evenement" style={{ height: "40px" }} />
                    </div>
                    <div class="col-12 flex">
                      <input type="file" accept=".JPNG,.JPEG,.PNG" required class="form-control bg-light border-0 px-4" placeholder="Votre email" style={{ height: "40px" }} />
                      <img src={`${bgImg}`}class="h-[50px] h-[50px]" />
                    </div>
                    <div class="col-12 flex">
                      <label class="form-control border-0 px-4" style={{ height: "40px" }}>date</label>
                      <input type="date" required class="form-control bg-light border-0 px-4" placeholder="Numéro de téléphone" style={{ height: "40px" }} />
                    </div>
                    <div class="col-12">
                      <textarea required class="form-control bg-light border-0 px-4" placeholder="description evenement" style={{ height: "155px" }} />
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

export default ModalAddEvent;
