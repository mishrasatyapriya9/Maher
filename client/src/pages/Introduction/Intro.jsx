import "./Intro.css";
// import React from "react";
// import {
//   MDBContainer,
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBIcon,
// } from "mdb-react-ui-kit";

// const Intro = () => {
//   return (
//     <MDBContainer className="py-5">
//       <MDBCard className="text-center">
//         <MDBCardBody>
//           <MDBIcon fas icon="hotel" size="3x" className="mb-4 text-primary" />
//           <MDBCardTitle className="display-4 mb-3">
//             WELCOME TO MEHAR HOSPITALITY SERVICES
//           </MDBCardTitle>
//           <MDBCardText className="lead mb-4">
//             Driving Recurring, Reliable Revenue for The Hotel
//           </MDBCardText>
//           <MDBCardText>
//             The B2B-Hospitality is a marketing company which provides sales &
//             marketing support to partner Hotels in India. We work together with
//             the partner hotel to provide revenue maximization solutions through
//             loyalty program, FIT’s, Groups, Corporate bookings, etc.. to enhance
//             the F&B, rooms and banquet revenue. We provide world class thoughts
//             and actions, and focus on organizational goals and strategies for
//             short, medium and long-term profitability. We specialize in creating
//             brand awareness, customer acquisition, customer retention and help
//             profitable customer relationship growth for our clients.
//           </MDBCardText>
//           <MDBCardText>
//             Our new initiative is where we design, develop, operate and market
//             needs specifically for Food & Beverages and Rooms revenue
//             maximization programs exclusively for top-end hospitality
//             organizations.
//           </MDBCardText>
//         </MDBCardBody>
//       </MDBCard>
//     </MDBContainer>
//   );
// };
import React from "react";
import styled from "styled-components";
import {
  MDBContainer,
  MDBCardTitle,
  MDBCardText,
  MDBIcon,
} from "mdb-react-ui-kit";
import { motion } from "framer-motion";

const Container = styled(MDBContainer)`
  padding: 5rem 0;
  background: linear-gradient(to right, #ffecd2, #fcb69f);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled(motion.div)`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  max-width: 800px;
  text-align: center;
`;

const CardTitle = styled(MDBCardTitle)`
  font-size: 2.5rem;
  color: #333;
`;

const CardText = styled(MDBCardText)`
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled(motion.div)`
  display: inline-block;
  margin-bottom: 1.5rem;
  color: #007bff;
`;

const Introduction = () => {
  return (
    <Container>
      <Card
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <IconWrapper
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <MDBIcon fas icon="hotel" size="3x" />
        </IconWrapper>
        <CardTitle>Mehar Hospitality Services</CardTitle>
        <CardText>Unlock a World of Travel Privileges</CardText>
        <CardText>
          Unforgettable stays at premium hotels, exclusive member benefits, and
          curated travel experience - all at your fingertips.
        </CardText>
        <CardText>
          We are a passionate team of travel enthusiasts with a deep love for
          India's rich tapestry of cultures, landscapes, and experiences. Our
          mission is to make premium travel in India accessible and rewarding
          for everyone. We believe that discovering the magic of India shouldn't
          come at a premium cost. Through our carefully curated exclusive
          membership programs, we unlock a world of travel privileges that
          combine exceptional value with unforgettable experiences.
        </CardText>
      </Card>
    </Container>
  );
};

export default Introduction;
