import React from "react";
import { Button, Image, ListGroup } from "react-bootstrap";
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from "../Qzone/Qzone";
import bg from "../../../assets/bg.png"
const RightNav = () => {
  return (
    <div>
      <h4>Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub></FaGithub> Login with Github
      </Button>
      <div>
        <h4>Find Us On </h4>
        <ListGroup>
          <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
          <ListGroup.Item><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
          <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
        </ListGroup>
      </div>
      <Qzone></Qzone>
      {/* <div className="position-relative">
    <img src={bg} alt="" />
    <p className="position-absolute text-center mb-1">This text will appear on the bottom of the image</p> */}

<div style={{ position: 'relative' }}>
      <Image
        src={bg}
        alt="My Image"
        fluid
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          color: 'white',
          textAlign: 'center',
          padding: '10px',
          fontWeight: '700',
          fontSize: '30px',
        }}
      >
        Create an Amazing Newspaper
        <p className="fs-6 fw-normal">
        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </p>
        <Button className="py-3 fw-bold " variant="danger">Learn More</Button>
      </div>
    </div>

    </div>
  );
};

export default RightNav;
