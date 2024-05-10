import Home from './Home'; // Import your components
import Actors from './Actors';
import Directors from './Directors';
import Movie from './Movie';

const routes = [
  { path: '/', component: Home }, 
  { path: '/actors', component: Actors },
  { path: '/directors', component: Directors }, 
  { path: '/movie/:id', component: Movie }, 
];

export default routes;
