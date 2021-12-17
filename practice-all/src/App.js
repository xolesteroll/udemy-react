import {Route, Switch, Redirect} from 'react-router-dom'
import QuotesArchive from "./pages/QuotesArchive";
import SingleQuote from "./pages/SingleQuote";
import AddQuote from "./pages/AddQuote";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout >
            <Switch>
                <Route path='/' exact>
                    <Redirect to='/quotes'/>
                </Route>
                <Route path='/quotes' exact>
                    <QuotesArchive />
                </Route>
                <Route path='/quotes/:quoteId'>
                    <SingleQuote />
                </Route>
                <Route path='/new-quote'>
                    <AddQuote />
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
