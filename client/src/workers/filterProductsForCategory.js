// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    // eslint-disable-next-line no-restricted-globals
    self.addEventListener('message', (event) => {
        const products = event.data.allProducts;
        const name = event.data.categoryName;
        const result = performCategoryExtract(products, name);
        // eslint-disable-next-line no-restricted-globals
        self.postMessage(result);
    });

    function performCategoryExtract(products, name) {
        const data = products?.filter((item) => item?.category === name).slice(0, 8);
        return data
    }
};


