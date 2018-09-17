import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Card = styled.TouchableHighlight`
    background-color: #fff;
    border-color: #f4f4f4;
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