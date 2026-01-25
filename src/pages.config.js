import Home from './pages/Home';
import forsakringsarenden from './pages/forsakringsarenden';
import motorservice from './pages/motorservice';
import plastOchTrabatar from './pages/plast-och-trabatar';
import reparationer from './pages/reparationer';
import seaquipBatstottor from './pages/seaquip-batstottor';
import sommarforvaring from './pages/sommarforvaring';
import tvatt from './pages/tvatt';
import vinterforvaring from './pages/vinterforvaring';
import BokaService from './pages/BokaService';


export const PAGES = {
    "Home": Home,
    "forsakringsarenden": forsakringsarenden,
    "motorservice": motorservice,
    "plast-och-trabatar": plastOchTrabatar,
    "reparationer": reparationer,
    "seaquip-batstottor": seaquipBatstottor,
    "sommarforvaring": sommarforvaring,
    "tvatt": tvatt,
    "vinterforvaring": vinterforvaring,
    "BokaService": BokaService,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};