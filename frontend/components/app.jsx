import React from 'react';
import signup_container from './session/signup_container';
const App = () =>(
    <div>
        <Route path="/signup" component={signup_container}/>
    </div>
)

export default App;  