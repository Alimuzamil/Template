import { useState } from "react";
import {
  FaGoogle,
  FaFacebookF,
  FaXTwitter,
  FaEye,
  FaRegEyeSlash,
} from "react-icons/fa6";
import moneySaving from "./../assets/moneySaving.png";
import logo from "./../assets/logo.png";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main>
      <section
        className="p-0 d-flex align-items-center position-relative overflow-hidden min-vh-100"
        style={{ background: "#fff" }}
      >
        <Container className="p-0" fluid>
          <Row className="g-0 flex-column flex-md-row min-vh-100 ">
            {/* Banner Section */}
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column align-items-center justify-content-center bg-opacity-10"
              style={{ background: "#CFE7E6", minHeight: 320 }}
            >
              <div className="w-100 px-4 pt-4 pb-2 d-flex align-items-center">
                <img
                  src={logo}
                  alt="logo"
                  style={{
                    height: 32,
                    marginRight: 8,
                    verticalAlign: "middle",
                  }}
                />
              </div>
              <div className="flex-grow-1 d-flex align-items-center justify-content-center w-100 pb-4">
                <img
                  src={moneySaving}
                  alt="Sign up illustration"
                  style={{
                    width: "90%",
                    maxWidth: 400,
                    height: "auto",
                  }}
                />
              </div>
            </Col>

            
            {/* Form Section */}
            <Col
              xs={12}
              md={6}
              className="d-flex align-items-center justify-content-center"
              style={{ background: "#fff" }}
            >
              <div
                className="w-100 px-3 px-sm-5 py-5"
                style={{ maxWidth: 550 }}
              >
                <h2
                  className="fw-bold text-center mb-4"
                  style={{ fontSize: 32 }}
                >
                  Welcome Back!
                </h2>
                <form>
                  
                  <div className="mb-3">
                    <label
                      className="form-label fw-semibold"
                      style={{ fontSize: 16 }}
                    >
                      Username or Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter Email"
                      style={{ height: 50, fontSize: 16 }}
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      className="form-label fw-semibold"
                      style={{ fontSize: 16 }}
                    >
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        className="form-control pe-5"
                        placeholder="Enter Password"
                        style={{ height: 50, fontSize: 16 }}
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="position-absolute top-50 end-0 translate-middle-y me-3"
                        style={{ cursor: "pointer" }}
                        title={showPassword ? "Hide Password" : "Show Password"}
                      >
                        {showPassword ? (
                          <FaRegEyeSlash size={18} />
                        ) : (
                          <FaEye size={18} />
                        )}
                      </span>
                    </div>
                  </div>

                  
                  <div className="form-check mb-3">
                    <input
                      type="checkbox"
                      id="terms"
                      className="form-check-input"
                    />
                    <label htmlFor="terms" className="form-check-label small">
                      Remember me{" "}
                      
                    </label>

                    <a
                      href="#"
                      className="float-end small"
                      style={{ color: "#48968F" }}
                    >
                      Forgot Password?
                    </a>

                  </div>
                  <button
                    type="submit"
                    className="btn w-100 fw-semibold mb-2"
                    style={{
                      background: "#48968F",
                      color: "#fff",
                      height: 50,
                      fontSize: 18,
                    }}
                  >
                    Sign In
                  </button>
                  <p className="text-center small mt-2 mb-3">
                    Dont have an account?{" "}
                    <Link
                      to="/signup"
                      className="fw-semibold"
                      style={{ color: "#48968F" }}
                    >
                      Sign Up
                    </Link>
                  </p>
                  <div className="d-flex align-items-center justify-content-center my-3">
                    <hr className="flex-grow-1" />
                    <span className="mx-2 text-muted small">OR</span>
                    <hr className="flex-grow-1" />
                  </div>
                  <div className="d-flex justify-content-center gap-3">
                    <button
                      type="button"
                      className="btn btn-light border rounded-circle p-2"
                    >
                      <FaGoogle size={18} style={{ color: "#48968F" }} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-light border rounded-circle p-2"
                    >
                      <FaFacebookF size={18} style={{ color: "#48968F" }} />
                    </button>
                    <button
                      type="button"
                      className="btn btn-light border rounded-circle p-2"
                    >
                      <FaXTwitter size={18} style={{ color: "#48968F" }} />
                    </button>
                  </div>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default SignUp;
