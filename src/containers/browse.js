/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react'
import SelectProfileContainer from './profiles'
import { FirebaseContext } from '../context/firebase'
import { Loading, Header } from '../components'

export default function BrowseContainer({ slides }) {
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('profile', profile)
        setTimeout(() => {
            setLoading(false)
        }, 3000)
    }, [profile.displayName])

    return profile.displayName ? (
        <>
            {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
            <Header src="joker1">
                <p>hello</p>
            </Header>
        </>
    ) : (
        <SelectProfileContainer user={user} setProfile={setProfile} />
    )
}
