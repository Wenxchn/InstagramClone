import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as ROUTES from './constants/routes' // * means all

const Login = lazy(() => import('./pages/login')) // splits bundles into chunks

function App() {
  return (
    <Router>
      <Suspense fallback={<p>The site is loading...</p>}>
        <Switch>
          <Route path={ROUTES.LOGIN} component={Login} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App
