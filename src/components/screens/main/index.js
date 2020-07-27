import Choice from './choice'
import Recipe from './recipe'
import Suggestion from './suggestion'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'


const mainNavigator = createAppContainer(createSwitchNavigator({
    ChoiceScreen: Choice,
    SuggestionScreen: Suggestion,
    RecipeScreen: Recipe
}))

export default mainNavigator