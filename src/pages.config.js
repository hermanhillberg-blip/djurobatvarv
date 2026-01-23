import Home from './pages/Home';
import motorservice from './pages/motorservice';
import plastOchTrabatar from './pages/plast-och-trabatar';
import sommarforvaring from './pages/sommarforvaring';
import vinterforvaring from './pages/vinterforvaring';
import reparationer from './pages/reparationer';
import forsakringsarenden from './pages/forsakringsarenden';
import seaquipBatstottor from './pages/seaquip-batstottor';
import tvatt from './pages/tvatt';


export const PAGES = {
    "Home": Home,
    "motorservice": motorservice,
    "plast-och-trabatar": plastOchTrabatar,
    "sommarforvaring": sommarforvaring,
    "vinterforvaring": vinterforvaring,
    "reparationer": reparationer,
    "forsakringsarenden": forsakringsarenden,
    "seaquip-batstottor": seaquipBatstottor,
    "tvatt": tvatt,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};