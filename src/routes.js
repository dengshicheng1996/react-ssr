import App from './App';
import Home from './containers/Home/';
import Login from './containers/Login/';
import TranslationList from './containers/TranslationList/';
import NotFound from './containers/NotFound/';

export default [
  {
    path: '/',
    component: App,
    key: 'app',
    loadData: App.loadData,
    routes: [
      { 
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'home',
      },
      {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login'
      },
      {
        path: '/translation',
        component: TranslationList,
        exact: true,
        key: 'translation',
        loadData: TranslationList.loadData
      },
      {
        // path: '*',
        component: NotFound
      }
    ]
  }
]

// export default (
//   <div>
//     <Route path='/' exact component={Home}></Route>
//     <Route path='/login' exact component={Login}></Route>
//   </div>
// )
