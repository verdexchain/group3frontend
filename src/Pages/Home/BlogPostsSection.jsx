import React from 'react';
import blankGif from './img/blank.gif';
import post1 from './img/posts_img/1.jpg';
import post2 from './img/posts_img/2.jpg';
import post3 from './img/posts_img/3.jpg';
import siteLogo from '../../resources/images/logo.png'
import Header from '../../Components/Header/Header';

const BlogPostsSection = () => {
  return (
   <>
   <div >
        <Header />
        </div>
    <section className="hero1">
    <div className="container">
      <h1 className="title text-center">RECENT NEWS
      </h1>
      <p>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
     
    </div>
  </section>
    <section className="section section--no-pb">
        
      <div className="container">
        <div className="section-heading section-heading--center" >
          <h2 className="__title" style={{textAlign:"center"}}>
           Recent <span>News</span>
          </h2>
          <p>
            Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable.
          </p>
        </div>

        {/* Start Posts */}
        <div className="posts posts--style-1">
          <div className="__inner">
            <div className="row">
              {/* Start Item 1 */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div
                  className="__item __item--preview"
                 
                  data-aos-offset="0"
                >
                  <figure className="__image">
                    <img
                      
                      src={post1}
                      alt="Tips for Ripening your Fruit"
                    />
                  </figure>

                  <div className="__content">
                    <p className="__category">
                      <a href="#">ORGANIC FOOD/TIPS & GUIDES</a>
                    </p>
                    <h3 className="__title h5">
                      <a href="blog_details.html">Tips for Ripening your Fruit</a>
                    </h3>
                    <p>
                      The generated Lorem Ipsum is therefore always free from repetition injected
                      humour, or non-characteristic words etc.
                    </p>
                    <a
                      className="custom-btn custom-btn--medium custom-btn--style-1"
                      href="blog_details.html"
                    >
                      Read more
                    </a>
                  </div>

                  <span className="__date-post">
                    <strong>07</strong>Nov
                  </span>
                </div>
              </div>
              {/* End Item 1 */}

              {/* Start Item 2 */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div
                  className="__item __item--preview"
               
                >
                  <figure className="__image">
                    <img
                      
                     src={post2}
                      alt="Health Benefits of a Raw Food"
                    />
                  </figure>

                  <div className="__content">
                    <p className="__category">
                      <a href="#">DIET/ORGANIC FOOD</a>
                    </p>
                    <h3 className="__title h5">
                      <a href="blog_details.html">Health Benefits of a Raw Food</a>
                    </h3>
                    <p>
                      The generated Lorem Ipsum is therefore always free from repetition injected
                      humour, or non-characteristic words etc.
                    </p>
                    <a
                      className="custom-btn custom-btn--medium custom-btn--style-1"
                      href="blog_details.html"
                    >
                      Read more
                    </a>
                  </div>

                  <span className="__date-post">
                    <strong>03</strong>Nov
                  </span>
                </div>
              </div>
              {/* End Item 2 */}

              {/* Start Item 3 */}
              <div className="col-12 col-sm-6 col-lg-4">
                <div
                  className="__item __item--preview"
                 
                >
                  <figure className="__image">
                    <img
                      
                      src={post3}
                      alt="Superfoods you should be eating"
                    />
                  </figure>

                  <div className="__content">
                    <p className="__category">
                      <a href="#">DIET/ORGANIC FOOD</a>
                    </p>
                    <h3 className="__title h5">
                      <a href="blog_details.html">Superfoods you should be eating</a>
                    </h3>
                    <p>
                      The generated Lorem Ipsum is therefore always free from repetition injected
                      humour, or non-characteristic words etc.
                    </p>
                    <a
                      className="custom-btn custom-btn--medium custom-btn--style-1"
                      href="blog_details.html"
                    >
                      Read more
                    </a>
                  </div>

                  <span className="__date-post">
                    <strong>25</strong>Oct
                  </span>
                </div>
              </div>
              {/* End Item 3 */}
            </div>
          </div>
        </div>
        {/* End Posts */}
      </div>
    </section>
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
   
   </>
  );
};

export default BlogPostsSection;
