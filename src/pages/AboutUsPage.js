

import React from 'react'
import AllRoutes from '../nametitle/AllRoutes';

const AboutUsPage = () => {


    const bgImg = "https://scontent.fabj2-1.fna.fbcdn.net/v/t1.6435-9/92792236_126814742286571_2562434126527332352_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFn5wT7rIGILf6BMiSLffEIh2ZeNHMqoCGHZl40cyqgIV24Q27gsAUEz7RX2gBhuCYaExj9qs1S3xkWAieAxzTb&_nc_ohc=k74nKYOMV4EAX9Vaesy&_nc_ht=scontent.fabj2-1.fna&oh=00_AfAMb4y3Og-VX7W_7cjz0WuEz6Yo8ZLBQxDPn8jcspNknw&oe=63B95CF5";
    const bgImg2 = "https://images.pexels.com/photos/6953864/pexels-photo-6953864.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
    const bgImg3 = "https://images.pexels.com/photos/6567420/pexels-photo-6567420.jpeg?auto=compress&cs=tinysrgb&w=400";
    
    return (
        <div>
            <div class="container-fluid py-5">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-5 mb-5 mb-lg-0" style={{ minHeight: "500px" }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded" src={`${bgImg}`} style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="border-start border-5 border-primary ps-5 mb-5">
                                <h6 class="text-primary text-uppercase">A propos de nous ? </h6>
                                <h1 class="display-5 text-uppercase mb-0">Minitère de la plénitude</h1>
                            </div>
                            <h4 class="text-body mb-4">Jean 1:14
                                Concept des Versets
                                Et la parole a été faite chair, et elle a habité parmi nous, pleine de grâce et de vérité; et nous avons contemplé sa gloire, une gloire comme la gloire du Fils unique venu du Père. </h4>
                            <div class="bg-light p-4">
                                <ul class="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item w-50" role="presentation">
                                        <button class="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                            aria-selected="true">Notre mission pour vous </button>
                                    </li>
                                    <li class="nav-item w-50" role="presentation">
                                        <button class="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                            aria-selected="false">activtés</button>
                                    </li>
                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                    <p class="mb-0">La ministère de plénitude en chrsit Situé dans En Côte d'Ivoire  dans la ville d'Abijan plsus précisement au deux plateau ,Carregour ancien marché</p>
                                    </div>
                                    <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                    <p class="mb-0">  Ecole biblique,  ensignement du mercredi , Prière du vendredi  ,  culte du dimanche</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container-fluid bg-offer my-5 py-5 h-[450px]" style={{backgroundImage:`url('${bgImg2}')`, backgroundSize:"cover"}}>
                <div class="container py-5">
                    <div class="row gx-5 justify-content-start">
                        <div class="col-lg-7">
                            <div class="border-start border-5 border-dark ps-5 mb-5">
                                <h6 class="text-dark text-uppercase">Special Offer</h6>
                                <h1 class="display-5 text-uppercase text-white mb-0">Vivez le meilleur pour Dieu</h1>
                            </div>
                            <p class="text-white mb-4">Benéficier d'une meilleur expérience , en devenant membre de l'organsation</p>
                            <a href={`/${AllRoutes.member}`} class="btn btn-light py-md-3 px-md-5 me-3">Devenir Membre</a>
                            {/* <a href="" class="btn btn-outline-light py-md-3 px-md-5">Read More</a> */}
                        </div>
                    </div>
                </div>
            </div>


            <div class="container-fluid py-5 w-full" style={{backgroundImage:`url('${bgImg3}')`}}>
                <div class="container">
                    <div class="border-start border-5 border-primary ps-5 mb-5" style={{ maxWidth: "600px" , objectFit: "cover",fill:'Background' }}>
                        <h6 class="text-primary text-uppercase">Team Members</h6>
                        <h1 class="display-5 text-uppercase mb-0 text-gray-400">Besoin de prière </h1>
                    </div>
                    <a href={`/${AllRoutes.contact}`}>
                    <button class=" text-gray-900 btn btn-primary"> Contacter nous </button>
                    </a>

                    <div class="owl-carousel team-carousel position-relative" style={{ paddingRight: "25px" }}>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsPage