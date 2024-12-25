import Welcome from './components/Welcome';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import ClickButton from './components/ClickButton';
import ToggleMessage from './components/ToggleMessage';
import ItemList from './components/ItemList';
import ControlledForm from './components/ControlledForm';
import Ap from './components/Ap';

function App() {
  return (
    <>
      <Welcome />                      
      <Greeting name="Sanjay" />
      <Counter></Counter>
      <ClickButton></ClickButton>
      <ToggleMessage></ToggleMessage>
      <ItemList></ItemList>
      <ControlledForm></ControlledForm>
      <Ap></Ap>

    </>
  );
}

export default App;
