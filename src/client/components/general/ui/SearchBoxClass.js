import React from 'react';
// import { form, label, input } from 'React'

class SearchBoxClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

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

    render() {
        const styles = {
            height: "70px",
            background: "#FFFFFF",
            border: "3px solid #E26944",
            padding: "0.5rem",
            alignItems: 'center',
            fontsize: "24px",
            boxSizing: "border-box"
        }

        const { onChange, onSubmit, placeholder, value } = this.props;
        return (
            <form onSubmit={this.handleSubmit} style={{ alignItems: 'center'}}>
                <label>
                    <input
                        type="text"
                        placeholder={placeholder}
                        style={Object.assign({},styles, {marginRight:"12px", borderRadius: "35px", width: "40rem"})}
                        value={value}
                        onChange={(event) => this.handleChange(event)}
                        handleSubmit={(event) => this.handleSubmit(event)}
                    />
                </label>
                <input type="submit" value="Go!" style={Object.assign({},styles, {borderRadius: "32px", width: "80px"})} />
            </form >
        );
    }
}
export default SearchBoxClass