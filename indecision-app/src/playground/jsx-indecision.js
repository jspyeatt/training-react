console.log("App is actually running.");

// JSX - javascript XML

const myObj = {
    title: "This is my title",
    subtitle: "My subtitle",
    options: []
}

const onFormSubmit = (evt) => {
    evt.preventDefault();  // stops full page reload

    const optionSelected = evt.target.elements.myOption.value;
    console.log("form submitted. " + optionSelected);
    if (optionSelected) {
        myObj.options.push(optionSelected);
        evt.target.elements.myOption.value = '';
        renderOptionsApp();
    }
}
const resetForm = (evt) => {
    myObj.options = [];
    renderOptionsApp();
};
const onMakeADecision = () => {
    const randomNum = Math.floor(Math.random() * myObj.options.length);
    const option = myObj.options[randomNum];
    alert(option);
}
const appRoot = document.getElementById("appHere");
const renderOptionsApp = () => {
    const template = (
        <div>
            <h1>{myObj.title}</h1>
            {myObj.subtitle && <p>{myObj.subtitle}</p>}
            <p>{(myObj.options && myObj.options.length > 0) ? "Here are your options" : "No options"}</p>
            <button disabled={myObj.options.length == 0} onClick={onMakeADecision}>What should I do?</button>
            <button onClick={resetForm}>Reset</button>
            <ol>
                {
                    myObj.options.map((opt) => <li key={opt}>{opt}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='myOption' />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};
renderOptionsApp();


