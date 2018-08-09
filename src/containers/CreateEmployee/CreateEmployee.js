import React, { Component } from 'react';
import {createEmployee} from "../../store/actions/api-actions";
import CreateElements from "../../components/CreateEmployee/CreateElements";
import {connect} from "react-redux";
import './CreateEmployee.css';

class CreateEmployee extends Component {

    componentWillReceiveProps(nextProps){
        if ( nextProps.message !== ''){
            document.getElementById('divResCreate').innerHTML =
                nextProps.message === "Create Success" ?
                    `<div class="alert alert-success">${nextProps.message}</div>`
                    : `<div class="alert alert-danger">${nextProps.message}</div>`;
            if (nextProps.message === "Create Success"){
                this.handleOnRest();

            }
        }
    }

    handleOnRest = () => {
        document.getElementById('createForm').reset();
    };

    handleOnSubmit = e => {
        e.preventDefault();
        let isValid = true;
        let item = id => document.getElementById(id).value.trim();
        let employee = {
            id: item('id'),
            name: item('name'),
            userName: item('userName'),
            password: item('password'),
            address: item('address'),
            mobile: item('mobile'),
            telephone: item('telephone')
        };

        for (let key in employee) {
            if (employee[key] === "") {
                //validationArr.push(`<div class="alert-danger">Please key<div>`);
                isValid = false;
            }
        }

        if (isValid === true){
            console.log("true");
            this.props.sendEmployee(employee);
        }

    };

    render() {
        return (
            <div className="container rounded border-warning shadow bg-white rounded
                            pt-1 col-lg-6 co-md-9 col-12">
                <div className="border-dark border-0 mt-2 text-success" style={{backgroundColor:'#e9ecef'}}>
                    <h3 className="pt-2 pb-2">Create Employee</h3>
                </div>
                <form id="createForm"
                      className="form pb-2" autoComplete="on"
                      onSubmit={e => { this.handleOnSubmit(e); }}
                      >

                    <div className="div-form">
                        <br/>

                        <CreateElements/>

                        <div id="divResCreate">

                        </div>

                        <br/>
                        <input type="submit" value="Create"
                               className="btn btn-block btn-success mt-1 mb-0"/>

                    </div>
                </form>
            </div>

        );
    }
}

const mapSateToProps = state => ({
    message : state.api.message,
});

const mapDispatchToProps = dispatch => ({
    sendEmployee: employee => dispatch(createEmployee(employee)),

});

export default connect(mapSateToProps, mapDispatchToProps)(CreateEmployee);