const useProductDeals = () => {

    const getBestDeals = ({ allProducts, setData }) => {
        const allProductsData = allProducts ? [...allProducts] : [];

        const productsWithSoldOut = allProductsData?.map((product) => {
            if (product?.showInputs) {
                if (product?.colorInputs[0]?.attributeStock) {
                    return product.colorInputs[0]?.attributes[0]?.values[0]?.sold_out || 0;
                } else {
                    return product.colorInputs[0]?.sold_out || 0;
                }
            } else {
                if (product?.attributeStock) {
                    return product?.attributes[0]?.values[0]?.sold_out || 0;
                } else {
                    return product?.sold_out || 0;
                }
            }
        });

        const sortedProducts = allProducts?.slice().sort((a, b) => {
            const soldOutA = productsWithSoldOut[allProducts.indexOf(a)];
            const soldOutB = productsWithSoldOut[allProducts.indexOf(b)];
            return soldOutB - soldOutA;
        });
        const firstTwenty = sortedProducts && sortedProducts.slice(0, 20);
        setData(firstTwenty);
    }

    const getTopRated = ({ allProducts, setData }) => {
        const allProductsData = allProducts ? [...allProducts] : [];

        const productsWithRatings = allProductsData?.map((product) => {
            return product?.ratings || 0;
        });
        const sortedProducts = allProducts?.slice().sort((a, b) => {
            const ratingA = productsWithRatings[allProducts.indexOf(a)];
            const ratingB = productsWithRatings[allProducts.indexOf(b)];
            return ratingB - ratingA;
        });
        const firstTwenty = sortedProducts && sortedProducts.slice(0, 20);
        setData(firstTwenty);
    }

    return { getBestDeals, getTopRated }
}

export default useProductDeals