/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import HeaderContainer from '../containers/header.js'
import FooterContainer from '../containers/footer.js'
import { Form } from '../components'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSignIn = (e) => {
        e.preventDefault()
    }

    const isInvalid = email === '' || password === ''

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {!error && <Form.Error>I am an error</Form.Error>}
                    <Form.Base onSubmit={handleSignIn} method="POST">
                        <Form.Input
                            type="text"
                            value={email}
                            placeholder="email"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            placeholder="password"
                            autoComplete="off"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                        </Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}
