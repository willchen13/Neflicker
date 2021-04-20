/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={() => {
                if (!user) {
                    return children
                }
                if (user) {
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath,
                            }}
                        />
                    )
                }
                return null
            }}
        />
    )
}

export function ProtectedRoute({ user, children, redirectPath, ...restProps }) {
    return (
        <Route
            {...restProps}
            render={({ location }) => {
                if (user) {
                    return children
                }
                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: redirectPath,
                                state: { from: location },
                            }}
                        />
                    )
                }
                return null
            }}
        />
    )
}
