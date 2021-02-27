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
        const styles = { width: "20rem", background: "#F2F1F9", border: "1px", padding: "0.5rem", alignItems: 'center' }
        const { onChange, onSubmit, placeholder, value } = this.props;
        return (
            <form onSubmit={this.handleSubmit} style={{ alignItems: 'center', }}>
                <label>
                    <input
                        type="text"
                        placeholder={placeholder}
                        style={styles}
                        value={value}
                        onChange={(event) => this.handleChange(event)}
                        handleSubmit={(event) => this.handleSubmit(event)}
                    />
                </label>
                <input type="submit" value="Submit" />
            </form >
        );
    }
}
export default SearchBoxClass