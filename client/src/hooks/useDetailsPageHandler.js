import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { server } from "../server";
import toast from "react-hot-toast";

const useDetailsPageHandler = ({ data, setData, setActive, setLoading }) => {
    const { id } = useParams();
    // const { allProducts } = useSelector((state) => state.products);
    const { allEvents } = useSelector((state) => state.events);
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            const fetchProduct = async () => {
                try {
                    const { data } = await axios.get(`${server}/product/get-published-products/${id}`)
                    let product = data?.product;
                    if (product?.length === 0) {
                        toast.error("Product Not found");
                        navigate('/products?search=all%20products')
                    } else {
                        ProductVal(product[0])
                    }
                } catch (error) {
                    console.log(error)
                    navigate('/products?search=all%20products')
                }
            }
            fetchProduct()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, navigate])


    const ProductVal = async (product) => {
        const findProductInEvents = (events) => {
            return events?.find((event) =>
                event.productArray.some((item) => item?.slug === product?.slug)
            );
        };

        const productInEvents = findProductInEvents(allEvents);

        if (productInEvents) {
            const productData = productInEvents.productArray.find(
                (item) => item?.slug === product?.slug
            );

            const updatedProductData = { ...productData };

            setActive(true);
            setData(updatedProductData);
        } else {
            setData(product);
        }
        setLoading(false)
    }

    // useEffect(() => {
    //     const findProductInEvents = (events) => {
    //         return events?.find((event) =>
    //             event.productArray.some((item) => item?.slug === id)
    //         );
    //     };

    //     const productInEvents = findProductInEvents(allEvents);

    //     if (productInEvents) {
    //         const productData = productInEvents.productArray.find(
    //             (item) => item?.slug === id
    //         );

    //         const updatedProductData = { ...productData };

    //         setActive(true);
    //         setData(updatedProductData);

    //     } else {
    //         const productData = allProducts?.find((item) => item?.slug === id);
    //         setData(productData);
    //     }

    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [allProducts, allEvents, id]);

    // useEffect(() => {
    //     async function getSellerDetails(sellerID) {
    //         try {
    //             const { data } = await axios.post(`${server}/shop/getSellerProduct`, { sellerID })
    //             setSeller(data.seller)
    //             setLoading(false)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     if (data !== null) {
    //         getSellerDetails(data?.shopId)

    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [data])

}

export default useDetailsPageHandler