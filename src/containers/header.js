import React from 'react';
import {Header} from '../components';
import * as ROUTES from '../constants/routes';
import PropTypes from 'prop-types';

export default function HeaderContainer({children}){

    HeaderContainer.propTypes = {
        children: PropTypes.node.isRequired
    }
    return(
        <Header>
            <Header.Frame>
                <Header.Logo src='logo.svg' to={ROUTES.HOME} alt="Netflix"/>
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}