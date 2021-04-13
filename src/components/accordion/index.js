/* eslint-disable react/prop-types */
import React, {useState, useContext, createContext} from 'react';
import {Container,Title,Frame,Item,Header,Body} from './styles/accordion.js';
import PropTypes from 'prop-types';

const ToggleContext = createContext();

export default function Accordion({children, ...restProps}) {

    Accordion.propTypes = {
        children: PropTypes.node.isRequired
    }
    return(<Container {...restProps}>{children}</Container>)
}

Accordion.Title = function AccordionTitle({children, ...restProps}){
    return(<Title {...restProps}>{children}</Title>)
}

Accordion.Frame = function AccordionFrame({children, ...restProps}){
    return(<Frame {...restProps}>{children}</Frame>)
}

Accordion.Item = function AccordionItem({children, ...restProps}) {

    const [toggleShow, setToggleShow] = useState(false);
    
    return(
        <ToggleContext.Provider value={{toggleShow, setToggleShow}}>
            <Item {...restProps}>
                {children}
            </Item>
        </ToggleContext.Provider>
    )
}

Accordion.Header = function AccordionHeader({children, ...restProps}){

    // eslint-disable-next-line no-unused-vars
    const {toggleShow, setToggleShow} = useContext(ToggleContext);

    return(<Header {...restProps} onClick={()=>setToggleShow((toggleShow) => !toggleShow)}>{children}</Header>)
}

Accordion.Body = function AccordionBody({children, ...restProps}){

    const {toggleShow} = useContext(ToggleContext);

    return(toggleShow ? <Body {...restProps}> {children} </Body> : null)
}