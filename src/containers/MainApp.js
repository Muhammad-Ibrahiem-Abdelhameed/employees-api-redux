import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import CreateEmployee from "./CreateEmployee/CreateEmployee";
import TableEmployees from "../components/TableEmployees/TableEmployees";
import Navbar from "./Navbar/Navbar";
import EditEmployee from "./EditEmployee/EditEmployee";
import Auth from "./Auth/Auth";

class MainApp extends Component {


    render() {
        let routesAllowed = (this.props.isAuth === true ?
            <Switch>
                <Route exact path="/" component={TableEmployees}/>
                <Route path="/create-employee" component={CreateEmployee}/>
                <Route path="/edit-employee/:id" component={EditEmployee}/>
                <Route path="/auth" component={Auth}/>
                <Redirect to="/"/>
            </Switch>
            : <Switch>
                <Route path="/auth" component={Auth}/>
                <Redirect to="/auth"/>
            </Switch>);

        return (
            <div className={"App"}>
                <Navbar/>
                <div className="App-container">
                    {routesAllowed}
                </div>
                <br/>
            </div>

        );
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.token !== null
});

export default withRouter(connect(mapStateToProps)(MainApp));
