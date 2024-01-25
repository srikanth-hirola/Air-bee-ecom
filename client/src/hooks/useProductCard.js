import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { server } from "../server";

const useProductCard = ({ data1, data, setData, setActive, setSeller, setLoading }) => {
    const id = data1?._id;
    const { allProducts } = useSelector((state) => state.products);
    const { allEvents } = useSelector((state) => state.events);

    useEffect(() => {
        const findProductInEvents = (events) => {
            return events?.find((event) =>
                event.productArray.some((item) => item._id === id)
            );
        };

        const productInEvents = findProductInEvents(allEvents);

        if (productInEvents) {
            const productData = productInEvents.productArray.find(
                (item) => item._id === id
            );

            const updatedProductData = { ...productData };

            setActive(true);
            setData(updatedProductData);

        } else {
            const productData = allProducts?.find((item) => item._id === id);
            setData(productData);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts, allEvents, id]);

    useEffect(() => {
        async function getSellerDetails(sellerID) {
            try {
                const { data } = await axios.post(`${server}/shop/getSellerProduct`, { sellerID })
                setSeller(data.seller)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        if (data !== null) {
            getSellerDetails(data?.shopId)

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data])

}

export default useProductCard