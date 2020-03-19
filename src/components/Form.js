import React, { Component } from 'react';

const Form = props => {
    return (
        <form onSubmit={props.getWeather} className="user-form">
            <div className="form-group d-flex">
                <input type="text" className="form-control" name="city" placeholder="City/State/Country..." required/>
                <button type="submit" className="btn btn-dark ml-2">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </form>
    )
}

export default Form;