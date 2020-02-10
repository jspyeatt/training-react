class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.getButtonTitle = this.getButtonTitle.bind(this);
        this.getDetails = this.getDetails.bind(this);
        this.state = {
            visible: true
        }
    }
    toggleVisibility() {
        console.log("toggling " + this.state.visible);
        this.setState((prevState) => {

            return {
                visible: ! prevState.visible
            }
        });
    }
    getButtonTitle() {
        return this.state.visible ? "Hide" : "Show";
    }
    getDetails() {
        return this.state.visible ? <p>DETAILS</p> : undefined;
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.getButtonTitle()}</button> 
                {this.getDetails()}   
            </div>
        )
    }
}
ReactDOM.render(<VisibilityToggle/>, document.getElementById("appHere"));
// let showingDetails = false;
// const getButtonTitle = () => {
//     return showingDetails ? "Hide Details" : "Show Details";
// };
// const toggleVisibility = () => {
//     showingDetails = ! showingDetails;
//     console.log("new showingDetails value " + showingDetails);
//     renderTemplate();
// }
// const appRoot = document.getElementById("appHere");
// const renderTemplate = () => {
//     const template = (
//         <div>
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}>{getButtonTitle()}</button>
//         {showingDetails && (
//             <div>
//             HERE ARE DETAILS.
//             </div>
//         )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// renderTemplate();

