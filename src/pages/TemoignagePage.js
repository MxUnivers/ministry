import React from 'react';
import AllRoutes from '../nametitle/AllRoutes';



const TemoignagePage = () => {
    const  bgImg =  "https://images.pexels.com/photos/6567283/pexels-photo-6567283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
        <div class="container py-5">
            <h2 class="text-gray-500 text-xl pb-4">Témoignages</h2>
        <div class="mb-5">
            <div class="input-group">
                        <input type="text" class="form-control p-3" placeholder="rechercher ..."/>
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
            </div>
        <div class="row g-5">
            
            <div class="col-lg-8">
                <div class="blog-item mb-5">
                    <div class=" w-full row g-0 bg-light overflow-hidden">
                        <div class="col-12 col-sm-5 h-100">
                            <img class="img-fluid h-100" src={`${bgImg}`} style={{objectFit: "cover"}}/>
                        </div>
                        <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                            <div class="p-4">
                                <div class="d-flex mb-3">
                                    <small class="me-3"><i class="bi bi-bookmarks me-2"></i>type de temoignage</small>
                                    <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                                </div>
                                <h5 class="text-uppercase mb-3">Temoignage</h5>
                                <p class="line-clamp-4">J'etais malade et Dieu m'a guérri</p>
                                <a class="text-primary text-uppercase" href={`${AllRoutes.temoignage}/:id`}>Lire ...<i class="bi bi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            

            <div class="col-lg-4">
                <div class="mb-5">
                    <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Categories</h3>
                    <div class="d-flex flex-column justify-content-start">
                        <a class="h5 py-2 px-3 mb-2 btn btn-primary m-1" href="#"><i class="bi bi-arrow-right me-2"></i>Web Design</a>
                        <a class="h5 py-2 px-3 mb-2 btn btn-primary m-1" href="#"><i class="bi bi-arrow-right me-2"></i>Web Development</a>
                        <a class="h5 py-2 px-3 mb-2 btn btn-primary m-1" href="#"><i class="bi bi-arrow-right me-2"></i>Web Development</a>
                        <a class="h5 py-2 px-3 mb-2 btn btn-primary m-1" href="#"><i class="bi bi-arrow-right me-2"></i>Keyword Research</a>
                        <a class="h5 py-2 px-3 mb-2 btn btn-primary m-1" href="#"><i class="bi bi-arrow-right me-2"></i>Email Marketing</a>
                    </div>
                </div>
                

                <div class="mb-5">
                    <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Recent Post</h3>
                    <div class="d-flex overflow-hidden mb-3">
                        <img class="img-fluid" src="img/blog-1.jpg" style={{width: "100px", height: "100px", objectFit: "cover"}} alt=""/>
                        <a href="" class="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                        </a>
                    </div>
                    
                </div>
                
                <div class="mb-5">
                    <img src="img/blog-1.jpg" alt="" class="img-fluid rounded"/>
                </div>
                
                <div>
                    <h3 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">Plain Text</h3>
                    <div class="bg-light text-center" style={{padding: "30px"}}>
                        <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                        <a href="" class="btn btn-primary py-2 px-4">Voire plus </a>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
      
    </div>
  )
}

export default TemoignagePage;
