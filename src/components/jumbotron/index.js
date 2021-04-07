import React from 'react';
import {Inner, Container, Pane, Title, Subtitle, Image, Item} from './styles/jumbotron';
import PropTypes from 'prop-types';

export default function Jumbotron({children, direction="row", ...restProps}) {

    Jumbotron.propTypes = {
        direction: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired
    }

    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

//compound components
Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}

Jumbotron.Pane = function JumbotronPane({children, ...restProps}) {
    return <Pane {...restProps}> {children} </Pane>
}

Jumbotron.Title = function JumbotronTitle({children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}

Jumbotron.Subtitle = function JumbotronSubtitle({children, ...restProps}) {
    return <Subtitle {...restProps}>{children}</Subtitle>
}

Jumbotron.Image = function JumbotronImage({...restProps}) {
    return <Image {...restProps}/>
}