const useHandleChange = () => {
    const handleChange = ({ value, key, index, myState, setMyState, arrObj }) => {
        // Clone the current state to avoid mutating it directly
        const newState = JSON.parse(JSON.stringify(myState));
        if (typeof index !== 'undefined') {
            newState[key][index][arrObj] = value;
        } else {
            // If it's a nested object
            if (key.includes('.')) {
                const keys = key.split('.');
                let nestedObject = newState;
                for (let i = 0; i < keys.length - 1; i++) {
                    nestedObject = nestedObject[keys[i]];
                }
                nestedObject[keys[keys.length - 1]] = value;
            } else {
                // If it's a simple property
                newState[key] = value;
            }
        }

        // Update the state
        setMyState(newState);
    };

    const handleAddToArray = ({ structure, state, setState, key }) => {
        const updatedState = JSON.parse(JSON.stringify(state));
        if (key) {
            updatedState[key].push(structure)
        } else {
            updatedState.push(structure);
        }
        setState(updatedState)
    }

    const handleRemoveFromArray = ({ index, state, setState, key }) => {
        const updatedState = JSON.parse(JSON.stringify(state));
        if (key) {
            updatedState[key].splice(index, 1)
        } else {
            updatedState.splice(index, 1)
        }
        setState(updatedState)
    }

    return { handleChange, handleAddToArray, handleRemoveFromArray }
}

export default useHandleChange