import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Link } from "react-router-dom";
class sliderHero extends React.Component {
  state = {
    backgroundImage: []
  };
  componentDidMount() {
    this.props.fetchHomeBanner("Home");
  }

  render() {
    const image_url = "http://happiness-spinner.com/storage/";
    const getbanner = this.props.homebanners;
    if (getbanner) {
      var total = getbanner.length;
    }
    const ticketFlag = localStorage.getItem('ticketheader');
    return (
      <div className="heroCarouselBox ani-slideInDown">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={45}
          totalSlides={total}
          orientation="horizontal"
          playDirection="forward"
          touchEnabled={true}
          isPlaying={true}
          interval={7000}
          infinite={true}
        >
          <Slider>
            {getbanner &&
              getbanner.map(item => {
                return (
                  <Slide index={0} key={item.id}>
                    <section
                      className="banner-five"
                      style={{
                        backgroundImage: `url(${image_url + item.image})`
                      }}
                    >
                      <div className="tim-container">
                        <div className="baneer-five-content">
                          <div className="content sp-container">
                            <div className="sp-content">
                              <div className="sp-globe"></div>
                              <h2 className="frame-1">{item.title}</h2>
                              <h2 className="frame-2">{item.title}</h2>
                              <h2 className="frame-3">{item.title}</h2>
                              <h2 className="frame-4">{item.title}</h2>
                            </div>
                            <h3>{item.sub_title}</h3>
                            {ticketFlag === true ? (<Link
                              to={{
                                pathname: `/event-tickets`
                              }}
                              className="tim-slide-btn"
                            >
                              TICKETS
                            </Link>) : ""}

                            {/* <a className="tim-slide-btn" href="event-tickets#">
                              
                            </a> */}
                          </div>
                        </div>
                      </div>

                      <div className="smoke-wrqpper">
                        <canvas id="canvas"></canvas>
                      </div>
                    </section>
                  </Slide>
                );
              })}
          </Slider>
        </CarouselProvider>
      </div>
    );

    // return (

    // );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchHomeBanner: id => dispatch(actionCreators.fetchHomeBanner(id))
  };
};

const mapStateToProps = state => {
  return {
    homebanners: state.homebanner.items
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sliderHero);
