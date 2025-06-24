import './App.css'
import Todo from './components/Todo'

import { Provider } from 'react-redux'; //It will be used in passing store once to the parent that
// can be user in each of its chile component.
import { store } from './app/store'; //Redux Store




function App() {

  return (
    <Provider store={store}>
      <Todo  />
    </Provider>

  )
}

export default App
