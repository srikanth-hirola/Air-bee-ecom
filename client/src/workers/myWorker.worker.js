// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    // eslint-disable-next-line no-restricted-globals
    self.addEventListener('message', (event) => {
        const data = event.data;
        const result = performIntensiveTask(data);
        // eslint-disable-next-line no-restricted-globals
        self.postMessage(result);
    });

    function performIntensiveTask(data) {
        console.log(data)
        // ... perform calculations or processing ... return result;
    }
};
