# UseKeyboardEvent

##### Listener of keyboard keys

### Installation

```npm i react-usekeyboardevent```
or
```yarn add react-usekeyboardevent```

### Basic Usage

```sh
import {useKeyboardEvent} from 'react-usekeyboardevent';

function App() {

  useKeyboardEvent((event) => {
    console.log(event);
  }, "keydown");

  return (
    <div className="App">
      ...
    </div>
  );
}

export default App;
```

### Parameters

| Argument | Value |
| ------ | ------ |
| Function | (event) => void |
| String | "keyup" \| "keydown" \| "keypress" |
