import React from 'react';
import './home.css';
import './css/critical.min.css'
import './css/style.css'
import feature1 from '../../resources/images/1.png';
import feature2  from '../../resources/images/2.png';
import feature3 from '../../resources/images/3.png';
import feature4 from '../../resources/images/4.png';
import feature5 from '../../resources/images/5.png';
import feature6 from '../../resources/images/6.png';
import bgWorldMap from './img/img_world_map.png';
import product1 from './img/product-preview_img/1.jpg';
import product2 from './img/product-preview_img/2.jpg';
import product3 from './img/product-preview_img/3.jpg';
import product4 from './img/product-preview_img/4.jpg';
import product5 from './img/product-preview_img/5.jpg';
import product6 from './img/product-preview_img/6.jpg';
import siteLogo from '../../resources/images/logo.png'
import icon1 from './img/ico/ico_count_1.png';
import icon2 from './img/ico/ico_count_2.png';
import icon3 from './img/ico/ico_count_3.png';
import icon4 from './img/ico/ico_count_4.png';
import bgImage from './img/agro.png';
import img1 from './img/img_1.png';
import blankGif from './img/blank.gif';
import reviewBg from './img/review_bg_1.png';
import avatar from './img/ava.png';
import Header from '../../Components/Header/Header';
function Home() {
    
  return (
    <div className="home">
        <div >
        <Header />
        </div>
      <header className="header">
    
      </header>
      <main className="main">
        <section className="hero">
          <div className="container">
            <h1 className="title text-center">Smart AgroLTD
            </h1>
            <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
            <a href="#" className="btn">
              Explore more
            
            </a>
          </div>
        </section>
      </main>

      <section className="section">
      <div className="container">
        <div className="section-heading section-heading--center" >
          <h2 className="__title" style={{textAlign:"center",margin:'3rem 0'}}>
            Special <span>Offers</span>
          </h2>
          <p>
            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          </p>
        </div>

        {/* Start Feature */}
        <div className="feature feature--style-1 ">
          <div className="__inner">
            <div className="row">
              {/* Start Item */}
              <div className="col-6 col-sm-4 col-lg-2">
                <div  >
                  <i className="__ico">
                    <img  src={feature1} alt="Farm Livestock" />
                  </i>
                  <h5 className="__title">Farm Livestock</h5>
                </div>
              </div>
              {/* End Item */}

              {/* Start Item */}
              <div className="col-6 col-sm-4 col-lg-2">
                <div >
                  <i className="__ico">
                    <img src={feature2} alt="Garden Tillage" />
                  </i>
                  <h5 className="__title">Garden Tillage</h5>
                </div>
              </div>
              {/* End Item */}

              {/* Start Item */}
              <div className="col-6 col-sm-4 col-lg-2">
                <div >
                  <i className="__ico">
                    <img  src={feature3} alt="Fresh Fruits" />
                  </i>
                  <h5 className="__title">Fresh Fruits</h5>
                </div>
              </div>
              {/* End Item */}

              {/* Start Item */}
              <div className="col-6 col-sm-4 col-lg-2">
                <div data-aos-offset="100">
                  <i className="__ico">
                    <img  src={feature4} alt="Vegetables" />
                  </i>
                  <h5 className="__title">Vegetables</h5>
                </div>
              </div>
              {/* End Item */}

              {/* Start Item */}
              <div className="col-6 col-sm-4 col-lg-2">
                <div >
                  <i className="__ico">
                    <img  src={feature5} alt="Awesome Wheats" />
                  </i>
                  <h5 className="__title">Awesome Wheats</h5>
                </div>
              </div>
              {/* End Item */}

              {/* Start Item */}
              <div className="col-6 col-sm-4 col-lg-2">
                <div >
                  <i className="__ico">
                    <img  src={feature6} alt="Agro Machinery" />
                  </i>
                  <h5 className="__title">Agro Machinery</h5>
                </div>
              </div>
              {/* End Item */}
            </div>
          </div>
        </div>
        {/* End Feature */}
      </div>
    </section>
    


        <section className="section">
      <div className="d-none d-lg-block">
        <img
          id="bg-img-1"
          
         src={bgImage}
          alt="Agro"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitTransform: 'translate(-50%, -50%)',
            msTransform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-12 col-lg-4">
            <div
              
            >
              <div className="section-heading">
                <h2 className="__title">
                  About agro <span>farm company</span>
                </h2>
              </div>

              <p className="d-none d-sm-block">
                <a className="custom-btn custom-btn--medium custom-btn--style-1" href="#">
                  More about
                </a>
              </p>
            </div>
          </div>

          {/* Spacer for small screens */}
          <div className="col-12 my-3 d-lg-none"></div>

          {/* Center Column */}
          <div className="col-12 col-lg-4 text-center">
            <div>
              <img
             
                src={img1}
                alt="About Agro"
              />
            </div>
          </div>

          {/* Spacer for small screens */}
          <div className="col-12 my-3 d-lg-none"></div>

          {/* Right Column */}
          <div className="col-12 col-lg-4">
            <div
              
            >
              <p>
                Latin words, combined with a handful of model sentence structures, to generate Lorem
                Ipsum which looks reasonable.
              </p>

              <p>
                The generated Lorem Ipsum is therefore always free from repetition injected humour,
                or non-characteristic words etc. Contrary to popular belief, Lorem Ipsum is not
                simply random text. It has roots in a piece of classic
              </p>

              <p className="d-sm-none">
                <a className="custom-btn custom-btn--medium custom-btn--style-1" href="#">
                  More about
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
        


        
         {/* Start Section */}
       <section className="section">
        <div className="container">
          <div className="section-heading section-heading--center" >
            <h2 className="__title">
              We are <span>on the world</span>
            </h2>

            <p>
              Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
            </p>
          </div>

          <div >
            <img
              
        src={bgWorldMap}
              alt="World Map"
            />
          </div>
        </div>
      </section>
      {/* End Section */}
        <div>

            

      {/* Start Section */}
      <section className="section section--no-pt section--no-pb section--gutter">
        <div className="container-fluid px-md-0">
          {/* Start Product Preview */}
          <div className="product-preview product-preview--style-1">
            <div className="__inner">
              <div className="row">
                {/* Start Item */}
                <div className="col-12 col-md-7 col-xl-6">
                  <div className="__item">
                    <div className="__intro-text">
                      <div className="row">
                        <div className="col-md-11">
                          <h2>
                            agro <span>products</span>
                          </h2>

                          <p>
                            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition injected humour, or non-characteristic words etc.
                          </p>

                          <p>
                            <a className="custom-btn custom-btn--medium custom-btn--style-1" href="#">
                              all products
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Item */}

                {/* Start Product Items */}
                <div className="col-12 col-md-5 col-xl-3">
                  <div className="__item">
                    <figure className="__image">
                      <img  src={product1} alt="Fruits" />
                    </figure>
                    <div className="__content">
                      <h3 className="__title">Fruits</h3>
                    </div>
                    <a className="__link" href="#"></a>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-xl-3">
                  <div className="__item">
                    <figure className="__image">
                      <img src={product2} alt="Vegetables" />
                    </figure>
                    <div className="__content">
                      <h3 className="__title">Vegetables</h3>
                    </div>
                    <a className="__link" href="#"></a>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-xl-3">
                  <div className="__item">
                    <figure className="__image">
                      <img src={product3} alt="Livestock" />
                    </figure>
                    <div className="__content">
                      <h3 className="__title">Livestock</h3>
                    </div>
                    <a className="__link" href="#"></a>
                  </div>
                </div>

                <div className="col-12 col-md-4 col-xl-3">
                  <div className="__item">
                    <figure className="__image">
                      <img src={product4} alt="Sunflowers" />
                    </figure>
                    <div className="__content">
                      <h3 className="__title">Sunflowers</h3>
                    </div>
                    <a className="__link" href="#"></a>
                  </div>
                </div>

                <div className="col-12 col-xl-6">
                  <div className="__item">
                    <div className="__content">
                      <h2 className="__title">
                        <b>12</b> Type of <br /> products
                      </h2>
                    </div>
                    <a className="__link" href="#"></a>
                  </div>
                </div>

                <div className="col-12 col-md-7 col-xl-6 offset-xl-3">
                  <div className="__item">
                    <figure className="__image">
                      <img src={product5} alt="Wheat" />
                    </figure>
                    <div className="__content">
                      <h3 className="__title">Wheat</h3>
                    </div>
                    <a className="__link" href="#"></a>
                  </div>
                </div>

                <div className="col-12 col-md-5 col-xl-3">
                  <div className="__item">
                    <figure className="__image">
                      <img src={product6} alt="Spices" />
                    </figure>
                    <div className="__content">
                      <h3 className="__title">Spices</h3>
                    </div>
                    <a className="__link" href="#"></a>
                  </div>
                </div>
                {/* End Product Items */}
              </div>
            </div>
          </div>
          {/* End Product Preview */}
        </div>
      </section>
      {/* End Section */}

      
    </div>
    <section className="section section--dark-bg">
      <div className="container">
        <div
          className="section-heading section-heading--center section-heading--white"
          
        >
          <h2 className="__title" style={{textAlign:'center'}}>
            Get <span>in touch</span>
          </h2>
          <p>
            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable.
          </p>
        </div>

        <form className="contact-form js-contact-form" action="#" >
          <div className="row">
            {/* Name Input */}
            <div className="col-12 col-md-6">
              <div className="input-wrp">
                <input
                  className="textfield"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="col-12 col-md-6">
              <div className="input-wrp">
                <input
                  className="textfield"
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
          </div>

          {/* Comments Textarea */}
          <div className="input-wrp">
            <textarea
              className="textfield"
              name="message"
              placeholder="Comments"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="custom-btn custom-btn--medium custom-btn--style-3 wide"
            type="submit"
          >
            Send
          </button>

          {/* Form Note */}
          <div className="form__note"></div>
        </form>
        
      </div>
    </section>

    <footer id="footer" className="footer--style-1">
      <div className="container">
        <div className="row">
          {/* Site Logo */}
          <div className="col-12 col-sm-auto">
            <div className="footer__item">
              <a className="site-logo" href="index.html">
                <img style={{width:"150px"}}
                  src={siteLogo}
                  alt="Site Logo"
                />
              </a>
            </div>
          </div>

          {/* Address and Social Links */}
          <div className="col-12 col-sm">
            <div className="row align-items-md-center no-gutters">
              <div className="col-12 col-md">
                <div className="footer__item">
                  <address>
                    <p>Ndop Cameroon</p>
                    <p>
                      +237 650990928 <br />
                      <a href="#">support@smartagroltd.com</a>
                    </p>
                  </address>
                </div>
              </div>

              <div className="col-12 col-md-auto">
                <div className="footer__item">
                  <div className="social-btns">
                    <a href="#">
                      <i className="fontello-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fontello-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fontello-linkedin-squared"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="col-12 col-lg-5 col-xl-4 offset-xl-1">
            <div className="footer__item">
              <h5 className="h6">Get a newsletter</h5>
              <form className="form--horizontal" action="#">
                <div className="input-wrp">
                  <input
                    className="textfield"
                    name="s"
                    type="email"
                    placeholder="Your E-mail"
                    required
                  />
                </div>
                <button
                  className="custom-btn custom-btn--medium custom-btn--style-1"
                  type="submit"
                  role="button"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Navigation and Copy */}
        <div className="row flex-lg-row-reverse">
          <div className="col-12 col-lg-6">
            <div className="footer__item">
              <nav id="footer__navigation" className="navigation text-lg-right">
                <ul>
                  <li className="active">
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                  <li>
                    <a href="#">Signin as Employee</a>
                  </li>
                  <li>
                    <a href="#">Register as Employee</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="footer__item">
              <span className="__copy">
                © 2019 (Smart AgroLTD. All rights reserved. Created by{' '}
                <a
                  href='#'
                >
                  Group 3
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>

    
  );
      
    </div>
  );
}

export default Home;
