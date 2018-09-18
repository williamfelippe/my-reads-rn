import React, { Component } from 'react'
import { RootStack } from './src/stacks'
import { ThemeProvider } from 'styled-components'
import {
	colorPrimary,
	colorPrimaryDark,
	colorSecondary,
	colorTextDefault,
	colorBackground,
	colorBlack,
	colorWhite
} from './src/utilities/colors.js'

const theme = {
	colors: {
		primary: colorPrimary,
		primaryDark: colorPrimaryDark,
		secondary: colorSecondary,
		textDefault: colorTextDefault,
		background: colorBackground,
		black: colorBlack,
		white: colorWhite
	}
}

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<RootStack />
			</ThemeProvider>
		)
	}
}

export default App