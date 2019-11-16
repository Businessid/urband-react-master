import React, { Component } from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import SiteMapLogo from "../../../assets/img/set_from_map.png";
library.add(faArrowLeft);

class storeCheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formActiveOrNot: true,
      first_name: "",
      errfirstname: "",
      last_name: "",
      errlastname: "",
      location: "",
      errlocation: "",
      city: "",
      errcity: "",
      appartment: "",
      errappartment: "",
      address: "",
      erraddress: "",
      landphone: "",
      mobile: "",
      errmobile: "",

    };
    this.ShowFormHadler = this.ShowFormHadler.bind(this);
    this.GobackToAddressHandler = this.GobackToAddressHandler.bind(this);
  }

  componentDidMount() {
    this.props.getfromcart();
    this.props.getaddress();
    var getaddress = this.props.address;
    if (!getaddress.length) {
      this.setState({
        formActiveOrNot: false
      });
    }

  }


  addaddress = (value) => {
    console.log("stateeeeeeee", this.state.location, value.target.value);

    const { first_name, last_name, location, city, appartment, address, mobile } = this.state;
    let flag = 0;
    if (first_name.length < 1) {
      flag = 1;
      this.setState({
        errfirstname: 'Please enter First name'
      })
    }
    if (last_name.length < 1) {
      flag = 1;
      this.setState({
        errlastname: 'Please enter last name'
      })
    }
    if (location.length < 1) {
      flag = 1;
      this.setState({
        errlocation: 'Please enter location name'
      })
    }
    if (city.length < 1) {
      flag = 1;
      this.setState({
        errcity: 'Please enter city name'
      })
    }
    if (appartment.length < 1) {
      flag = 1;
      this.setState({
        errappartment: 'Please enter appartment details'
      })
    }
    if (address.length < 1) {
      flag = 1;
      this.setState({
        erraddress: 'Please enter address'
      })
    }
    if (mobile.length < 1) {
      flag = 1;
      this.setState({
        errmobile: 'Please enter mobile number'
      })
    }
    // if (flag == 0) {
    //   this.props.addaddress(this.state)
    //     .then(() => {
    //       this.setState({
    //         isToken: true
    //       })
    //       this.props.history.push('HomeStack');
    //     })
    //     .catch((error) => {
    //       if (error.error == 'Unauthorised') {
    //         this.setState({
    //           errpassword: 'Invalid credential check username or passsord'
    //         })
    //       }
    //     })
    // }
  }
  ShowFormHadler() {
    this.setState({
      formActiveOrNot: false
    });
  }
  GobackToAddressHandler() {
    this.setState({
      formActiveOrNot: true
    });
  }
  handleChange(state, errState, evt) {
 

    let _state = this.state
    _state[state] = evt.target.value;
    _state[errState] = '';
    this.setState({
      ..._state
    })
    console.log("evy", this.state.location);
  }
  render() {
    const image_url = "https://admin.urbandmusic.com/storage/";
    var cartItems = this.props.cartitems;

    var totalcost = 0;
    if (cartItems !== "emtey cart") {
      var cartflag = true;
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].price) {
          totalcost =
            totalcost +
            parseFloat(cartItems[i].price) * parseInt(cartItems[i].quantity);
        }
      }
    } else var cartflag = false;

    return (
      <div>
        <section className="header-padd cart-product mt-5">
          <div className="tim-container">
            <div className="store-top-head m-0">
              <Link to="/cart">
                <FontAwesomeIcon icon={faArrowLeft} className="ico" />
              </Link>
              <h2>Check Out</h2>
            </div>
            <div className="d-flex checkout-wrap mt-3">
              <div className="col-md-6 checkout-block">
                <div className="full-wrap">
                  <div className="head">SHIPPING ADDRESS</div>
                  {this.state.formActiveOrNot === true ? (
                    <div className="row mt-3">
                      <div className="col-md-6">
                        <div className="AddressBoxWrp fullWidth">
                          <div className="AddressBoxTp1 selectedBox">
                            <div className="head">
                              <img src={SiteMapLogo} alt={SiteMapLogo} />
                              <span className="ml-2">Work</span>
                            </div>
                            <div className="AddressBoxTp1Content">
                              <div>
                                <div className="ItemListingStl1">
                                  <div>Name</div>
                                  <div className="BoldTp1 RghtBoxTp1">
                                    Ijas Np
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="ItemListingStl1">
                                  <div>Address</div>
                                  <div className="RghtBoxTp1">
                                    Nechipparamban house, palippadi,pookkottur
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="ItemListingStl1">
                                  <div>Phone</div>
                                  <div className="RghtBoxTp1">
                                    +971-525995503
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="AddressBoxWrp fullWidth">
                          <div className="AddressBoxTp1">
                            <div className="head">
                              <img src={SiteMapLogo} alt={SiteMapLogo} />
                              <span className="ml-2">Work</span>
                            </div>
                            <div className="AddressBoxTp1Content">
                              <div>
                                <div className="ItemListingStl1">
                                  <div>Name</div>
                                  <div className="BoldTp1 RghtBoxTp1">
                                    Ijas Np
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="ItemListingStl1">
                                  <div>Address</div>
                                  <div className="RghtBoxTp1">
                                    Nechipparamban house, palippadi,pookkottur
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="ItemListingStl1">
                                  <div>Phone</div>
                                  <div className="RghtBoxTp1">
                                    +971-525995503
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="AddressBoxWrp fullWidth">
                          <div
                            className="AddressBoxTp1"
                            onClick={this.ShowFormHadler}
                          >
                            <div className="AddNEwButtonBox">Add New</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                      <div className="mt-4">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                value={this.state.first_name}
                                onChange={this.handleChange.bind(this, 'firstname', 'errfirstname')}
                                className="form-control field-control"
                                placeholder="First Name"
                              />
                            </div>
                          </div>
                          {this.state.errfirstname && <div class="text-danger">{this.state.errfirstname}</div>}
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                placeholder="Last Name"
                                value={this.state.last_name}
                                onChange={this.handleChange.bind(this, 'lastname', 'errlastname')}
                              />
                            </div>
                          </div>
                          {this.state.errlastname && <div class="text-danger">{this.state.errlastname}</div>}
                          <div className="col-md-6">
                            <div className="form-group">
                              <select
                                className="form-control field-control"
                                name="location"
                                title="Select Current Location"
                                value={this.state.location}
                                onChange={this.handleChange.bind(this, 'location', 'errlocation')}
                              >
                                <option value="">Select Location</option>
                                <option value="Dubai">Dubai</option>
                                <option value="Sharjah">Sharjah</option>
                                <option value="Abu Dhabi">Abu Dhabi</option>
                                <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                                <option value="Fujairah">Fujairah</option>
                                <option value="Ajman">Ajman</option>
                                <option value="Umm Al Qawain">Umm Al Qawain</option>
                                <option value="Al Ain">Al Ain</option>
                              </select>
                            </div>
                          </div>
                          {this.state.errlocation && <div class="text-danger">{this.state.errlocation}</div>}
                          <div className="col-md-6">
                            <div className="form-group">
                              <select
                                className="form-control field-control"
                                name="city"
                                title="Select Current Location"
                                value={this.state.city}
                                onChange={this.handleChange.bind(this, 'city', 'errcity')}
                              >
                                <option value="">Select City</option>
                                <option value="54903">City centre</option>
                                <option value="181636102">Al Barsha Dubai</option>
                              </select>
                            </div>
                          </div>
                          {this.state.errcity && <div class="text-danger">{this.state.errcity}</div>}
                          <div className="col-md-12">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Apartment, villa no, etc."
                                value={this.state.appartment}
                                onChange={this.handleChange.bind(this, 'appartment', 'errappartment')}
                              />
                            </div>
                          </div>
                          {this.state.errappartment && <div class="text-danger">{this.state.errappartment}</div>}
                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className="form-control field-control"
                                type="text"
                                name="description[]"
                                placeholder="Address"
                                value={this.state.address}
                                onChange={this.handleChange.bind(this, 'address', 'erraddress')}
                                rows="3"
                              ></textarea>
                            </div>
                          </div>
                          {this.state.erraddress && <div class="text-danger">{this.state.erraddress}</div>}
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Landline Number"
                                value={this.state.landphone}
                                onChange={this.handleChange.bind(this, 'landphone')}
                              />
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control field-control"
                                name=""
                                placeholder="Mobile Number"
                                value={this.state.mobile}
                                onChange={this.handleChange.bind(this, 'mobile', 'errmobile')}
                              />
                            </div>
                          </div>
                          {this.state.errmobile && <div class="text-danger">{this.state.errmobile}</div>}
                        </div>
                        <button
                          type="btn"
                          className="tim-btn mt-4 ticket-btn-lg place-order CancelBtnTp1"
                          onClick={this.GobackToAddressHandler}
                        >
                          Cancel
                      </button>
                        <button
                          type="submit"
                          className="tim-btn mt-4 ticket-btn-lg place-order"
                          onClick={this.addaddress}>
                          Save
                      </button>
                      </div>
                    )}
                </div>
                {this.state.formActiveOrNot === true ? (
                  <div className="full-wrap mt-5">
                    <div className="head">SELECT A PAYMENT METHOD</div>
                    <div className="full-wrap mt-4">
                      <div className="payment-method">
                        <div className="payment-header d-flex align-items-center">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="Paypal"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="Paypal"
                            >
                              PayPal
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="payment-method">
                        <div className="payment-header d-flex align-items-center">
                          <div className="custom-control custom-radio">
                            <input
                              type="radio"
                              id="COD"
                              name="customRadio"
                              className="custom-control-input"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="COD"
                            >
                              Cash on delivery
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="tim-btn mt-4 ticket-btn-lg place-order"
                    >
                      Place Order
                    </button>
                  </div>
                ) : (
                    ""
                  )}
              </div>

              <div className="col-md-5 checkout-block checkout-list-wrap">
                <div className="head">ORDER SUMMARY</div>

                <div className="ticket-box checkout-list mt-4">
                  <ul>
                    {cartflag &&
                      cartItems.map(item => {
                        return (
                          <li key={item.id}>
                            <div className="order-box-wrap">
                              <Link to="" className="img-box">
                                <img
                                  src={image_url + item.files[0].image}
                                  alt="album thumb"
                                />
                              </Link>
                              <div className="right justify-content-between">
                                <div className="sections">
                                  <div className="title">{item.title}</div>
                                  <div className="quantity">
                                    QTY: <span>{item.quantity}</span>
                                  </div>
                                </div>
                                <div className="sections">
                                  <div className="price">{item.price} AED</div>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                  <div className="full-wrap checkout-block mt-4">
                    <div className="total-block mt-4 text-right">
                      <span className="mb-1">Total (Incl. of Vat)</span>
                      {totalcost} AED
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  // call action functions
  return {
    getfromcart: () => dispatch(actionCreators.getfromcart()),
    getaddress: () => dispatch(actionCreators.getaddress())
  };
};

const mapStateToProps = state => {
  return {
    cartitems: state.cartitems.items,
    address: state.getaddress.address
    // in this state list is array name as stored  API  from defined in eventListReducer
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(storeCheckOut);
