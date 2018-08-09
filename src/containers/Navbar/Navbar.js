import React, {Component} from 'react';
import {connect} from "react-redux";
import NavbarListItems from '../../components/NavbarListItems/NavbarListItems';
import {logout} from "../../store/actions/auth-actions";

class Navbar extends Component {

    state ={
        pathname: window.location.pathname
    };

    handleLogout = () => {
        this.props.logout();
    };

    componentWillUpdate(nextProps, nextState){
        console.log(nextState, nextProps);
        return nextState.pathname !== this.state.pathname
    }


    render() {
        return (
            <nav className="navbar navbar-expand-lg  navbar-light bg-light fixed-top p-0">
                <div className="d-inline-block text-center mr-5 mt-2 mb-2">
                    <img src="./logo-v.png" width="45" height="35" style={{marginLeft: '40px', color: 'white'}}
                         className="d-inline-block align-middle  badge badge-dark mr-2" alt=""/>
                    <h4 className="btn-light d-inline text-center font-weight-bold"
                        style={{fontSize: '1rem',}}>Employee-Api</h4>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        {
                            this.props.isAuth === true ?
                            <NavbarListItems pathname={this.state.pathname}/>
                            : null
                        }
                    </ul>

                    <div className="my-2 my-lg-0">
                        {
                            this.props.isAuth === true ?
                                    <button className={"btn btn-light"}
                                            onClick={()=> this.handleLogout() }>Logout
                                    </button>
                                : null
                        }
                        &nbsp;
                    </div>
                </div>
            </nav>

        );
    }

}

const mapStateToProps = state => ({
    isAuth: state.auth.token !== null,
});

const mapDispatchToProps = dispatch => ({
    logout : () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
