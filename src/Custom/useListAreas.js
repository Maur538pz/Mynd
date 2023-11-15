import { useState, useEffect } from "react";
import { useGetId } from "./useGetId.js";

export const useListAreas = () => {
  const [areas, setAreas] = useState(()=>{
    const getItemsList = localStorage.getItem("listAreas");
    if(getItemsList){
        return JSON.parse(getItemsList);
    }
    return []
  });
 
  const idLocal = useGetId();

  const start = (id) => {
    const timeInit = new Date();
    const stringTime = JSON.stringify(timeInit);
    const newState = areas.map((e) =>
      e.id === id ? { ...e, start: stringTime } : e
    );
    setAreas(newState);
  };

  const end = (id) => {
    const ultimeTime = new Date();
    const timeInit = new Date(JSON.parse(areas.find((e) => id === e.id).start));
    const diffMinutes = Math.floor((ultimeTime - timeInit) / 60000);
    const newMinutes = areas.map((e) =>
      e.id === id ? { ...e, time: e.time + diffMinutes } : e
    );
    setAreas(newMinutes);
  };

  const newArea = (nameNewArea) => {
    const newAreas = [
      ...areas,
      { id: idLocal.id, area: nameNewArea, time: 0, start: "" },
    ];
    setAreas(newAreas);
    idLocal.genNewId();
  };

  const deleteArea = (delId) => {
    const filterAreas = areas.filter((e) => e.id !== delId);
    setAreas(filterAreas);
  };

  useEffect(() => {
    localStorage.setItem("listAreas", JSON.stringify(areas));
  }, [areas]);



  return {
    areas,
    start,
    end,
    newArea,
    deleteArea,
  };
};
