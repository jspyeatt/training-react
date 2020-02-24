import React from 'react';

const Option = (props) => (
        <div>
            {props.optionText}
            <button
            className="button button--linkbutton"
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText)
                }}>
                remove
                </button>
        </div>
    );

// we want to export this component down here instead of in the definition
// itself because this is a functional component. And if we don't do it this
// way this component will show up in the elements tab of the debugger as
// 'Unknown'.

export default Option;