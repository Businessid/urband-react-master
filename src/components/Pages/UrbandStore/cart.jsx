import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BannerHero from "../../Banners/bannerHero";

library.add(faTimes, faArrowLeft);

class cart extends Component {
  render() {
    return (
      <div>
        <section className="header-padd cart-product mt-5">
          <div className="tim-container">
            <div className="store-top-head m-0">
              <Link to="/cart">
                <FontAwesomeIcon icon={faArrowLeft} className="ico" />
              </Link>
              <h2>Cart</h2>
            </div>
            <div className="row cart-item">
              <div className="col-sm-6 d-flex">
                <div className="cart-image">
                  <Link to="">
                    {" "}
                    <img
                      src={require("../../../media/gallery/shop.jpg")}
                      alt="album thumb"
                      className="fit-it"
                    />
                  </Link>
                </div>
                <div className="cart-description">
                  <h2>Guns N Roses</h2>
                  <div className="style-fullwidth">
                    <div className="short-desc">Size: S</div>
                    <div className="short-desc">Color: Black</div>
                    <div className="short-desc">Qunatity: 1</div>
                    <div className="short-desc">Price: AED 230</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 d-flex price-name-line">
                <div className="product-price">
                  <span>AED 230</span>
                </div>
              </div>
              <div className="col-sm-2 d-flex price-name-line">
                <div className="quantity-input">
                  <button className="quantity-input__modifier quantity-input__modifier--left">
                    —
                  </button>
                  <input
                    type="text"
                    className="quantity-input__screen"
                    value="0"
                    defaultValue="0"
                    onChange={this.handleChange}
                  />
                  <button className="quantity-input__modifier quantity-input__modifier--right">
                    ＋
                  </button>
                </div>
              </div>

              <div class="col-sm-2 d-flex price-name-line delet-line">
                <FontAwesomeIcon icon={faTimes} className="remove" />
              </div>
            </div>

            <div className="row cart-item">
              <div className="col-sm-6 d-flex">
                <div className="cart-image">
                  <Link to="/">
                    <img
                      src={require("../../../media/gallery/shop2.png")}
                      alt="album thumb"
                      className="fit-it"
                    />
                  </Link>
                </div>
                <div className="cart-description">
                  <h2>Guns N Roses</h2>
                  <div className="style-fullwidth">
                    <div className="short-desc">Size: S</div>
                    <div className="short-desc">Color: Black</div>
                    <div className="short-desc">Qunatity: 2</div>
                    <div className="short-desc">Price: AED 100</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-2 d-flex price-name-line">
                <div className="product-price">
                  {/* <i>Total</i> */}
                  <span>AED 200</span>
                </div>
              </div>
              <div className="col-sm-2 d-flex price-name-line">
                <div className="quantity-input">
                  <button className="quantity-input__modifier quantity-input__modifier--left">
                    —
                  </button>
                  <input
                    type="text"
                    className="quantity-input__screen"
                    value="0"
                    defaultValue="0"
                    onChange={this.handleChange}
                  />
                  <button className="quantity-input__modifier quantity-input__modifier--right">
                    ＋
                  </button>
                </div>
              </div>

              <div className="col-sm-2 d-flex price-name-line delet-line">
                <FontAwesomeIcon icon={faTimes} className="remove" />
              </div>
            </div>

            <div className="cart-total right-push">
              {/* <div className="goback">
                <Link to="">
                  <FontAwesomeIcon icon={faArrowLeft} className="ico" />
                  Continue Shopping
                </Link>
              </div> */}
              <div className="d-flex price align-items-center">
                Total<span className="ml-2 mr-4">430 AED</span>
                <Link
                  to="/checkout"
                  className="checkout-btn-big bg-red-hover tim-btn"
                >
                  check out
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default cart;
