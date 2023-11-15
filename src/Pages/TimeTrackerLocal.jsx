import "./stylePage.css";
import { useState } from "react";

export const TimeTrackerLocal = (
  {id, area, time, handleInit, handleEnd, deleteArea}) => {
  const [registrando, setRegistrando] = useState(false);
  const estado = registrando ? "Detener" : "Iniciar";
  const hourView = Math.floor(time/60)
  const minutesView = time%60 
  const timeView=`${(hourView>0)?`${hourView} h`:''} ${minutesView} min`

  const handleButton = () => {
    if(registrando){
      handleEnd(id)
    }
    else{
      handleInit(id)
    }
    setRegistrando((prevEstado) => !prevEstado);
  };
  const handleDelete = () => {
    deleteArea(id)
  }
  return (
    <div className="TrackerApp">
      <div className="TrackerApp--Materia">
        <span className="TrackerApp--Materia_Tema">{area}</span>
        <div className="TackerApp--Materia_Cont_Timepo">
          <span className="TrackerApp--Materia_tiempo">{timeView}</span>
          <button className="TrackerApp--Materia_Button" onClick={handleButton}>
            <span>{estado}</span>
          </button>
        </div>
        <span onClick={handleDelete} className="Tracker--App__Delete">Eliminar</span>
      </div>
    </div>
  );
};
