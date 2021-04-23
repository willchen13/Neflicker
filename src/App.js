/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as Routes from './constants/routes'
import { Home, Browse, SignIn, SignUp } from './pages'
import { PublicRoute, PrivateRoute } from './helpers/routes'
import { useAuthListener } from './hooks'

export default function App() {
    const { user } = useAuthListener()

    console.log('user.photoURL', user.photoURL)
    return (
        <Router>
            <Switch>
                <PublicRoute user={user} exact path={Routes.SIGN_IN} loggedInPath={Routes.BROWSE}>
                    <SignIn />
                </PublicRoute>

                <PublicRoute user={user} exact path={Routes.SIGN_UP} loggedInPath={Routes.BROWSE}>
                    <SignUp />
                </PublicRoute>

                <PrivateRoute user={user} exact path={Routes.BROWSE} redirectPath={Routes.SIGN_IN}>
                    <Browse />
                </PrivateRoute>

                <PublicRoute user={user} exact path={Routes.HOME} loggedInPath={Routes.BROWSE}>
                    <Home />
                </PublicRoute>
            </Switch>
        </Router>
    )
}
