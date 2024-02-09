import Store from "./redux/store";

onmessage = (event) => {
    const action = event.data;
    Store.dispatch(action);
};