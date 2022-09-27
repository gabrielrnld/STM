import React from 'react';
import { Card } from 'react-bootstrap';

export default function Home() {
  return (
    <div>
      <div className="container col-xxl-8 px-4 py-5">
        <section className="row flex-lg-row-reserve align-items-center g-5 py-3">
          <div className="col-10 col-sm-8 col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Find Best Your Apartment</h1>
            <p>
              Quickly design and customize responsive mobile-first sites with Bootstrap,
              the world’s most popular front-end open source toolkit, featuring Sass
              variables and mixins, responsive grid system, extensive prebuilt components,
              and powerful JavaScript plugins.
            </p>
            <button className="btn btn-orange">Contact Us</button>
          </div>

          <div className="col-lg-6">
            <img
              src="/apartment.jpg"
              className="d-block mx-lg-auto img-fluid img-round"
              width="700"
              height="500"
              alt="apartment"
            />
          </div>
        </section>
      </div>
      <div className="bg-orange">
        <div className="container ">
          <div className="col-xxl-7 px-4 py-5">
            <div className="d-flex justify-content-evenly">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/interior1.jpg" alt="interior 1" />
                <Card.Body>
                  <Card.Title>Premium Room</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/interior2.jpg" alt="interior 2" />
                <Card.Body>
                  <Card.Title>Family Room</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="/interior3.jpg" alt="interior 3" />
                <Card.Body>
                  <Card.Title>Bussiness Room</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
