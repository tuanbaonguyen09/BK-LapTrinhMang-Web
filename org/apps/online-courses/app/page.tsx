'use client';

import Script from 'next/script';
import styled from 'styled-components';

const StyledPage = styled.div`
  .page {
  }
`;

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.styled-components file.
   */
  return (
    <StyledPage>
      {/*  */}
      {/* <div id="preloader">
        <div className="spinner"></div>
      </div> */}

      {/*  */}
      <header className="header-area">

        {/*  */}
        <div className="top-header-area d-flex justify-content-between align-items-center">
          {/*  */}
          <div className="contact-info">
            <a href="#"><span>Phone:</span> +44 300 303 0266</a>
            <a href="#"><span>Email:</span> info@clever.com</a>
          </div>

          <div className="follow-us">
            <span>Follow us</span>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>


        <div className="clever-main-menu">
          <div className="classy-nav-container breakpoint-off">

            <nav className="classy-navbar justify-content-between" id="cleverNav">


              <a className="nav-brand" href="index.html"><img src="img/core-img/logo.png" alt="" /></a>


              <div className="classy-navbar-toggler">
                <span className="navbarToggler"><span></span><span></span><span></span></span>
              </div>


              <div className="classy-menu">


                <div className="classycloseIcon">
                  <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                </div>


                <div className="classynav">
                  <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="#">Pages</a>
                      <ul className="dropdown">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="single-course.html">Single Courses</a></li>
                        <li><a href="instructors.html">Instructors</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="blog-details.html">Single Blog</a></li>
                        <li><a href="regular-page.html">Regular Page</a></li>
                        <li><a href="contact.html">Contact</a></li>
                      </ul>
                    </li>
                    <li><a href="courses.html">Courses</a></li>
                    <li><a href="instructors.html">Instructors</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Contact</a></li>
                  </ul>


                  <div className="search-area">
                    <form action="#" method="post">
                      <input type="search" name="search" id="search" placeholder="Search" />
                      <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </form>
                  </div>


                  <div className="register-login-area">
                    <a href="#" className="btn">Register</a>
                    <a href="index-login.html" className="btn active">Login</a>
                  </div>

                </div>

              </div>
            </nav>
          </div>
        </div>
      </header>



      <section className="hero-area bg-img bg-overlay-2by5"
      // style="background-image: url(img/bg-img/bg1.jpg);"
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">

              <div className="hero-content text-center">
                <h2>{`Let's Study Together`}</h2>
                <a href="#" className="btn clever-btn">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="cool-facts-area section-padding-100-0">
        <div className="container">
          <div className="row">

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-facts-area text-center mb-100 wow fadeInUp" data-wow-delay="250ms">
                <div className="icon">
                  <img src="img/core-img/docs.png" alt="" />
                </div>
                <h2><span className="counter">1912</span></h2>
                <h5>Success Stories</h5>
              </div>
            </div>


            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-facts-area text-center mb-100 wow fadeInUp" data-wow-delay="500ms">
                <div className="icon">
                  <img src="img/core-img/star.png" alt="" />
                </div>
                <h2><span className="counter">123</span></h2>
                <h5>Dedicated Tutors</h5>
              </div>
            </div>


            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-facts-area text-center mb-100 wow fadeInUp" data-wow-delay="750ms">
                <div className="icon">
                  <img src="img/core-img/events.png" alt="" />
                </div>
                <h2><span className="counter">89</span></h2>
                <h5>Scheduled Events</h5>
              </div>
            </div>


            <div className="col-12 col-sm-6 col-lg-3">
              <div className="single-cool-facts-area text-center mb-100 wow fadeInUp" data-wow-delay="1000ms">
                <div className="icon">
                  <img src="img/core-img/earth.png" alt="" />
                </div>
                <h2><span className="counter">56</span></h2>
                <h5>Available Courses</h5>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="popular-courses-area section-padding-100-0"
      // style="background-image: url(img/core-img/texture.png);"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>Popular Online Courses</h3>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="250ms">
                <img src="img/bg-img/c1.jpg" alt="" />

                <div className="course-content">
                  <h4>English Grammar</h4>
                  <div className="meta d-flex align-items-center">
                    <a href="#">Sarah Parker</a>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                    <a href="#">Art &amp; Design</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                </div>

                <div className="seat-rating-fee d-flex justify-content-between">
                  <div className="seat-rating h-100 d-flex align-items-center">
                    <div className="seat">
                      <i className="fa fa-user" aria-hidden="true"></i> 10
                    </div>
                    <div className="rating">
                      <i className="fa fa-star" aria-hidden="true"></i> 4.5
                    </div>
                  </div>
                  <div className="course-fee h-100">
                    <a href="#" className="free">Free</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="500ms">
                <img src="img/bg-img/c2.jpg" alt="" />

                <div className="course-content">
                  <h4>Vocabulary</h4>
                  <div className="meta d-flex align-items-center">
                    <a href="#">Sarah Parker</a>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                    <a href="#">Art &amp; Design</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                </div>

                <div className="seat-rating-fee d-flex justify-content-between">
                  <div className="seat-rating h-100 d-flex align-items-center">
                    <div className="seat">
                      <i className="fa fa-user" aria-hidden="true"></i> 10
                    </div>
                    <div className="rating">
                      <i className="fa fa-star" aria-hidden="true"></i> 4.5
                    </div>
                  </div>
                  <div className="course-fee h-100">
                    <a href="#">$20</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-popular-course mb-100 wow fadeInUp" data-wow-delay="750ms">
                <img src="img/bg-img/c3.jpg" alt="" />

                <div className="course-content">
                  <h4>Expository writing</h4>
                  <div className="meta d-flex align-items-center">
                    <a href="#">Sarah Parker</a>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                    <a href="#">Art &amp; Design</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                </div>

                <div className="seat-rating-fee d-flex justify-content-between">
                  <div className="seat-rating h-100 d-flex align-items-center">
                    <div className="seat">
                      <i className="fa fa-user" aria-hidden="true"></i> 10
                    </div>
                    <div className="rating">
                      <i className="fa fa-star" aria-hidden="true"></i> 4.5
                    </div>
                  </div>
                  <div className="course-fee h-100">
                    <a href="#">$45</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="best-tutors-area section-padding-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>The Best Tutors in Town</h3>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="tutors-slide owl-carousel wow fadeInUp" data-wow-delay="250ms">


                <div className="single-tutors-slides">

                  <div className="tutor-thumbnail">
                    <img src="img/bg-img/t1.png" alt="" />
                  </div>

                  <div className="tutor-information text-center">
                    <h5>Alex Parker</h5>
                    <span>Teacher</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                    <div className="social-info">
                      <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>


                <div className="single-tutors-slides">

                  <div className="tutor-thumbnail">
                    <img src="img/bg-img/t2.png" alt="" />
                  </div>

                  <div className="tutor-information text-center">
                    <h5>Alex Parker</h5>
                    <span>Teacher</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                    <div className="social-info">
                      <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>


                <div className="single-tutors-slides">

                  <div className="tutor-thumbnail">
                    <img src="img/bg-img/t3.png" alt="" />
                  </div>

                  <div className="tutor-information text-center">
                    <h5>Alex Parker</h5>
                    <span>Teacher</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                    <div className="social-info">
                      <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>


                <div className="single-tutors-slides">

                  <div className="tutor-thumbnail">
                    <img src="img/bg-img/t4.png" alt="" />
                  </div>

                  <div className="tutor-information text-center">
                    <h5>Alex Parker</h5>
                    <span>Teacher</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                    <div className="social-info">
                      <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>


                <div className="single-tutors-slides">

                  <div className="tutor-thumbnail">
                    <img src="img/bg-img/t5.png" alt="" />
                  </div>

                  <div className="tutor-information text-center">
                    <h5>Alex Parker</h5>
                    <span>Teacher</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae.</p>
                    <div className="social-info">
                      <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                      <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="register-now section-padding-100-0 d-flex justify-content-between align-items-center"
      // style="background-image: url(img/core-img/texture.png);"
      >

        <div className="register-contact-form mb-100 wow fadeInUp" data-wow-delay="250ms">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="forms">
                  <h4>Courses For Free</h4>
                  <form action="#" method="post">
                    <div className="row">
                      <div className="col-12 col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" id="text" placeholder="Name" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="form-group">
                          <input type="email" className="form-control" id="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" id="phone" placeholder="Phone" />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className="form-group">
                          <input type="text" className="form-control" id="site" placeholder="Site" />
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn clever-btn w-100">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="register-now-countdown mb-100 wow fadeInUp" data-wow-delay="500ms">
          <h3>Register Now</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum laoreet elit, sit amet tincidunt mauris ultrices vitae. Donec bibendum tortor sed mi faucibus vehicula. Sed erat lorem</p>

          <div className="register-countdown">
            <div className="events-cd d-flex flex-wrap" data-countdown="2019/03/01"></div>
          </div>
        </div>
      </section>



      <section className="upcoming-events section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>Upcoming events</h3>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-upcoming-events mb-50 wow fadeInUp" data-wow-delay="250ms">

                <div className="events-thumb">
                  <img src="img/bg-img/e1.jpg" alt="" />
                  <h6 className="event-date">August 26</h6>
                  <h4 className="event-title">Networking Day</h4>
                </div>

                <div className="date-fee d-flex justify-content-between">
                  <div className="date">
                    <p><i className="fa fa-clock"></i> August 26 @ 9:00 am</p>
                  </div>
                  <div className="events-fee">
                    <a href="#">$45</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-upcoming-events mb-50 wow fadeInUp" data-wow-delay="500ms">

                <div className="events-thumb">
                  <img src="img/bg-img/e2.jpg" alt="" />
                  <h6 className="event-date">August 7</h6>
                  <h4 className="event-title">Open Doors Day</h4>
                </div>

                <div className="date-fee d-flex justify-content-between">
                  <div className="date">
                    <p><i className="fa fa-clock"></i> August 7 @ 9:00 am</p>
                  </div>
                  <div className="events-fee">
                    <a href="#" className="free">Free</a>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-4">
              <div className="single-upcoming-events mb-50 wow fadeInUp" data-wow-delay="750ms">

                <div className="events-thumb">
                  <img src="img/bg-img/e3.jpg" alt="" />
                  <h6 className="event-date">August 3</h6>
                  <h4 className="event-title">Creative Leadership</h4>
                </div>

                <div className="date-fee d-flex justify-content-between">
                  <div className="date">
                    <p><i className="fa fa-clock"></i> August 3 @ 9:00 am</p>
                  </div>
                  <div className="events-fee">
                    <a href="#">$45</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="blog-area section-padding-100-0">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>From Our Blog</h3>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-12 col-md-6">
              <div className="single-blog-area mb-100 wow fadeInUp" data-wow-delay="250ms">
                <img src="img/blog-img/1.jpg" alt="" />

                <div className="blog-content">
                  <a href="#" className="blog-headline">
                    <h4>English Grammer</h4>
                  </a>
                  <div className="meta d-flex align-items-center">
                    <a href="#">Sarah Parker</a>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                    <a href="#">Art &amp; Design</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6">
              <div className="single-blog-area mb-100 wow fadeInUp" data-wow-delay="500ms">
                <img src="img/blog-img/2.jpg" alt="" />

                <div className="blog-content">
                  <a href="#" className="blog-headline">
                    <h4>English Grammer</h4>
                  </a>
                  <div className="meta d-flex align-items-center">
                    <a href="#">Sarah Parker</a>
                    <span><i className="fa fa-circle" aria-hidden="true"></i></span>
                    <a href="#">Art &amp; Design</a>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim nulla, mollis eu metus in, sagittis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 

       */}
      <footer className="footer-area">
        {/*  */}
        <div className="top-footer-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                {/*  */}
                <div className="footer-logo">
                  <a href="index.html"><img src="img/core-img/logo2.png" alt="" /></a>
                </div>
                {/*  */}
                <p>
                  {/* <a href="#">
                    Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                  </a> */}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="bottom-footer-area d-flex justify-content-between align-items-center">
          {/*  */}
          <div className="contact-info">
            <a href="#"><span>Phone:</span> +44 300 303 0266</a>
            <a href="#"><span>Email:</span> info@clever.com</a>
          </div>
          {/*  */}
          <div className="follow-us">
            <span>Follow us</span>
            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
          </div>
        </div>
      </footer>
      {/*  */}


      <Script src="js/jquery/jquery-2.2.4.min.js"></Script>

      <Script src="js/bootstrap/popper.min.js"></Script>

      <Script src="js/bootstrap/bootstrap.min.js"></Script>

      <Script src="js/plugins/plugins.js"></Script>

      <Script src="js/active.js"></Script>
    </StyledPage>
  );
}
