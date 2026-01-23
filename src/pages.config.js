import Home from './pages/Home';
import Motorservice from './pages/Motorservice';
import PlastTrabatar from './pages/PlastTrabatar';
import Sommarforvaring from './pages/Sommarforvaring';
import Vinterforvaring from './pages/Vinterforvaring';
import Reparationer from './pages/Reparationer';
import Forsakringsarenden from './pages/Forsakringsarenden';
import Seaquip from './pages/Seaquip';
import Tvatt from './pages/Tvatt';


export const PAGES = {
    "Home": Home,
    "Motorservice": Motorservice,
    "PlastTrabatar": PlastTrabatar,
    "Sommarforvaring": Sommarforvaring,
    "Vinterforvaring": Vinterforvaring,
    "Reparationer": Reparationer,
    "Forsakringsarenden": Forsakringsarenden,
    "Seaquip": Seaquip,
    "Tvatt": Tvatt,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};