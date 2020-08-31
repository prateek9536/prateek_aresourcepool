import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ChoosePlatform from '../components/ChoosePlatform';
import PersonalDetails from '../components/PersonalDetails';
import SearchResult from '../components/SearchResult';


const MainNavigation = createStackNavigator(
    {
        choosePlatform: {
            screen: ChoosePlatform,
            navigationOptions: {
                header: null
            }
        },
        personalDetails: {
            screen: PersonalDetails
        },
        searchResult: {
            screen: SearchResult
        },
    },
    {
        initialRouteName: 'choosePlatform'
    }
)

const AppContainer = createAppContainer(MainNavigation);
export default AppContainer;