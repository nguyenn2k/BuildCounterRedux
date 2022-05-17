//Import Library:
import React from 'react'
import { Provider } from 'react-redux'

//Import Component:
import Counter from './source/Counter'
import { store } from './source/store/store'

const App = (props) => {
  return ( 
    <Provider store ={store}>
      {/**Thêm component Counter vào */}
      <Counter/>
    </Provider>
  );
};

export default App;