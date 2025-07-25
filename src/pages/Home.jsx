import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero container py-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">Heading</h1>
            <p className="lead">Subtitle</p>
            <div className="d-flex gap-3">
              <Link to="/register" className="btn btn-primary">
                Try it now
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <div className="glass p-4">
              <img
                src="https://via.placeholder.com/600x400"
                alt="Placeholder"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews container py-5">
        <h2 className="text-center mb-4">Reviews Heading</h2>
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-md-4">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <h3 className="h5">Review Title 1</h3>
              <p className="text-muted">First review text goes here.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="col-md-4">
            <div className="review-card">
              <div className="stars">★★★★☆</div>
              <h3 className="h5">Review Title 2</h3>
              <p className="text-muted">Second review text goes here.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="col-md-4">
            <div className="review-card">
              <div className="stars">★★★★★</div>
              <h3 className="h5">Review Title 3</h3>
              <p className="text-muted">Third review text goes here.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
