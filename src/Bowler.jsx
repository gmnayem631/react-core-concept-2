import { useState } from "react";

export default function Bowler() {
  const [ball, setBall] = useState(0);

  const handleBall = () => {
    const updatedBall = ball + 1;
    setBall(updatedBall);
  };

  return (
    <div>
      {ball === 6 && <p>Over Completed</p>}
      <h2>Trent Boult</h2>
      <p>Balls completed: {ball}</p>
      <button onClick={handleBall}>Right Ball</button>
      <button>Wide Ball</button>
    </div>
  );
}
