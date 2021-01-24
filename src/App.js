import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import RBBlogDetails from "./blog/RBBlogDetails"
import RBBlogList from "./blog/RBBlogList"
import Navbar from "./Navbar"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/">
                <RBBlogList />
              </Route>
              <Route exact path="/blogs">
                <RBBlogList />
              </Route>
              <Route path="/blogs/details">
                <RBBlogDetails />
              </Route>
            </Switch>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
