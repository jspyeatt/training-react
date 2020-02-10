class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount() {
        console.log("componentDidMount fetching data");
        try {
            const json = localStorage.getItem('optData');
            if (json) {
                const options = JSON.parse(json);
                this.setState(() => ({
                    options: options
                }));
            }
        } catch (e) {
            console.log(e);
        }
        
    }
    componentDidUpdate(prevProps, prevState) {

        if (prevState.options.length != this.state.options.length) {
            console.log("componentDidUpdate saving data");
            const jsonString = JSON.stringify(this.state.options);
            localStorage.setItem('optData', jsonString);
        }
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    handleDeleteOptions() {
        // shorthand way to set state.
        this.setState(() => ({ options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        console.log("hdo " + optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => {
                return (optionToRemove !== opt);
            })
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const result = this.state.options[randomNum];
        console.log("WHAT TO DO " + result);
        return result;
    }
    handleAddOption(newOpt) {
        console.log("handleAddOption() " + newOpt);
        if (!newOpt) {
            return "You need to enter a valid item to add.";
        } else if (this.state.options.indexOf(newOpt) > -1) {
            return "Duplicate found. Enter something else.";
        }
        this.setState((prevState) => {
            return {
                options: prevState.options.concat(newOpt)
            };
        });
    }
    render() {
        const title = "Indecision";
        const subTitle = "Let computer tell you what to do."
        return (
            <div>
                <Header title={title} subtitle={subTitle} />
                <Action hasOptions={this.state.options.length != 0}
                    handlePick={this.handlePick} />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption} />
                <AddOption
                    handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}

// function component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>);

}
Header.defaultProps = {
    title: 'Some Default'
};

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}>
                What should I do.
                </button>
        </div>
    );
}

const Options = (props) => {

    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add option to get started.</p>}
            {
                props.options.map((opt) => (
                    <Option
                        key={opt}
                        optionText={opt}
                        handleDeleteOption={props.handleDeleteOption} />))
            }
        </div>
    );

}
const Option = (props) => {

    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}>
                remove
                </button>
        </div>
    );
}
class AddOption extends React.Component {
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

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("appHere"));