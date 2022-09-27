import React, { useEffect } from "react";
import { Card } from "react-bootstrap";

export default function Home() {
  // const observer = new IntersectionObserver((entries) => {
  //   console.log("jeje");
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       console.log(entry.isIntersecting);
  //       entry.target.classList.add("show");
  //     } else {
  //       entry.target.classList.remove("show");
  //     }
  //   });
  // });
  // const hiddenElement = document.querySelectorAll(".faded");
  // hiddenElement.forEach((el) => observer.observe(el));
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElement = document.querySelectorAll(".faded");
    hiddenElement.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div>
      <div className="container align-items-center col-xxl-8 px-4 py-5">
        {/* <section className="row flex-lg-row-reserve align-items-center g-5 py-3 faded"> */}
        <section className="d-flex align-items-center faded">
          <div className="col-10 col-sm-8 col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              Find Best Your Apartment
            </h1>
            <p>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <button className="btn btn-orange btn-fs">Contact Us</button>
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
        <section className="d-flex  align-items-center">
          <div className="container ">
            {/* <div className="col-xxl-7 px-4 py-5"> */}
            <div>
              <div className="d-flex justify-content-evenly ">
                <Card className="fadein faded" style={{ width: "25rem" }}>
                  <Card.Img
                    variant="top"
                    src="/interior1.jpg"
                    alt="interior 1"
                  />
                  <Card.Body>
                    <Card.Title className="title-fs">Premium Room</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="fadein2 faded" style={{ width: "25rem" }}>
                  <Card.Img
                    variant="top"
                    src="/interior2.jpg"
                    alt="interior 2"
                  />
                  <Card.Body>
                    <Card.Title className="title-fs">Family Room</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className="fadein3 faded" style={{ width: "25rem" }}>
                  <Card.Img
                    variant="top"
                    src="/interior3.jpg"
                    alt="interior 3"
                  />
                  <Card.Body>
                    <Card.Title className="title-fs">Bussiness Room</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
