import React from "react";
import "./landingPage.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ResumeGenarator from "./ResumeGenarator";

const LandingPage = () => {
  return (
    <>
      <section className="hero">
        <div className="content">
          <p>
            Designed to get hired. <br />
            Your skills, your story, your next job — all in one.
          </p>
          <Link className="btn btn-primary" to="/resumegenerator">Make your Resume</Link>
        </div>
      </section>

      <section className="tool py-5">
        <Container>
          <h2 className="text-center">Tools</h2>
          <Row>
            <Col md={6}>
              <h2>Resume</h2>
              <p>
                Create unlimited new resumes and easily edit them afterwards.
              </p>

              <h2>cover</h2>
              <p>Easily write professional cover letters.</p>

              <h2>Jobs</h2>
              <p>Automatically receive new and relevant job postings.</p>

              <h2>Application</h2>
              <p>
                Effortlessly manage and track your job applications in an
                organized manner.
              </p>
            </Col>
            <Col md={6}>
              <img
                className="img-fluid"
                src="https://cdn-images.zety.com/images/zety/landings/builder/resume-builder-jumbotron-image@3x.png"
                alt="resume"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="image"></section>

      <section className="testinomy py-5">
        <h2 className="text-center mb-4">Testinominals</h2>
        <div
          id="carouselExampleAutoplaying"
          class="carousel ride "
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Container>
                <Row>
                  <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow ms-4 mt-3">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Pooja S.</Card.Title>
                        <Card.Text className="fst-italic">
                          “I had no idea how to start my resume. With this tool, I created a professional CV in minutes and got shortlisted for my dream job.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>

                   <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow ms-4 mt-3">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid2.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Sandeep K.</Card.Title>
                        <Card.Text className="fst-italic">
                         “The resume builder is so easy to use. The designs are modern and HR-friendly. I got compliments on my resume in my first interview itself.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>


                   <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow ms-4 mt-3">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid7.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Meera D.</Card.Title>
                        <Card.Text className="fst-italic">
                         “I applied with my old resume for months with no luck. After using this resume builder, I got interview calls within a week. Truly a game-changer.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <div class="carousel-item">
             <Container>
                <Row>
                  <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow ms-4">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Pooja S.</Card.Title>
                        <Card.Text>
                          “I had no idea how to start my resume. With this tool, I created a professional CV in minutes and got shortlisted for my dream job.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>

                   <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Pooja S.</Card.Title>
                        <Card.Text>
                          “I had no idea how to start my resume. With this tool, I created a professional CV in minutes and got shortlisted for my dream job.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>


                   <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Pooja S.</Card.Title>
                        <Card.Text>
                          “I had no idea how to start my resume. With this tool, I created a professional CV in minutes and got shortlisted for my dream job.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
            <div class="carousel-item">
              <Container>
                <Row>
                  <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow ms-4">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Pooja S.</Card.Title>
                        <Card.Text>
                          “I had no idea how to start my resume. With this tool, I created a professional CV in minutes and got shortlisted for my dream job.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>

                   <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Pooja S.</Card.Title>
                        <Card.Text>
                          “I had no idea how to start my resume. With this tool, I created a professional CV in minutes and got shortlisted for my dream job.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>


                   <Col>
                    <Card style={{ width: "18rem" }} className="text-center shadow">
                      <Card.Img variant="center" src="https://assets.livecareer.co.uk/blobimages/lcintl-lp/luk/images/grid/grid1.png"  className="rounded-circle img-fluid ms-5 shadow"/>
                      <Card.Body>
                        <Card.Title>Pooja S.</Card.Title>
                        <Card.Text>
                          “I had no idea how to start my resume. With this tool, I created a professional CV in minutes and got shortlisted for my dream job.”
                        </Card.Text>
                        
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next text-dark"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon " aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
