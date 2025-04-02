import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);

  const handleSingle = () => {
    const updatedRun = runs + 1;
    setRuns(updatedRun);
  };

  const handleFour = () => {
    const updatedRun = runs + 4;
    setRuns(updatedRun);
  };

  const handleSix = () => {
    const updatedRun = runs + 6;
    setRuns(updatedRun);
  };

  return (
    <div>
      <h3>Player: Bangladesh</h3>
      {runs >= 50 && <p>Half Century Completed!</p>}
      <p>{runs} runs</p>
      <button onClick={handleSingle}>Single</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
    </div>
  );
}
