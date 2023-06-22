import Home from '../pages/home';
import { default as Detail } from '../pages/detail';
import Favorite from '../pages/favorite';

const routes = {
    '/': Home,
    '/detail/:id': Detail,
    '/favorite': Favorite,
};

export default routes;
