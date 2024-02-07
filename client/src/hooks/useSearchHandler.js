import axios from "axios";
import { useNavigate } from "react-router-dom";
import { server } from "../server";

const useSearchHandler = ({ searchInput, setSearchInput, setSuggestions, setFocus, setSelectedSuggestionIndex, setSearchHistory }) => {
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            if (searchInput) {
                const searchTerm = searchInput.toLowerCase();
                setSuggestions([]);
                await setSearchHistory((prevHistory) => {
                    if (!prevHistory.includes(searchTerm)) {
                        const newHistory = [searchTerm, ...prevHistory].slice(0, 5);
                        return newHistory;
                    }
                    return prevHistory;
                });
                var encodedSearchTerm = encodeURIComponent(searchTerm);
                navigate(`/products?search=${encodedSearchTerm}`);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchChange = async (e) => {
        setSearchInput(e.target.value);
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm === '') {
            setFocus(true);
            setSuggestions([]);
        } else {
            setFocus(false);
            const { data } = await axios.get(
                `${server}/product/search-suggestions?search=${searchTerm}`
            );
            setSuggestions(data);
        }
        setSelectedSuggestionIndex(-1); // Reset selected suggestion on input change
    };

    return { handleSearch, handleSearchChange }
}

export default useSearchHandler