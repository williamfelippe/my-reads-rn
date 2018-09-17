import { StackNavigator } from 'react-navigation'
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
        initialRouteName: 'Home'
    }
)

export default RootStack