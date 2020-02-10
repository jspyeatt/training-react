
const user = {
    name: "JP",
    age: 23,
    location: "Mount Horeb"
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
    return undefined;
}
const userName = "John";
const age = 57;
const userLocation = "madison";
const template2 = (
    <div>
        <h1>{user.name}</h1>
        {/* in AND statements it will return the last AND predicate 
        as a return value. otherwise undefined */}
        {user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)
const appRoot2 = document.getElementById("appHere2");
const appRoot3 = document.getElementById("appHere3");
ReactDOM.render(template2, appRoot2);