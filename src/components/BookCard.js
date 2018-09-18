import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.TouchableHighlight`
    background-color: ${props => props.theme.colors.white };
    box-shadow: 10px 5px 5px ${props => props.theme.colors.black };
`

const BookCard = ({ book, changeBookOfShelf }) => {
    return (
        <Card>
            
        </Card>
    )
}

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
    changeBookOfShelf: PropTypes.func.isRequired
}

export default BookCard