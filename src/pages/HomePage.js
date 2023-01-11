import React from 'react'
import ReactPlayer from 'react-player';

const HomePage = () => {
    const bgImg = "https://scontent.fabj2-1.fna.fbcdn.net/v/t39.30808-6/292771185_178287737896073_6443069569858960538_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeErm15-6mfIGoRa3uXUPULjqe18Ju-Clxmp7Xwm74KXGZlHYQBNaZ5MGya3CEcW64qS01VJmG1acImuO3NM922I&_nc_ohc=1xCHeH6EHPwAX90tHQV&_nc_zt=23&_nc_ht=scontent.fabj2-1.fna&oh=00_AfBT-xOelHkkbd7jHc4QJLtSW86I9tKdqOJsa6vrY_g9FQ&oe=63972D37";
    const  Video = "https://www.youtube.com/watch?v=7ON44YyCDLU&t=21s";
    const  bgImg2 =  "https://scontent.fabj2-1.fna.fbcdn.net/v/t1.6435-9/142469020_1095048217634436_853363959839842407_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE_E5HJ29XnZk3vpQZ9f9P5vQFumNIY5IG9AW6Y0hjkgcyWkWabYeVQPwXXHOtw4e_529D5EQBGIm0JBXBuuD4M&_nc_ohc=pKqHqE4nV6QAX9Add6P&_nc_ht=scontent.fabj2-1.fna&oh=00_AfCa9f0OqJ7LiPfreFNXsWSLYA0DPe1ejTrzL6IRDbgG5w&oe=63B9644E"
  return (
    <div>
        <div class="container-fluid bg-primary py-5 mb-5 hero-header" style={{backgroundImage : `url('${bgImg}')`}}>
        <div class="container py-5" >
            <div class="row justify-content-start" >
                <div class="col-lg-8 text-center text-lg-start">
                    <h1 class="display-1 text-uppercase  mb-lg-4 text-gray-200">Minitère de la pleintude en Christ</h1>
                    <h1 class="text-uppercase text-white mb-lg-4">Make Your Pets Happy</h1>
                    <p class="fs-4 text-white mb-lg-4">Dolore tempor clita lorem rebum kasd eirmod dolore diam eos kasd. Kasd clita ea justo est sed kasd erat clita sea</p>
                    <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                        {/* <a href="" class="btn btn-outline-light border-2 py-md-3 px-md-5 me-5">Voire plus</a> */}
                        <button type="button" class="btn-play" data-bs-toggle="modal"
                            data-src={Video} data-bs-target="#videoModal">
                            <span></span>
                        </button>
                        <h5 class="font-weight-normal text-white m-0 ms-4 d-none d-sm-block">Jouer la vidéo</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="modal fade" id="videoModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content rounded-0">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Titre de vidéo en question </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="ratio ratio-16x9">
                        {/* Lien de video  */}
                        <ReactPlayer url={`${Video}`} height={`100%`} width={`100%`} class="h-[100%] w-[100%]" />
                    </div>
                </div>
            </div>
        </div>
    </div>



    <div class="container-fluid py-5">
        <div class="container">
            <div class="row gx-5">
                <div class="col-lg-5 mb-5 mb-lg-0" style={{minHeight: "500px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded" src={bgImg} style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="border-start border-5 border-primary ps-5 mb-5">
                        <h6 class="text-primary text-uppercase">About Us</h6>
                        <h1 class="display-5 text-uppercase mb-0">Vivez pleinement la plénitude en Christ</h1>
                    </div>
                    <h4 class="text-body mb-4">
                         Colossiens 2:9-10
                         Car en lui habite corporellement toute la plénitude de la divinité. Vous avez tout pleinement en lui, qui est le chef de toute domination et de toute autorité.
                         Source: https://bible.knowing-jesus.com/Fran%C3%
                    </h4>
                    <div class="bg-light p-4">
                        <ul class="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
                            <li class="nav-item w-50" role="presentation">
                                <button class="nav-link text-uppercase w-100 active" id="pills-1-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-1" type="button" role="tab" aria-controls="pills-1"
                                    aria-selected="true">Our Mission</button>
                            </li>
                            <li class="nav-item w-50" role="presentation">
                                <button class="nav-link text-uppercase w-100" id="pills-2-tab" data-bs-toggle="pill"
                                    data-bs-target="#pills-2" type="button" role="tab" aria-controls="pills-2"
                                    aria-selected="false">Our Vission</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-1" role="tabpanel" aria-labelledby="pills-1-tab">
                                <p class="mb-0">SI PAR LA BOUCHE DE PROPHETE SAMUEL DAVID " BERGER" EST DEVENU "ROI ", JE PRIE POUR QUE DIEU CHANGE TON STATUT SPIRITUEL,SOCIAL, FINANCIÈR, MATRIMONIALE AU NOM DE JÉSUS CHRIST.</p>
                            </div>
                            <div class="tab-pane fade" id="pills-2" role="tabpanel" aria-labelledby="pills-2-tab">
                                <p class="mb-0">SI PAR LA BOUCHE DE PROPHETE SAMUEL DAVID " BERGER" EST DEVENU "ROI ", JE PRIE POUR QUE DIEU CHANGE TON STATUT SPIRITUEL,SOCIAL, FINANCIÈR, MATRIMONIALE AU NOM DE JÉSUS CHRIST.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    <div class="container-fluid py-5">
        <div class="container">
            <div class="border-start border-5 border-primary ps-5 mb-5" style={{maxWidth: "600px"}}>
                <h6 class="text-primary text-uppercase">Services</h6>
                <h1 class="display-5 text-uppercase mb-0">Nos différents programmes</h1>
            </div>
            <div class="row g-5">
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4">
                        <i class="flaticon-house display-1 text-primary me-4"></i>
                        <div>
                            <h5 class="text-uppercase mb-3">Reception</h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a class="text-primary text-uppercase" href="">Voire plus<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4">
                        <i class="flaticon-food display-1 text-primary me-4"></i>
                        <div>
                            <h5 class="text-uppercase mb-3">Prière </h5>
                            <p>Kasd dolor no lorem sit tempor at justo rebum rebum stet justo elitr dolor amet sit</p>
                            <a class="text-primary text-uppercase" href="">Voire plus<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4">
                        <i class="flaticon-grooming display-1 text-primary me-4"></i>
                        <div>
                            <h5 class="text-uppercase mb-3">Culte</h5>
                            <p>Nos cultes se déroule tous les dimanches de de 8h - 12-30 </p>
                            <a class="text-primary text-uppercase" href="">Voire plus<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4">
                        <i class="flaticon-cat display-1 text-primary me-4"></i>
                        <div>
                            <h5 class="text-uppercase mb-3">Prière à la Radio</h5>
                            <p>Suivez nous sur a la radio sur la fréquence 92.8</p>
                            <a class="text-primary text-uppercase" href="">Voire plus<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4">
                        <i class="flaticon-dog display-1 text-primary me-4"></i>
                        <div>
                            <h5 class="text-uppercase mb-3">Activités bibliques</h5>
                            <p>Edification au travers de la parole </p>
                            <a class="text-primary text-uppercase" href="">Voire plus<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="service-item bg-light d-flex p-4">
                        <i class="flaticon-vaccine display-1 text-primary me-4"></i>
                        <div>
                            <h5 class="text-uppercase mb-3">Enseignement sur les couples </h5>
                            <p>Les bonnes pratiques dans les ensignements  </p>
                            <a class="text-primary text-uppercase" href="">Voire plus<i class="bi bi-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

    
    

    

    <div class="container-fluid bg-testimonial py-5" style={{margin: "45px 0" ,height:"400px" , backgroundImage:`url('${bgImg2}')`}}>
        <div class="container py-5">
            <div class="row justify-content-end">
                <div class="col-lg-7">
                    <div class="owl-carousel testimonial-carousel bg-white p-5">
                        <div class="testimonial-item text-center">
                            <div class="relative position-relative mb-4">
                                <img class="img-fluid mx-auto" src={`${bgImg2}`} alt=""/>
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style={{width: "45px", height: "45px"}}>
                                    <i class="bi bi-chat-square-quote text-primary"></i>
                                </div>
                                <div>
                                    <button class="border-gray-200 p-5 rounded-lg text-gray-200">Suivre</button>
                                </div>

                            </div>
                            <p>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                            <hr class="w-25 mx-auto"/>
                            <h5 class="text-uppercase">Client Name</h5>
                            <span>Profession</span>
                        </div>
                        <div class="testimonial-item text-center">
                            <div class="position-relative mb-4">
                                <img class="img-fluid mx-auto" src="img/testimonial-2.jpg" alt=""/>
                                <div class="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white" style={{width: "45px", height: "45px"}}>
                                    <i class="bi bi-chat-square-quote text-primary"></i>
                                </div>
                            </div>
                            <p>Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat. Erat dolor rebum sit ipsum.</p>
                            <hr class="w-25 mx-auto"/>
                            <h5 class="text-uppercase">Client Name</h5>
                            <span>Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

    
    </div>
  )
}

export default HomePage;