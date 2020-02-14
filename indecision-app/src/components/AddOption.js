import React from 'react';

export default class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOptionInside = this.handleAddOptionInside.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOptionInside(evt) {
        evt.preventDefault();
        const val = evt.target.elements.newOption.value;
        const error = this.props.handleAddOption(val);

        this.setState(() => ({ error: error }));
        evt.target.elements.newOption.value = '';
    }
    render() {
        return (
            <div>
                {this.state.error && <p>You had an error {this.state.error}</p>}
                <form onSubmit={this.handleAddOptionInside}>
                    <input type="text" name="newOption" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}