import React from 'react'
import { View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import {
    colorPrimary,
    colorWhite
} from '../utilities/colors'
import {
    HomeScreen,
    BookDetailScreen,
    SearchScreen
} from '../screens'

const RootStack = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
        BookDetail: {
            screen: BookDetailScreen,
        },
        Search: {
            screen: SearchScreen,
        }
    },
    {
        initialRouteName: 'Home',
        /* The header config from HomeScreen is now here */
        navigationOptions: {
            headerTintColor: colorWhite,
            headerStyle: {
                backgroundColor: colorPrimary,
                borderWidth: 0,
                elevation: 0,
                shadowOpacity: 0
            },
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 17,
                textAlign: 'center',
                flex: 1
            },
            headerLeft: (<View />),
            headerRight: (<View />)
        },
    }
)

export default RootStack