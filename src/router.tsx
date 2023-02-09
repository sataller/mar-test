import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPageContainer from "./pages/mainPage/MainPageContainer";
import CreatePageContainer from "./pages/createPage/CreatePageContainer";
import DescriptionPageContainer from "./pages/descriptionPage/DescriptionPageContainer";


const Routes = () => {
  return (
  <Router>
    <Switch>
      <Redirect exact from='/' to='/main' />
      <Route exact path='/main' component={MainPageContainer}/>
      <Route exact path='/description/:id'  component={DescriptionPageContainer}/>
      <Route exact path='/create'  component={CreatePageContainer}/>
    </Switch>
  </Router>
  )
}

export default Routes