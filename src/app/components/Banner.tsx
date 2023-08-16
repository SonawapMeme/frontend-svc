const Banner = () => {
  return (
    <section className="banners mb-25">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay="0">
              <img src="assets/imgs/banner/banner-1.png" alt="" />
              <div className="banner-text">
                <h4>
                  Everyday Fresh & <br />Clean with Our<br />
                  Products
                </h4>
                <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;