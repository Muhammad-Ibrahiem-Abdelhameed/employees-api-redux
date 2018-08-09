import React from 'react';
import Employee from './Employee';
import {connect} from "react-redux";
import './TableEmployees.css';

const TableEmployees = () => (
    <div className="container Table-container rounded border-warning shadow bg-white rounded  pt-1">
        <div className="row p-0">
            <div className="col-12 m-0">
                <div style={{backgroundColor:'#e9ecef'}}>
                    <h3 className="text-danger border-dark pt-2 pb-2 m-0">Employees</h3>
                </div>
                <table className="table table-responsive table-hover table-condensed table-striped position-relative p-2">
                    <thead className="bg-warning text-dark">
                    <tr>
                        <th><div className="badge badge-primary">Id</div></th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Password</th>
                        <th>Mobile</th>
                        <th>Tel</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody id="tablebody">
                        <Employee/>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);

export default connect()(TableEmployees);