import {useEffect, useState} from "react";

export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        setFavorites(favorites);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleChangeFavorite = (id) => (e) => {
        if (e.target.checked) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const newFavorites = [...favorites, id];
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setFavorites(newFavorites);
        } else {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const newFavorites = favorites.filter(f => f !== id);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setFavorites(newFavorites);
        }
    }

    return {
        favorites,
        handleChangeFavorite,
    }
}