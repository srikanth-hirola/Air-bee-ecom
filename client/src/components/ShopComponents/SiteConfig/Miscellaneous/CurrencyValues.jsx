import React from 'react'
import useSaveLayoutContent from '../../../../hooks/useSaveLayoutContent';
import toast from 'react-hot-toast';

const CurrencyValues = ({ CurrencyArr, logoLoading, setLogoLoading, setCurrencyArr }) => {

    const { saveLayoutContent } = useSaveLayoutContent()

    const handleSubmit = (e) => {
        e.preventDefault();
        let ver = Validate(CurrencyArr);
        if (!ver) {
            saveLayoutContent(CurrencyArr, "CurrencyArr", setLogoLoading)
        } else {
            toast.error('All Currency Exchange Rates are required!')
        }
    }

    const Validate = (CurrencyArr) => {
        let res = false;
        // eslint-disable-next-line array-callback-return
        Promise.all(CurrencyArr.map((cur) => {
            if (cur?.code !== "INR") {
                if (!cur?.exchangeRate) {
                    res = true
                }
            }
        }))
        return res
    }

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        let updatedState = JSON.parse(JSON.stringify(CurrencyArr));
        updatedState[index][name] = value;
        setCurrencyArr(updatedState)
    }


    return (
        <div>
            <div className='flex justify-between'>
                <p className='font-semibold'>Currency & Exchange Rates in INR</p>
            </div>
            {CurrencyArr?.length > 0 ?
                <>
                    <div className='flex gap-10 flex-wrap'>
                        {CurrencyArr?.map((currency, i) => (
                            <React.Fragment key={i}>
                                {currency?.code !== "INR" &&
                                    <div>
                                        <label>{currency?.code}<span className="text-red-500">*</span></label><br />
                                        <input required placeholder='Enter Exchange Rate in INR' className='border-1 rounded px-2 py-2 mt-2' value={currency?.exchangeRate} type='number' name="exchangeRate" onChange={(e) => handleChange(e, i)} />
                                    </div>
                                }
                            </React.Fragment>
                        ))}
                    </div>
                    {logoLoading ?
                        <button
                            className='w-[150px] h-[40px] rounded bg-green-500 text-white my-3'>Loading...</button>
                        :
                        <button
                            className='w-[150px] h-[40px] rounded bg-green-500 text-white my-3' onClick={handleSubmit}>Update Currency
                        </button>
                    }
                </>
                : <p>No Currency Types Exist</p>
            }
        </div>
    )
}

export default CurrencyValues