import React from 'react';
import ReactDOM from 'react-dom';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';
class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
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
    handleDeleteOptions = () => {
        // shorthand way to set state.
        this.setState(() => ({ options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        console.log("hdo " + optionToRemove);
        this.setState((prevState) => ({
            options: prevState.options.filter((opt) => {
                return (optionToRemove !== opt);
            })
        }));
    };

    handleClearsSelectedOptionState = () => {
        console.log("handleClearsSelectedOptionState")
        this.setState(() => ({ selectedOption: undefined }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const result = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: result
        }));
        return result;
    };
    handleAddOption = (newOpt) => {
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
    };
    render() {
        const title = "Indecision";
        const subTitle = "Let computer tell you what to do."
        return (
            <div>
                <Header title={title} subtitle={subTitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length != 0}
                        handlePick={this.handlePick} />
                    <Options
                        options={this.state.options}
                        handleDeleteOptions={this.handleDeleteOptions}
                        handleDeleteOption={this.handleDeleteOption} />
                    <AddOption
                        handleAddOption={this.handleAddOption} />
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    clearOption={this.handleClearsSelectedOptionState}
                />
            </div>
        );
    }
}
export default IndecisionApp;