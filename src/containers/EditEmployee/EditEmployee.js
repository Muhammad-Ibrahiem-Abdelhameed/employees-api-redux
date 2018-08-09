import React, {Component} from 'react';
import EditElements from "../../components/EditEmployee/EditElements";
import {connect} from "react-redux";
import {editEmployee} from "../../store/actions/api-actions";

class EditEmployee extends Component {



    componentWillReceiveProps(nextProps){
        if (nextProps.message !== ''){
            document.getElementById('divResponse').innerHTML =
                nextProps.message === "Edit Success" ?
                    `<div class="alert alert-success">${nextProps.message}</div>`
                    : `<div class="alert alert-danger">${nextProps.message}</div>`;
            if (nextProps.message === "Edit Success"){
                this.handleOnRest();
            }
        }

    }

    handleOnRest = () => {
        document.getElementById('editForm').reset();
        setTimeout(()=>{
            this.props.history.push({pathname:'/'});
        }, 2000);

    };

    handleOnSubmit = e => {
        e.preventDefault();
        let isValid = true;
        let item = id => document.getElementById(id).value.trim();
        let employee = {
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

        if (isValid === true) {
            this.props.updateEmployee( this.props.match.params.id, employee);
        }
        
    };

    render() {
        return (
            <div className="container rounded border-warning shadow bg-white rounded
                            pt-1 col-lg-6 co-md-9 col-12">
                <div className="border-dark border-0 mt-2 text-primary" style={{backgroundColor:'#e9ecef'}}>
                    <h3 className="pt-2 pb-2">Edit Employee</h3>
                </div>
                <form id="editForm"
                      className="form pb-2" autoComplete="on"
                      onSubmit={e => { this.handleOnSubmit(e); }} >

                    <div className="div-form">
                        <br/>

                        <EditElements empId={this.props.match.params.id} />

                        <div id="divResponse">

                        </div>

                        <input type="submit" value="Edit"
                               className="btn btn-block btn-primary mt-4 mb-0"/>
                    </div>
                </form>
            </div>

        );
    }
}

const mapSateToProps = state => ({
    message: state.api.message,

});

const mapDispatchToProps = dispatch => ({
    updateEmployee : (id, employee) => dispatch(editEmployee( id, employee)),

});


export default connect(mapSateToProps, mapDispatchToProps)(EditEmployee);