import React from 'react'
// import logo from './logo.svg'
import { Header, Profiles } from '../components'
import * as ROUTES from '../constants/routes'

export default function SelectProfileContainer({ user, setProfile }) {
    console.log('user is', user)
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo src="logo.svg" to={ROUTES.HOME} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title> Who's Watching </Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() =>
                            setProfile({
                                displayName: user.displayName,
                                photoURL: user.photoURL,
                            })
                        }
                    >
                        <Profiles.Picture src={user?.photoURL} alt="userImage1" />
                        <Profiles.Name>{user?.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}
