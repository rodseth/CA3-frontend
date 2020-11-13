import { URL } from "../base-components/Home";
import apiFacade, { handleHttpErrors } from "../base-facades/apiFacade";

const starWarsFacade = () => {
    
    const getStarWarsQuote = () => {
        return fetch(URL + "/api/starwars", apiFacade.makeOptions("GET", true))
            .then(handleHttpErrors);
    };

    return { getStarWarsQuote };
};

const facade = starWarsFacade();
export default facade;
