import React from 'react'
import { HeaderContainer, FooterContainer, FaqsContainer, JumbotronContainer } from '../containers'
import { OptForm, Feature } from '../components'

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title> Unlimited films, TV programs and more. </Feature.Title>
                    <Feature.SubTitle> Watch anywhere. Cancel anytime. </Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input placeholder="Email Address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>
                            {' '}
                            Ready to watch? Enter your email to create or restart your membership.{' '}
                        </OptForm.Text>
                    </OptForm>
                </Feature>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}
