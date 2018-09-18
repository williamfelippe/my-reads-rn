import React, { Component } from 'react'
import { getAll } from '../services'
import { FloatingActionButton } from '../components'
import Feather from 'react-native-vector-icons/Feather'
import styled from 'styled-components'

const ContainerView = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.colors.background};
`

class HomeScreen extends Component {

	static navigationOptions = {
		title: 'Home'
	}

	state = {
		books: [],
		error: false
	}

	componentDidMount() {
		this.fetchBooks()
			.catch(e => {
				this.setState({
					books: [],
					error: true
				})
			})
	}

	fetchBooks = async () => {
		const response = await getAll() 
		if(response.hasOwnProperty('data')) {
			const { data: { books } } = response
			this.setState({ books, error: false })
		}
	}

	render() {
		return (
			<ContainerView>
				<FloatingActionButton
					size={50}
					icon={
						<Feather
							name="search"
							size={25}
							color="#fff" />
					} />
			</ContainerView>
		)
	}
}

export default HomeScreen