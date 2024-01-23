import axios from "axios";
import { server } from "../../server";
import toast from "react-hot-toast";


const useCategoriesHandle = () => {

    const handleSelectedCategoryChange = (e, name, selectedCategories, setSelectedCategories) => {
        const { checked } = e.target;
        let updatedState = [...selectedCategories];
        if (checked) {
            updatedState.push(name)
        } else {
            let filtered = updatedState.filter((cat) => cat !== name)
            updatedState = filtered
        }
        setSelectedCategories(updatedState)
    }

    const handleSelectedCategoryObject = (e, name, setCategories) => {
        const { checked } = e.target;
        setCategories((prevCategories) => {
            let updatedState = JSON.parse(JSON.stringify(prevCategories));
            let updatedArray = updatedState.selectedCategories;
            if (checked) {
                updatedArray.push(name);
            } else {
                updatedArray = updatedArray.filter(
                    (cat) => cat !== name
                );
            }
            updatedState.selectedCategories = updatedArray;
            return updatedState;
        });
    };


    const handleUpdateCategories = async (e, CategoryLayoutName, CategoryContent, setLogoLoading) => {
        e.preventDefault();
        try {
            setLogoLoading(true)
            await axios.put(`${server}/site/site-config-update-categories`, { CategoryLayoutName, CategoryContent })
            toast.success("Updated Categories View")
            setLogoLoading(false);
        } catch (error) {
            setLogoLoading(false)
            toast.error(error.response.data.message)
        }
    }

    return { handleSelectedCategoryChange, handleUpdateCategories, handleSelectedCategoryObject };
};

export default useCategoriesHandle;
