import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpsPage from "./pages/NewMeetUps";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={AllMeetUpsPage} exact></Route>
        <Route path="/new" component={NewMeetUpsPage} exact></Route>
        <Route path="/favorites" component={FavoritesPage}></Route>
      </Switch>
    </Layout>
  );
}

export default App;
