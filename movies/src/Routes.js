/* eslint-disable react/no-array-index-key */
import React, {
  lazy,
  Suspense,
  Fragment
} from 'react';
import {
  Switch,
  Redirect,
  Route,
} from 'react-router-dom';

import Error404View from './views/pages/Error404View';
import HomeView from './views/pages/HomeView';
import MovieDetail from './views/pages/MovieDetail';

// import HomeView from 'src/views/pages/HomeView';
// import LoadingScreen from './components/LoadingScreen';

// const routesConfig = [
//   {
//     exact: true,
//     path: '/404',
//     component: lazy(() => import('./views/pages/Error404View'))
//   },
//   {
//     path: '*',
//     routes: [
//       {
//         exact: true,
//         path: '/',
//         // component: HomeView
//       },
//       {
//         exact: true,
//         path: '/movie/:id',
//         // component: lazy(() => import('src/views/pages/MovieView'))
//       },
//       {
//         component: () => <Redirect to="/404" />
//       }
//     ]
//   }
// ];
//
// const renderRoutes = (routes) => (routes ? (
//   <Suspense fallback={<LoadingScreen />}>
//     <Switch>
//       {routes.map((route, i) => {
//       const Component = route.component;
//
//       return (
//         <Route
//           key={i}
//           path={route.path}
//           exact={route.exact}
//           render={(props) => (
//             // route.routes
//             //   ? renderRoutes(route.routes)
//             //   : <Component {...props} />
//             <Component {...props} />
//           )}
//         />
//       );
//       })}
//     </Switch>
//   </Suspense>
// ) : null);
//
// function Routes() {
//   return renderRoutes(routesConfig);
// }


const Routes = () => {
  return (
    <>
      <Route exact path='/' component={HomeView}/>
      <Switch>
        <Route exact path='/404' component={Error404View}/>
        <Route exact path='/movie/:id' component={MovieDetail}/>
      </Switch>
    </>
  );
}

export default Routes;


