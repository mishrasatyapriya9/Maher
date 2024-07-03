import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import rishbh2 from "../../assets/ReviewPhotos/rishbh2.jpeg";
import amar2 from "../../assets/ReviewPhotos/amar2.jpeg";
import geetika2 from "../../assets/ReviewPhotos/geetika2.jpeg";

export default function App() {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" xl="8" className="text-center">
          <h3 className="mb-4">Reviews</h3>
          <p className="mb-4 pb-2 mb-md-5 pb-md-0">
            <h6>What customer says about us</h6>
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow className="text-center d-flex align-items-stretch">
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#9d789b" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={rishbh2}
                className="rounded-circle img-fluid"
                style={{ width: "80%", marginTop: "50px" }}
                alt="content"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Rishabh</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                <b>Mehar Hospitality Services</b> helped me discover the magic
                of Kerala. Their membership offered amazing deals on premium
                hotels, allowing me to stay in a luxurious and comfortable
                location. The trip was perfectly planned, and I had the
                opportunity to explore the stunning backwaters and experience
                the vibrant local culture.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#7a81a8" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={amar2}
                className="rounded-circle img-fluid"
                style={{ width: "80%", marginTop: "50px" }}
                alt="content"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Amar</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                Exploring the dazzling metropolis of Dubai was a dream come
                true, and <b>Mehar Hospitality Services </b> made it even
                better. Their membership program provided access to a luxurious
                hotel in the heart of the action. From the breathtaking views
                from my room to the exceptional service, the hotel stay was
                outstanding. Mehar's recommendations for local experiences were
                fantastic! I visited the iconic Burj Khalifa, explored the
                bustling souks, and even embarked on a thrilling desert safari.
                My Dubai trip was a perfect blend of luxury, adventure, and
                cultural immersion. I highly recommend them to anyone planning a
                trip to this unforgettable city.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4" className="mb-5 mb-md-0 d-flex align-items-stretch">
          <MDBCard className="testimonial-card">
            <div
              className="card-up"
              style={{ backgroundColor: "#6d5b98" }}
            ></div>
            <div className="avatar mx-auto bg-white">
              <img
                src={geetika2}
                className="rounded-circle img-fluid"
                style={{ width: "80%", marginTop: "50px" }}
                alt="content"
              />
            </div>
            <MDBCardBody>
              <h4 className="mb-4">Geetika</h4>
              <hr />
              <p className="dark-grey-text mt-4">
                <MDBIcon fas icon="quote-left" className="pe-2" />
                I was initially
                skeptical about membership programs, but{" "}
                <b> Mehar Hospitality Services </b> impressed me. They offered
                incredible deals on premium hotels across Rajasthan. Thanks to
                their membership, we stayed in magnificent palaces and charming
                boutique hotels at a fraction of the usual cost. The best part?
                The hotels were all outstanding! We'll definitely be using Mehar
                again for our next Indian getaway.
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
