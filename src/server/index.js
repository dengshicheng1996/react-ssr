import express from 'express';
import { matchRoutes } from 'react-router-config';
import proxy from 'express-http-proxy';
import { getServerStore } from '../store/';
import { render } from '../utils';
import Routes from '../routes';

const app = express(); 

app.use(express.static('public'));

app.use('/api', proxy('http://47.95.113.63', {
  proxyReqPathResolver: req => '/ssr/api' + req.url
}))

app.get('*', (req, res) => {
  const store = getServerStore(req);
  const promises = [];
  // 多级路匹配拿到对应路由loaddata
  const matchedRoutes =  matchRoutes(Routes, req.path);

  matchedRoutes.forEach(item => {
    if (item.route.loadData) {

      // 请求容错处理
      const promise = new Promise((resolve, rejects) => {
        item.route.loadData(store).then(resolve).catch(resolve)
      })
      promises.push(promise);
    }
  })

  Promise.all(promises).then(() => {
    const context = {}
    // const lastRouteKey = matchedRoutes[matchedRoutes.length - 1].route.key;
    // if (lastRouteKey == '404') {
    //   res.status(404);
    // }

    if (context.action === 'REPLACE') {
      res.redirect(301, context.url)
    }

    if (context.NotFound) {
      res.status(404);
    }
    
    res.send(render(req, store, Routes, context));
  })
});

const server = app.listen(3000);
