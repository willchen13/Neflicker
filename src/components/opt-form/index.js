/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Container, Input, Button, Text, Break } from './styles/opt-form'

export default function OptForm({ children, ...restProps }) {
    OptForm.propTypes = {
        children: PropTypes.node.isRequired,
    }

    return <Container {...restProps}>{children}</Container>
}

OptForm.Input = function OptFormInput({ children, ...restProps }) {
    return <Input {...restProps}>{children}</Input>
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>
}

OptForm.Break = function OptFormBreak({ children, ...restProps }) {
    return <Break {...restProps}>{children}</Break>
}
