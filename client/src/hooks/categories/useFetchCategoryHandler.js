import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllCategories } from "../../redux/actions/category";

const useFetchCategoryHandler = () => {
    const dispatch = useDispatch();
    const { category } = useSelector((state) => state.category)
    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])


    const fetchCategory = (_id) => {
        // console.log(_id)
        let found = category.find((cat) => cat?._id === _id);
        if (found) {
            return found
        }
    }


    const fetchSubCategory = (CatID, _id) => {

        let foundCat = fetchCategory(CatID)
        if (foundCat) {
            let foundSub = foundCat?.subcategories?.find((sub) => sub?._id === _id)
            return foundSub
        }
    }

    const fetchSubSubCategory = (CatID, Subid, _id) => {
        let foundCat = fetchSubCategory(CatID, Subid)
        if (foundCat) {
            let foundSub = foundCat?.subSubcategories?.find((sub) => sub?._id === _id)
            return foundSub
        }
    }

    return { fetchCategory, fetchSubCategory, fetchSubSubCategory }

}

export default useFetchCategoryHandler