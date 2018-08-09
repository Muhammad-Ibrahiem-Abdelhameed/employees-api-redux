import React , { Component} from 'react';
import {connect} from "react-redux";
import {deleteEmployee, fetchEmployees} from "../../store/actions/api-actions";
import { Link } from 'react-router-dom';

class Employee extends Component {

    componentDidMount(){
        this.props.fetchEmployees();
    }

    render() {
        return (
            this.props.employees.map( (emp, index) =>
                (<tr key={index}>
                    <td><div className="badge badge-primary">{emp.id}</div></td>
                    <td>{emp.name}</td>
                    <td>{emp.userName}</td>
                    <td>{emp.password}</td>
                    <td>{emp.mobile}</td>
                    <td>{emp.telephone}</td>
                    <td>{emp.address}</td>

                    <td>
                        <Link to={{pathname:`/edit-employee/${emp.id}`}}>
                            <button className="btn btn-primary btn-table btn-sm mr-1">
                                <i className={"fas fa-pen fa-sm"}/>
                            </button>
                        </Link>


                        <button className="btn btn-danger btn-table btn-sm ml-1"
                                onClick={() => {this.props.deleteEmployee(emp.id);
                                    console.log(this.props.resDelete)}}>
                            <i className={"fas fa-trash fa-sm"}/>
                        </button>
                    </td>
                </tr>)
            )
        );
    }

}

const mapStateToProps = state => ({
    employees: state.api.employees,
    resDelete : state.api.message,
});

const mapDispatchToProps = dispatch => ({
    deleteEmployee: id => dispatch(deleteEmployee(id)),
    fetchEmployees : () => dispatch(fetchEmployees()),
});


export default connect(mapStateToProps , mapDispatchToProps)(Employee);