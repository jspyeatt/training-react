class Counter extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        // doing the binding so we always have props available.
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        this.state = {
            count: 0
        };
    }
    componentDidMount() {
        console.log("componentDidMount()");
        const storedVal = localStorage.getItem('cnt');
        console.log("storedVal '" + storedVal + "'");
        if (storedVal && !isNaN(storedVal)) {
            this.setState(() => {
                return {
                    count: parseInt(storedVal, 10)
                };
            });
        }
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate()");
        if (prevState.count !== this.state.count) {
            localStorage.setItem('cnt', this.state.count);
        }
    }

    handleAddOne() {
        console.log("handleAddOne");
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }
    handleMinusOne() {
        console.log("handleMinusOne");
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        console.log("handleReset");
        this.setState(() => {
            return {
                count: 0
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById("appHere"));
// let count = 0;

// const someId1 = "plus1"
// const someId2 = "minus1"
// const addOne = () => {
//     console.log("addOne " + count);
//     count = count + 1;
//     renderCounterApp();
// };
// const minusOne = () => {
//     console.log("minusOne " + count);
//     count = count - 1;
//     renderCounterApp();
// };
// const resetCounter = () => {
//     console.log("reset");
//     count = 0;
//     renderCounterApp();
// };
// // define a function which can render the counter section of the page
// // this function is called when you first load the page and again
// // anytime the value of count is being changed.
// const renderCounterApp = () => {
//     const template3 = (
//         <div>
//             <h1>Count: {count}</h1>
//             {/*
//         we have to name it className= instead of class= because class is a reserved 
//         word in javascript. So name it className= to make certain it gets rendered.
//     */}
//             <button id={someId1} className="button" onClick={addOne}>+1</button>
//             <button id={someId2} className="button" onClick={minusOne}>-1</button>
//             <button className="button" onClick={resetCounter}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(template3, appRoot3);
// };