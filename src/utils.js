import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import axios from 'axios';

const secret = {
  secret: 'PP87ANTIPIRATE'
}

const clientAxios = axios.create({
  baseURL: '/',
  params: secret
});

// 问题： 登陆成功后刷新页面回到登陆页面，是因为服务器转发请求没有携带cookie
const serverAxios = req => axios.create({
  baseURL: 'http://47.95.113.63/ssr',
  headers: {
    cookie: req.get('cookie') || ''
  },
  params: secret
});

const render = (req, store, Routes, context) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={context}>
        <React.Fragment>{renderRoutes(Routes)}</React.Fragment>
      </StaticRouter>
    </Provider>
  ));

  // 通过context拿到组件中的css
  const cssStr = context.css.length ? context.css.join('\n') : '';
  
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Document</title>
      <style>${cssStr}</style> 
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
        window.context = {
          // 注水
          state: ${JSON.stringify(store.getState())}
        }
      </script>  
      <script src="/bundle.js"></script>  
    </body>
    </html>
  `;
}

// 样式服务器渲染
const withStyle = (DecoratedCom ,styles) => {
  return class newCom extends React.Component {
    componentWillMount() {
      if (this.props.staticContext) {
        this.props.staticContext.css.push(styles._getCss());
      }
    }

    render() {
      return <DecoratedCom {...this.props} />
    }
  }
}

export { render, withStyle, clientAxios, serverAxios }