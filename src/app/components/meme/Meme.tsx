import SingleMeme from "./SingleMeme";

const Meme = () => {
  const array = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];
  return (
    <section className="product-tabs section-padding position-relative">
      <div className="container-fluid">
        <div className="tab-content" id="myTabContent">
          <div className="tab-pane fade show active" id="tab-one" role="tabpanel" aria-labelledby="tab-one">
            <div className="row product-grid-4">
              {
                array?.map(() => (
                  <SingleMeme />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Meme;