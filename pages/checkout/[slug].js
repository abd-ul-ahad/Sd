import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Checkout() {
  const router = useRouter();
  const { slug } = router.query;
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");

  const fullNameReg = /^[a-zA-Z]/;
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const EmailValidator = () => {
    var x = document.getElementById("em_ail_");

    if (emailReg.test(email) && email !== "") {
      x.classList.remove("is-invalid");
      x.classList.add("is-valid");
    } else {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
    }
  };

  const fullNameValidator = () => {
    let nameIn = document.getElementById("_full_Name");
    if (fullNameReg.test(fullName) && fullName !== " ") {
      nameIn.classList.remove("is-invalid");
      nameIn.classList.add("is-valid");
    } else {
      nameIn.classList.remove("is-valid");
      nameIn.classList.add("is-invalid");
    }
  };

  return (
    <div className="container">
      <main>
        <div className="py-5 text-center">
          <h2 className="fw-bold">Fill Checkout form to continue</h2>
        </div>

        <div className="row g-5">
          <Cart />

          <div className="col-md-7 col-lg-8">
            <h4 className="mb-3">Billing Details</h4>
            <form className="needs-validation ">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className={`shadow-none px-2 my-2 w-100 py-2 form-control`}
                    placeholder="Name"
                    id="_full_Name"
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    onBlur={() => {
                      fullNameValidator();
                    }}
                  />
                  <div className="invalid-feedback mx-3">
                    Your Name must starts with Alphabets
                  </div>
                </div>

                <div className="col-md-6">
                  <input
                    type="email"
                    className={` px-2 my-2 w-100 py-2 form-control shadow-none`}
                    placeholder="Email"
                    id="em_ail_"
                    onBlur={() => {
                      EmailValidator();
                    }}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <div className="invalid-feedback mx-3">
                    Enter a valid Email Address
                  </div>
                </div>

                <div className="col-md-3">
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="zip"
                    placeholder="Zip Code"
                    required=""
                  />
                  <div className="invalid-feedback">Zip code required.</div>
                </div>

                <div className="col-md-12">
                  <textarea
                    type="text"
                    id="zip"
                    rows={10}
                    className="py-3 px-3 w-100 form-control shadow-none"
                    placeholder="Message (Optional)"
                  ></textarea>
                </div>
              </div>

              <hr className="my-4" />

              <h4 className="mb-3">Payment</h4>

              <div className="my-3">
                <div className="form-check">
                  <input
                    id="debit"
                    name="paymentMethod"
                    type="radio"
                    className="form-check-input"
                    required=""
                  />
                  <label className="form-check-label" htmlFor="debit">
                    Debit card
                  </label>
                </div>
              </div>

              <div className="row gy-3">
                <div className="col-md-6">
                  <label htmlFor="cc-name" className="form-label">
                    Name on card
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="cc-name"
                    placeholder=""
                    required=""
                  />
                  <small className="text-muted">
                    Full name as displayed on card
                  </small>
                  <div className="invalid-feedback">
                    Name on card is required
                  </div>
                </div>

                <div className="col-md-6">
                  <label htmlFor="cc-number" className="form-label">
                    Credit card number
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="cc-number"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Credit card number is required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-expiration" className="form-label">
                    Expiration
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="cc-expiration"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">
                    Expiration date required
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="cc-cvv" className="form-label">
                    CVV
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="cc-cvv"
                    placeholder=""
                    required=""
                  />
                  <div className="invalid-feedback">Security code required</div>
                </div>
              </div>

              <hr className="my-4" />

              <Button
                variant="contained"
                className={`materialUiButton my-4 w-100`}
              >
                Check Out
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

const Cart = () => {
  return (
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span style={{ color: "var(--logo-red)" }}>Your cart</span>
      </h4>
      <ul className="list-group mb-3">
        <li className="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 className="my-0">Product name</h6>
            <small className="text-muted">Brief description</small>
          </div>
          <span className="text-muted">$12</span>
        </li>

        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>
    </div>
  );
};
