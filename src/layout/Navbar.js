import React from 'react'
import { Outlet } from 'react-router-dom';
import AllRoutes from '../nametitle/AllRoutes';

const Navbar = () => {
    return (
        <div>
            <div class="container-fluid border-bottom d-none d-lg-block">
                <div class="row gx-0">
                    <div class="col-lg-4 text-center py-2">
                        <div class="d-inline-flex align-items-center">
                            <i class="bi bi-geo-alt fs-1 text-primary me-3"></i>
                            <div class="text-start">
                                <h6 class="text-uppercase mb-1">Our Office</h6>
                                <span>123 Street, New York, USA</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 text-center border-start border-end py-2">
                        <div class="d-inline-flex align-items-center">
                            <i class="bi bi-envelope-open fs-1 text-primary me-3"></i>
                            <div class="text-start">
                                <h6 class="text-uppercase mb-1">Email Us</h6>
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 text-center py-2">
                        <div class="d-inline-flex align-items-center">
                            <i class="bi bi-phone-vibrate fs-1 text-primary me-3"></i>
                            <div class="text-start">
                                <h6 class="text-uppercase mb-1">Call Us</h6>
                                <span>+012 345 6789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-3 py-lg-0 px-3 px-lg-0">
                <a href="index.html" class="navbar-brand ms-lg-5">
                    <h1 class="m-0 text-uppercase text-dark"><i class="bi bi-shop fs-1 text-primary me-3"></i>Pet Shop</h1>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="visible  navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto py-0">
                        <a href={`/`} class="nav-item nav-link active text-gray-800">Home</a>
                        <a href={`/${AllRoutes.about}`} class="nav-item nav-link text-gray-800">A propos de nous ?</a>
                        <a href={`/${AllRoutes.contact}`} class="nav-item nav-link text-gray-800">Contact</a>
                        <a href="product.html" class="nav-item nav-link text-gray-800">Product</a>
                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu m-0">
                                <a href="price.html" class="dropdown-item text-gray-800">Pricing Plan</a>
                                <a href="team.html" class="dropdown-item text-gray-800">The Team</a>
                                <a href="testimonial.html" class="dropdown-item text-gray-800">Testimonial</a>
                                <a href="blog.html" class="dropdown-item text-gray-800">Blog Grid</a>
                                <a href="detail.html" class="dropdown-item text-gray-800">Blog Detail</a>
                            </div>
                        </div>
                        <a href="contact.html" class="nav-item nav-link nav-contact bg-primary text-white px-5 ms-lg-5">Contact <i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </nav>
            <div>
                <Outlet />
            </div>
        </div>


    )
}

export default Navbar;