import React from 'react';
import Counter from './counter/counter.component';
import Toggler from './toggler/toggler.component';
import SimpleForm from './simple-form/simple-form.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggler />
      <SimpleForm />
    </div>
  );
}

export default App;
