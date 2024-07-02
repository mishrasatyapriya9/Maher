// About.js

import React from "react";
import styled from "styled-components";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";
import Header from "../components/Layout/Header copy";
import Footer from "../components/Layout/Footer copy";
import leftphoto from "../assets/aboutusph/5060585_2668382 (1).jpg";

const AboutSection = styled.section`
  background-color: #f5f5f5;
  padding: 60px 0;
`;

const JoinSection = styled.section`
  background-color: #800020;
  color: white;
  padding: 60px 0;
  text-align: center;
  border-radius:5%;
`;

const Title = styled.h2`
  color: black;
  font-size: 2.8rem;
  margin-bottom: 40px;
  text-align: center;
  font-weight: bold;
`;

const SubTitle = styled.h3`
  color: #e76f51;
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #264653;
`;

const JoinTitle = styled.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const JoinText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 0 auto 20px auto;
`;

// const Terms = styled.div`
//   background-color: #264653;
//   color: #ffffff;
//   padding: 30px;
//   margin-top: 40px;
//   border-radius: 10px;
//   text-align: center;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;

const About = ({ scrollToComponent }) => {
  return (
    <div>
      <Header scrollToComponent={scrollToComponent} />
      <AboutSection>
        <MDBContainer>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>About Us</Title>
            <MDBRow>
              <MDBCol md="6">
                <motion.img
                  src={leftphoto}
                  alt="Hospitality Service"
                  style={{
                    width: "100%",
                    borderRadius: "15px",
                    marginBottom: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </MDBCol>
              <MDBCol md="6">
                <MDBCard style={{ backgroundColor: "#ffffff", border: "none" ,borderRadius:"5%"}}>
                  <MDBCardBody>
                    <MDBCardTitle
                      className="text-center"
                      style={{ color: "#e76f51", fontSize: "2rem" ,paddingLeft:"0%" ,marginLeft:"0%" ,fontWeight:"bold" }}
                    >
                      Mehar Hospitality Services
                    </MDBCardTitle>
                    <MDBCardText style={{ color: "#264653", fontSize: "16px" }}>
                      Where Your Journey to Incredible India Begins.
                      <br />
                      <br />
                      Mehar Hospitality Services isn't just about finding you a
                      hotel room; it's about crafting unforgettable travel
                      memories. We are a passionate team of travel enthusiasts
                      with a deep love for India's rich tapestry of cultures,
                      landscapes, and experiences.
                    </MDBCardText>
                    <SubTitle>Our Mission</SubTitle>
                    <Text>
                      Our mission is to make premium travel in India accessible
                      and rewarding for everyone. We believe that discovering
                      the magic of India shouldn't come at a premium cost.
                      Through our carefully curated exclusive membership
                      programs, we unlock a world of travel privileges that
                      combine exceptional value with unforgettable experiences.
                    </Text>
                    <SubTitle>Our Vision</SubTitle>
                    <Text>
                      Providing the best possible value for your travel
                      investment. With significant savings and exclusive member
                      benefits, Mehar Hospitality Services ensures you get the
                      most out of your Indian adventure.
                    </Text>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
            {/* <Terms>
              <p
                className="termshead"
                style={{ color: "#e76f51", fontSize: "20px" }}
              >
                Terms and Conditions
              </p>
              <Text style={{ color: "white" }}>
                No refund and No Cancellation policy, blackout dates are
                applicable.
              </Text>
            </Terms> */}
          </motion.div>
        </MDBContainer>
      </AboutSection>
      <JoinSection>
        <MDBContainer>
          <JoinTitle>Join the Family</JoinTitle>
          <JoinText>
            Become a member of Mehar Hospitality Services and embark on a
            journey to discover the true essence of India. We're more than just
            a membership program; we're your trusted travel partner, ensuring
            every step of your Indian adventure is exceptional.
          </JoinText>
        </MDBContainer>
      </JoinSection>
      <Footer />
    </div>
  );
};

export default About;
