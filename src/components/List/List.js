import React from 'react';


const List = (props) => {

    const states = props?.states || props[0] ;
    const handleChange = (event) => {
        const selectedState = event.target.value;
        props.onSelectState(selectedState);
    };

    return(
        <select onChange={handleChange} defaultValue={states[0]}>
            {states.map((state, index) => (
                <option key={index} value={state}>
                    {state}
                </option>
            ))}
        </select>
    )
}

export default List;
