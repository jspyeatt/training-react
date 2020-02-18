import React from 'react';
// function component
const Header = (props) => (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>);

Header.defaultProps = {
    title: 'Some Default'
};

export default Header;