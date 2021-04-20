/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as Routes from './constants/routes'
import { Home, Browse, SignIn, SignUp } from './pages'
import { IsUserRedirect, ProtectedRoute } from './helpers/routes'

export default function App() {
    const user = null
    return (
        <Router>
            <Switch>
                <IsUserRedirect user={user} exact path={Routes.SIGN_IN} loggedInPath={Routes.BROWSE}>
                    <SignIn />
                </IsUserRedirect>

                <IsUserRedirect user={user} exact path={Routes.SIGN_UP} loggedInPath={Routes.BROWSE}>
                    <SignUp />
                </IsUserRedirect>

                <ProtectedRoute user={user} exact path={Routes.BROWSE} redirectPath={Routes.SIGN_IN}>
                    <Browse />
                </ProtectedRoute>

                <IsUserRedirect user={user} exact path={Routes.HOME} loggedInPath={Routes.BROWSE}>
                    <Home />
                </IsUserRedirect>
            </Switch>
        </Router>
    )
}
