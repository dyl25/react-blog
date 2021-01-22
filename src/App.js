import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import BlogDetails from "./BlogDetails"
import BlogList from "./BlogList"
import Navbar from "./Navbar"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <section className="section">
          <div className="container">
            <Switch>
              <Route exact path="/blogs">
                <BlogList />
              </Route>
              <Route path="/blogs/details">
                <BlogDetails />
              </Route>
            </Switch>
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App;
