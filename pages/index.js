import App from '../components/App'
import Header from '../components/Header/Header'

import './index.less'


export default () => (
  <App>
      <Header />
       <div className="hello_one"><h1>Hello_One</h1></div>
      <div className="hello_Two"><h1>Hello_Two</h1></div> 
  </App>
)