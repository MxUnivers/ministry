import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import ModalSignupMember from '../modal/member/ModalSignupMember';
const MemberSignUpPage = () => {
  return (
    <div>
      <div class="container-fluid bg-offer my-5 py-5">
        <div class="container py-5">
          <div class="row gx-5 justify-content-start">
            <div class="col-lg-7">
              <div class="border-start border-5 border-dark ps-5 mb-5">
                <h6 class="text-dark text-uppercase text-gray-500">Bienvenue cher participant</h6>
                <h1 class="display-5 text-uppercase text-white mb-0">Devenir un membre pour une une plus forte influence</h1>
              </div>
              <p class="text-white mb-4">Votre soutien fait la fièrté de Christ dans sa Gloire</p>
              <button  class="btn btn-light py-md-3 px-md-5 me-3" data-bs-toggle="modal" data-bs-target="#member">Devenir Membre</button>

              <button type="button" class="btn-play" data-bs-toggle="modal"
                data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                <span></span>
              </button>

            </div>
          </div>
        </div>
      </div>
      {/* Video */}
      <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content rounded-0">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Youtube Video</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="ratio ratio-16x9">
                <iframe class="embed-responsive-item" src="" id="video" allowfullscreen allowscriptaccess="always"
                  allow="autoplay"></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Inscription */}
      <ModalSignupMember/>
      
      <div>
      </div>
    </div>
  )
}

export default MemberSignUpPage;