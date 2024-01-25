import { StyleConfig } from "../../utils/StyleConfig"

const useGetCurrencyConversion = () => {
    const styles = StyleConfig();
    const selectedCurrency = styles?.currency

    const ConvertCurrency = (price) => {
        if (selectedCurrency?.code !== "INR") {
            return (price * selectedCurrency?.exchangeRate).toFixed(2);
        } else {
            return price
        }
    }

    return { ConvertCurrency }
}

export default useGetCurrencyConversion