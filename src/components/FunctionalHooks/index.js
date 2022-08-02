import React, { useState } from 'react';

function ExampleComponent() {
  // Declare a new state variable, which we'll call `count` with an initial value of `0`
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default ExampleComponent