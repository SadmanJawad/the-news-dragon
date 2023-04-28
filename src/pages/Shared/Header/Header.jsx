import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button, Container} from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {

  return (
    <Container>
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger fs-5" speed={100}>
        Summit signs $2b MoU with Japan's Jera.....Real Madrid's Modric a doubt for Copa del Rey final.....Ten Hag says some United players did not give 100% against Spurs.....Sooraj Pancholi acquitted from Jiah Khan suicide case....How cooking for myself changed my life....
        </Marquee>
      </div>
     
    </Container>
  );
};

export default Header;
