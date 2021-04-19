/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as Routes from './constants/routes'
import { Home, Browse, SignIn, SignUp } from './pages'

export default function App() {
    return (
        <Router>
            <Route path={Routes.SIGN_IN}>
                <SignIn />
            </Route>

            <Route path={Routes.SIGN_UP}>
                <SignUp />
            </Route>

            <Route path={Routes.BROWSE}>
                <Browse />
            </Route>

            <Route exact path={Routes.HOME}>
                <Home />
            </Route>
        </Router>
    )
}
