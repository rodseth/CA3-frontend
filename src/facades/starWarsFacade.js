import { URL } from "../base-components/Home";
import apiFacade, { handleHttpErrors } from "../base-facades/apiFacade";

const starWarsFacade = () => {

    const starWarsMethod1 = () => {
        return fetch(URL + "/api/starWars", apiFacade.makeOptions("GET", true))
            .then(handleHttpErrors);
    };

    return { starWarsMethod1 };
};

const facade = starWarsFacade();
export default facade;
