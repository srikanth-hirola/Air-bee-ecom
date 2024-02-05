import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { getAllSiteConfig } from "../../redux/actions/siteConfig";
import { server } from "../../server";
import axios from "axios";

const useImagesHandler = () => {

    const dispatch = useDispatch();

    const handleImageUploadAPI = async ({ allImages, name, setLogoLoading, setAllImages }) => {
        if (allImages.length > 0) {
            try {
                setLogoLoading(true)
                await axios.put(`${server}/site/site-config-imgs-upload`, { allImages, name })
                toast.success("Uploaded Image Successfully")
                setAllImages([])
                setLogoLoading(false);
                dispatch(getAllSiteConfig())
            } catch (error) {
                setLogoLoading(false)
                toast.error(error.response.data.message)
            }
        } else {
            toast.error("No Image is selected to upload")
        }
    }

    const handleRemoveImage = ({ e, index, allImages, setAllImages }) => {
        e.preventDefault();
        let updatedState = [...allImages];
        updatedState = updatedState.filter((val, index1) => index1 !== index)
        setAllImages(updatedState)
    }

    const handleLogoChange = ({ e, setAllImages }) => {
        const files = e.target.files;
        const updatedState = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64Image = reader.result;
                    updatedState.push(base64Image);

                    if (updatedState.length === files.length) {
                        setAllImages(updatedState);
                    }
                };
                reader.readAsDataURL(file);
            }
        }
    };

    return { handleImageUploadAPI, handleLogoChange, handleRemoveImage }
}

export default useImagesHandler