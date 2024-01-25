import React from 'react'
import { StyleConfig } from '../../utils/StyleConfig'
import useGetCurrencyConversion from '../../hooks/Site-config/useGetCurrencyConversion';

const CheckoutpageCart = ({ sellerProducts, handleDelete, index }) => {

    const styles = StyleConfig();
    const { ConvertCurrency } = useGetCurrencyConversion();

    return (
        <>
            <div className='CheckoutpageCart-parent'>

                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                {sellerProducts?.products?.length} Items in Cart
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                {sellerProducts?.products?.map((product) => (
                                    <div className="row ">
                                        <div className="col-md-4">
                                            <div className="Order-summery-image">
                                                <img src={product?.selectedColor?.mainImage?.url ? product?.selectedColor?.mainImage?.url : product?.selectedColor?.image?.url} alt="product" className='object-contain' />
                                            </div>
                                        </div>
                                        <div className="col-md-8 ">
                                            <div className="Order-summery-text">
                                                <p>{product.name}</p>
                                                <p className="text-xs font-semibold mb-1">{product?.selectedColor?.SKU}</p>
                                            </div>
                                            <div className='Order-summery-text-sub'>
                                                <p>Qty {product.qty}</p>
                                                <strong>{styles?.currency?.Symbol}&nbsp;{ConvertCurrency(product.finalPrice)}</strong>
                                            </div>
                                        </div>
                                        {'error' in sellerProducts ? (
                                            <div className="flex justify-between mt-2 border-t-2 pt-3">
                                                <p className="text-red-600">
                                                    <i>
                                                        Currently product can't be delivered to your location!
                                                    </i>
                                                </p>
                                                <button
                                                    onClick={(e) => {
                                                        handleDelete(e, index);
                                                    }}
                                                    className="bg-red-600 text-white font-semibold px-4 rounded "
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ) : (
                                            <p className="text-black mt-2 border-t-2 pt-3">
                                                <i>
                                                    Earliest Available On{' '}
                                                    <span className="text-green-600">
                                                        {sellerProducts?.response.orders.etd}
                                                    </span>
                                                </i>
                                            </p>
                                        )}
                                    </div>
                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutpageCart