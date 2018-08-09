import React from 'react';
//import './CreateElements.css';

const elementsArray = [
    { spanClass : 'star', type : 'text', id:'id', placeholder: 'Id'},
    { spanClass : 'user-alt', type : 'text', id:'name', placeholder: 'Name'},
    { spanClass : 'user', type : 'text', id:'userName', placeholder: 'User Name'},
    { spanClass : 'lock', type : 'password', id:'password', placeholder: 'Password'},
    { spanClass : 'phone', type : 'text', id:'telephone', placeholder: 'Telephone'},
    { spanClass : 'mobile-alt', type : 'text', id:'mobile', placeholder: 'Mobile'},
    { spanClass : 'home', type : 'text', id:'address', placeholder: 'Address'},
];

const EditElements = props =>  elementsArray.map( (value, index) => (
    <div className="form-group row" key={index}>
        <label htmlFor={value.id} className="font-weight-bold col-md-3 col-3 col-form-label">
            {value.placeholder}{value.id==='id'?'*':''}
        </label>
        <div className="input-group col-9 col-md-9">
            <div className="input-group-prepend">
                <div className="input-group-text"><i className={"text-primary fas fa-"+value.spanClass}/></div>
            </div>
            <input type={value.type} className="form-control"
                   id={value.id}
                   placeholder={value.id === 'id'? props.empId : value.placeholder }
                   disabled={value.id === 'id'}
            />

        </div>
    </div>)

);


export default EditElements;