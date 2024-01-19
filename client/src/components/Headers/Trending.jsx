import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useProductDeals from '../../hooks/useProductDeals'
import { useSelector } from 'react-redux';

const Trending = () => {
    const { allProducts } = useSelector((state) => state.products);
    const { category } = useSelector((state) => state.category)
    const [data, setData] = useState([]);
    const [categories, setCategories] = useState([]);

    const { getBestDeals } = useProductDeals();

    useEffect(() => {
        getBestDeals({ allProducts, setData })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [allProducts])


    useEffect(() => {
        let updatedState = [...categories];
        // eslint-disable-next-line array-callback-return
        data?.map((product) => {
            let found = category?.find((cat) => cat?.name === product?.category)
            if (found) {
                updatedState.push(found)
            }
        })
        let newArr = new Set(updatedState);
        setCategories(Array.from(newArr))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category, data])


    return (
        <li className="menu-item-has-children">
            <Link to="#" className='trending'>Trending <i className="fa fa-angle-down"></i></Link>
            <div className="sub-menu mega-menu mega-menu-column-4">
                {categories.map((product, i) => (
                    < div className="list-item text-center" key={i}>
                        <Link to={`/products-by-category/search?category=${product.name}`}>
                            <img
                                src={product?.CatImg?.url}
                                alt="Fashion"
                            />
                            <h4 className="title">{product?.name}</h4>
                        </Link>
                    </div>
                ))}

                {/* <div className="list-item text-center">
                    <Link to="#">
                        <img
                            src="https://th.bing.com/th/id/R.ce8de1adaa3fcc169f0d97c436b8274b?rik=6W1qX6Qp03lNWg&riu=http%3a%2f%2fimages.unsplash.com%2fphoto-1504633273314-6a929fcd7090%3fixlib%3drb-0.3.5%26q%3d80%26fm%3djpg%26crop%3dentropy%26cs%3dtinysrgb%26w%3d1080%26fit%3dmax%26ixid%3deyJhcHBfaWQiOjEyMDd9%26s%3de8e0ff2cce3792a276fa84086113a17c&ehk=chx16tzqSRzpfA6BYM4FNaZZ%2fMJwEtxaqHPW1FZb9FI%3d&risl=&pid=ImgRaw&r=0"
                            alt="Fashion"
                        />
                        <h4 className="title">Fashion</h4>
                    </Link>
                </div> */}

            </div>
        </li>
    )
}

export default Trending