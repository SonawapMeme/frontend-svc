const SingleMeme = () => {
  return (
    <div className="col-lg-1-5 col-md-2 col-12 col-sm-6">
      <div className="product-cart-wrap mb-30 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
        <div className="product-img-action-wrap">
          <div className="product-img product-img-zoom">
            <a href="shop-product-right.html">
            <img className="default-img" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" alt="" />
            <img className="hover-img" src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-1.jpg" alt="" />
            </a>
          </div>
        </div>
        <div className="product-content-wrap">
          <h2>Seeds of Change Organic Quinoa, Brown, & Red Rice</h2>
          <div className="product-card-bottom">
            <div className="add-cart">
              <a className="add" href="#"><i className="fi-rs-shopping-cart mr-5"></i>Download as file</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleMeme;