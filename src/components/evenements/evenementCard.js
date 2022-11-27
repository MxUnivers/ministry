import React from 'react'

const evenementCard = () => {
    return (
        <div class="blog-item mb-5">
            <div class="row g-0 bg-light overflow-hidden">
                <div class="col-12 col-sm-5 h-100">
                    <img class="img-fluid h-100" src="img/blog-1.jpg" style={{ objectFit: "cover" }} />
                </div>
                <div class="col-12 col-sm-7 h-100 d-flex flex-column justify-content-center">
                    <div class="p-4">
                        <div class="d-flex mb-3">
                            <small class="me-3"><i class="bi bi-bookmarks me-2"></i>Web Design</small>
                            <small><i class="bi bi-calendar-date me-2"></i>01 Jan, 2045</small>
                        </div>
                        <h5 class="text-uppercase mb-3">Dolor sit magna rebum clita rebum dolor</h5>
                        <p>Ipsum sed lorem amet dolor amet duo ipsum amet et dolore est stet tempor eos dolor</p>
                        <a class="text-primary text-uppercase" href="">Read More<i class="bi bi-chevron-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default evenementCard
