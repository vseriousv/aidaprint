import App from '../components/App'
import Header from '../components/Header/Header'
import Head from 'next/head'

import './index.less'


export default () => (
  <App>
    <Head>
      <title>Aidaprint | Главная страница</title>
    </Head>
    <Header />
    <div className="hello_Two text-center"><h1>Это главная страница</h1></div> 
    <div className="hello_one text-center"><h2>На данный момент страница находится в разработке</h2></div>
    <div className="hello_Two text-center"><h1>Подвал</h1></div> 
  </App>
)