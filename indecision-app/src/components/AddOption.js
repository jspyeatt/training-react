import React from 'react';

// This class uses the new transform-classes syntax introduced
// with the new plugin for es6. No longer need to do the .bind(this);
export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    handleAddOptionInside = (evt) => {
        evt.preventDefault();
        const val = evt.target.elements.newOption.value;
        const error = this.props.handleAddOption(val);

        this.setState(() => ({ error: error }));
        evt.target.elements.newOption.value = '';
    };
    render() {
        return (
            <div>
                {this.state.error && <p>You had an error {this.state.error}</p>}
                <form onSubmit={this.handleAddOptionInside}>
                    <input type="text" name="newOption" />
                    <button className="button">Add Option</button>
                </form>
            </div>
        )
    }
}