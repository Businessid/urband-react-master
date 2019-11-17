
import React, { Component } from 'react'
import ModalVideo from '../../VideoModal/video-modal.component';
import './style.css'
import { connect } from "react-redux";
import * as actionCreators from "../../../../src/store/actions/";
class previousShowHome extends Component{
	
	componentDidMount() {
		this.props.previousshow();
	
	  }
    render(){
		console.log("tttttttokkkkkkkkkkkkkkkkkt", this.props);
		
        return (
        
            <section className="show-archive">
			<div className="container">
				<div className="d-flex justify-content-center row">
					<div className="col-xl-10">
						<div className="section-title style-five">
							<h2>PREVIOUS SHOWS</h2>
							<p>There are many variations of passages of Lorem Ipsum available but the majority.</p>
						</div>
						<div className="show-archive-wrapper row no-gutters">
							<div className="offset-xs-0 offset-sm-4 col-sm-4 col-6">
								<div className="single-show-archive">
									<img src= {require('../../../media/album/18.jpg')} alt=""/>
									<a href="index.html#"><i className="fa fa-link" aria-hidden="true"></i>
							</a>
								</div>
							</div>
							<div className="col-6 col-sm-4">
								<div className="single-show-archive">
									<img src={require('../../../media/album/19.jpg')} alt=""/>
									<a href="index.html#"><i className="fa fa-link" aria-hidden="true"></i>
							</a>
								</div>
							</div>
							<div className="col-xs-12 col-sm-8">
								<div className="single-show-archive video-archive">
									<img src={require('../../../media/album/20.jpg')} alt=""/>
									<div className="video-player">
										
										<div className="text">
											<p>Show Stoppers Time</p>
											<span>(Live in Tokyo, 2017)</span>
										</div>

									</div>
								</div>
							</div>
							{/* <div className="col-12 col-sm-4">
								<div className="single-show-archive">
									<img src="media/album/21.jpg" alt=""/>
									<a href="index.html#"><i className="fa fa-link" aria-hidden="true"></i>
									</a>
								</div>
							</div> */}
						</div>
						
					</div>
					
				</div>
				
			</div>
			<ModalVideo/> 
	</section>
        );
    }
}




const mapDispatchToProps = dispatch => {
	// call action functions
	return {
		previousshow: () => dispatch(actionCreators.previousshow())
	};
  };
  
  const mapStateToProps = state => {
	return {
	  previousshow: state.previousshow.items
	};
  };
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(previousShowHome);
  



