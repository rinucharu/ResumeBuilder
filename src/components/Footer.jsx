import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="py-5 bg-primary">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Resume Builder</h2>
            <hr />
            <p>
              "We are dedicated to helping individuals create professional,
              polished, and impactful resumes with ease. Our resume builder is
              designed to simplify the process, offering user-friendly tools,
              modern templates, and expert guidance to highlight your skills and
              achievements effectively. Whether you are a student, fresher, or
              experienced professional, we aim to empower you to stand out in
              today’s competitive job market."
            </p>
          </div>

          <div className="col mx-5">
            <h2>Quick links</h2>
            <hr />
            <ul className="">
              <li>
                <Link
                  to="/"
                  className="text-white mt-3"
                  style={{ textDecoration: "none" }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white mt-3"
                  style={{ textDecoration: "none" }}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/form"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Form
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white"
                  style={{ textDecoration: "none" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col">
            <h2>Contact Us</h2>
            <hr />
          <h5><FaPhone /> : 987654321</h5>
            <h5><MdEmail />: rBuilder@gmail.com</h5>

          </div>


          <div className="col">
            <h2>follow us</h2>
            <hr />
            <div className="icons">
              <ul>
                <li>
                  <Link
                    className="fs-2 text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <FaFacebookF />
                  </Link>
                </li>
                <li>
                  <Link
                    className="fs-2 text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    {" "}
                    <FaWhatsapp />
                  </Link>
                </li>
                <li>
                  <Link className="fs-2 text-white" style={{}}>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link
                    className="fs-2 text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <FaYoutube />
                  </Link>
                </li>
                <li>
                  <Link
                    className="fs-2 text-white"
                    style={{
                      textDecoration: "none",
                    }}
                  >
                    <FaTwitter />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />

        <div className="copyright">
          <p className="text-center">Copyright &copy; 2025 By Charu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
