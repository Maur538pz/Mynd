import "./App.css";
import { TimeTrackerLocal } from "./Pages/TimeTrackerLocal.jsx";
import { AddTimeTracker } from "./Pages/AddTimeTracker.jsx";
import { useListAreas } from "./Custom/useListAreas.js";
function App() {
  const { areas, start, end, newArea, deleteArea } = useListAreas();

  return (
    <div className="cont_prin">
      <h1 className="Title">Mynds v1.0.0</h1>
      <ul className="cont-list">
        {areas.map(({ id, area, time }) => (
          <TimeTrackerLocal
            key={id}
            id={id}
            area={area}
            time={time}
            handleInit={start}
            handleEnd={end}
            deleteArea={deleteArea}
          />
        ))}
      </ul>
      <AddTimeTracker addNewArea={newArea} />
    </div>
  );
}

export default App;
