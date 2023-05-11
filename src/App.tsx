import { useState } from "react";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Photo from "./components/Photo";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";

function App() {
  let greeting = 'hay'

  let items = ['Lisbon', 'Big Sur', 'Mountain View'];
  
  let heading = 'Where in the world is Cameron Donahue?';

  const handleSelectedItem = (item: string) => {
    console.log(item)
  }

  const [alertVisible, setAlertVisibility] = useState(false)

  return <div>
    <>
    <Header greeting={greeting}/>
    <Photo />
    <Dropdown />
    <ListGroup items={items} heading={heading} onSelectItem={handleSelectedItem} />
    <Button color='primary' onClick={() => setAlertVisibility(true)}>ask Carmen</Button>
    {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>We'll never know!</Alert>}
    </>
  </div>
}

export default App;