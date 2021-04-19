/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Title, SubTitle } from './styles/feature'

export default function Feature({ children, ...restProps }) {
    Feature.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return <Container {...restProps}>{children}</Container>
}

Feature.Title = function FeatureTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Feature.SubTitle = function FeatureSubtitle({ children, ...restProps }) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
