/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Background, Container, Logo, ButtonLink } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
    Header.propsType = {
        bg: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    }
    return bg ? <Background {...restProps}>{children}</Background> : children
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
    return (
        <ReactRouterLink to={to}>
            <Logo {...restProps} />
        </ReactRouterLink>
    )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
    return <ButtonLink {...restProps}>{children}</ButtonLink>
}
