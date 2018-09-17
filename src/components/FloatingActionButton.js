import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Fab = styled.TouchableHighlight`
    background-color: red;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    width: ${props => props.size ? props.size : 30};
    height: ${props => props.size ? props.size : 30};
`

const FloatingActionButton = ({ icon, size, ...rest }) => {
    return (
        <Fab {...rest} size={size}>
            {icon}
        </Fab>
    )
}

FloatingActionButton.propTypes = {
    icon: PropTypes.object.isRequired,
    size: PropTypes.number
}

export default FloatingActionButton