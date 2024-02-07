import { useEffect } from "react"
import { StyleConfig } from "../../utils/StyleConfig"

const usePageSEOHandle = ({ pageName, setState, setLoading }) => {

    const styles = StyleConfig();

    useEffect(() => {
        if (setLoading) {
            setLoading(false)
        }
        if (styles?.allPagesSEODetails) {
            setState({
                metaTitle: styles?.allPagesSEODetails?.[pageName]?.metaTitle,
                metaDescription: styles?.allPagesSEODetails?.[pageName]?.metaDescription
            })
        } else {
            setState({
                metaTitle: 'Airbee Technologies',
                metaDescription: 'Hirola Infotech Solutions provide your business with a variety of digital solutions to promote your product/service online for your growth.'
            })
        }
    }, [pageName, setLoading, setState, styles?.allPagesSEODetails])
}

export default usePageSEOHandle