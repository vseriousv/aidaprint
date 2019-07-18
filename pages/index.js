import App from '../components/App'
import Header from '../components/Header'
import ArticlesTable from '../components/Articles/ArticlesTable';

export default () => (
  <App>
      <Header />
      <ArticlesTable />
       <div className="hello_one"><h1>Hello_One</h1></div>
      <div className="hello_Two"><h1>Hello_Two</h1></div> 
  </App>
)