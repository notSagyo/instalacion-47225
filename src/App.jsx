import { useState } from 'react';

function App() {
  const [cuenta, setCuenta] = useState(0);
  const handleClick = () => setCuenta((prev) => prev + 1);
  return (
    <div>
      <button onClick={handleClick}>{cuenta}</button>
    </div>
  );
}
export default App;
