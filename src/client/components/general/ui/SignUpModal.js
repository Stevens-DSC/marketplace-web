import { Modal } from '@chakra-ui/core';
import React from 'react';
import ReactModal from 'react-modal';

class SignUpModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            value: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.props.onSubmit()
        alert('You searched: ' + this.state.value);
        event.preventDefault();
    }

    showModal() {
        this.setState({ show: !this.state.show })
    }
    onChangeFunction() {
        this.setState({ value: this.props.value })
        this.showModal()
    }
    render() {
        return (
            <div>
                <ReactModal
                    style={{ height: 600, width: 600 }}
                    isOpen={this.state.show}>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtitle}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label>
                            Username
                        <input
                                type='text'
                                value=""
                            ></input>
                        </label>
                        <label>
                            Password
                        <input
                                type='password'
                            ></input>
                        </label>
                    </div>
                    <button onClick={() => this.showModal()}>Submit</button>
                </ReactModal>
                <button onClick={() => this.showModal()}>Signup/Login</button>
            </div>
        );
    }

}

export default SignUpModal;