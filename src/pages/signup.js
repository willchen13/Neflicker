/* eslint-disable no-unused-vars */
import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import HeaderContainer from '../containers/header.js'
import FooterContainer from '../containers/footer.js'
import { Form } from '../components'
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

export default function SignUp() {
    const { history } = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName === '' || email === '' || password === ''

    const handleSignUp = (e) => {
        e.preventDefault()
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((result) =>
                result.user
                    .updateProfile({
                        displayName: firstName,
                        photoURL: Math.floor(Math.random * 5) + 1,
                    })
                    .then(() => history.push(ROUTES.BROWSE))
            )
            .catch((error) => {
                setFirstName('')
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title> Sign Up</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignUp} method="POST">
                        <Form.Input
                            type="text"
                            value={firstName}
                            placeholder="First Name"
                            onChange={(e) => setFirstName(e.target.value)}
                            autoComplete="off"
                        />
                        <Form.Input
                            type="text"
                            value={email}
                            placeHolder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="off"
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="off"
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign Up
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        Already a User? <Form.Link to={ROUTES.SIGN_IN}>Sign In Now</Form.Link>
                    </Form.Text>

                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
