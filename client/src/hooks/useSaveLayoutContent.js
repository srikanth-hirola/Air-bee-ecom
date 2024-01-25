import axios from 'axios';
import { useDispatch } from 'react-redux';
import { server } from '../server';
import toast from 'react-hot-toast';
import { getAllSiteConfig } from '../redux/actions/siteConfig';

const useSaveLayoutContent = () => {

    const dispatch = useDispatch();

    const saveLayoutContent = async (layoutContent, layoutName, setLogoLoading) => {
        try {
            setLogoLoading(true);
            await axios.put(`${server}/site/site-config-layout-content`, { layoutContent, layoutName });
            toast.success("Saved Layout Content Successfully");
            setLogoLoading(false);
            dispatch(getAllSiteConfig());
        } catch (error) {
            setLogoLoading(false);
            toast.error(error.response.data.message);
        }
    };

    return { saveLayoutContent };
};

export default useSaveLayoutContent;
