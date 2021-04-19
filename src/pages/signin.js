import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import HeaderContainer from '../containers/header.js'
import FooterContainer from '../containers/footer.js'
import { Form } from '../components'
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'

export default function SignIn() {
    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const history = useHistory()

    const handleSignIn = (e) => {
        e.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((error) => {
                setEmail('')
                setPassword('')
                setError(error.message)
            })
    }

    const isInvalid = email === '' || password === ''

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            type="text"
                            value={email}
                            placeholder="email"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            placeholder="password"
                            autoComplete="off"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to={ROUTES.SIGN_UP}>Sign Up Now</Form.Link>
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
