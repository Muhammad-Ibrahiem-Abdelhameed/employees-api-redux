import React, {Component} from 'react';
import {auth} from "../../store/actions/auth-actions";
import {connect} from "react-redux";


class Auth extends Component {



    componentWillReceiveProps(nextProps){
        if (nextProps.isAuth){
            this.props.history.push({pathname:'/'});
        }
    }

    handleOnSubmit = e => {
        e.preventDefault();
        let item = id => document.getElementById(id).value.trim();
        this.props.onAuth(item('singUpEmail') , item('signUpPass'));

    };


    render() {
        const formAuthElements = (
            <div>
                <div className="form-group row">
                    <label htmlFor={"singUpEmail"} className="font-weight-bold col-md-3 col-3 col-form-label">
                        Email*
                    </label>
                    <div className="input-group col-9 col-md-9">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className={"text-success fas fa-user"}/>
                            </div>
                        </div>
                        <input type={"email"} className="form-control position-sticky"
                               id={"singUpEmail"}
                               placeholder={"email"}
                               required={true}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor={"signUpPass"} className="font-weight-bold col-md-3 col-3 col-form-label">
                        Password*
                    </label>
                    <div className="input-group col-9 col-md-9">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className={"text-success fas fa-lock"}/>
                            </div>
                        </div>
                        <input type={"password"} className="form-control position-sticky"
                               id={"signUpPass"}
                               placeholder={"Password"}
                               required={true}
                        />
                    </div>
                </div>
            </div>
        );

        return (
            <div className="container rounded border-warning shadow bg-white rounded
                            pt-1 col-lg-5 co-md-6 col-sm-8 col-12">
                <div className="btn-group col-12" role="group">
                    <button type="button" className="btn btn-block btn-success  p-2 mt-2">Login</button>
                    <button type="button" className="btn btn-block btn-danger mt-2 p-2">Sign Up</button>
                </div>
                <div className="border-dark border-0 mt-2 text-success" style={{backgroundColor: '#e9ecef'}}>
                    <h4 className="pt-2 pb-2">Login</h4>
                </div>
                <div className="div-signUp">
                    <form onSubmit={this.handleOnSubmit} >
                        <br/>
                        {formAuthElements}
                        <div id="divResCreate">

                        </div>

                        <input type="submit" value="Login"
                               className="btn btn-block btn-success mt-4 mb-0 col-6 offset-3"/>
                        <br/>
                    </form>
                </div>
            </div>
        );
    }
}

const mapSateToProps = state => ({
    isAuth :  state.auth.token !== null
});

const mapDispatchToProps = dispatch => ({
    onAuth : (email, pass) => dispatch(auth(email, pass)),
});

export default connect(mapSateToProps, mapDispatchToProps)(Auth);

