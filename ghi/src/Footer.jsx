import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Mission</FooterLink>
            <FooterLink href="/go-food-me/how-it-works">How it Works</FooterLink>
            {/* <FooterLink href="#">Testimonials</FooterLink> */}
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Fundraiser</FooterLink>
            {/* <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink> */}
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="https://www.linkedin.com/in/nick-wagemann/">Nick Wagemann</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/huang-gordon/">Gordon Huang</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/jeremiah-dyck-922097229/">Jeremiah Dyck</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/hjlyuan/">Howard Vidal-Yuan</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/cameron-webbe-520777205/">Cameron Webbe</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="https://www.facebook.com/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://twitter.com/?lang=en">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.youtube.com/">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;