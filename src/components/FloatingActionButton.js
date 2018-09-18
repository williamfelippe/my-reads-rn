import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Fab = styled.TouchableHighlight`
    background-color: ${props => props.theme.colors.primary};
    
    border-radius: 100;
    border-width: 1;
    border-color: rgba(0, 0, 0, 0.2);

    align-items: center;
    justify-content: center;


    width: ${props => props.size};
    height: ${props => props.size};
    box-shadow: 10px 5px 5px ${props => props.theme.colors.black};

    position: absolute;
    bottom: 15;
    right: 15;
`

const FloatingActionButton = ({ icon, size, ...rest }) => {
    return (
        <Fab {...rest} size={size}>
            {icon}
        </Fab>
    )
}

FloatingActionButton.defaultProps = {
    size: 30
}

FloatingActionButton.propTypes = {
    icon: PropTypes.element.isRequired,
    size: PropTypes.number
}

export default FloatingActionButton