import { useState } from 'react';

function ToggleMessage() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div>
      <button onClick={() => setShowMessage(!showMessage)}>
        {showMessage ? 'Hide' : 'Show'} Message
      </button>
      {showMessage && <p>This is a toggleable message!</p>}
    </div>
  );
}

export default ToggleMessage;
