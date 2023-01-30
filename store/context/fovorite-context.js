import { createContext } from "react";

export const FavoriteContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

function FavoriteContextProvider({ children }) {
	return <FavoriteContextProvider>{children}</FavoriteContextProvider>;
}

export default FavoriteContextProvider;
