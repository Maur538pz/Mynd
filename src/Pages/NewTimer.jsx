import { useState } from "react";

export const NewTimer = ({ handleClick, addNewArea }) => {
  const [name, setName] = useState("");
  const changeName = (e) => {
    const newName = e.target.value;
    setName(newName);
  };
  const handleAdds = () => {
    if (name===''){
      return 0
    }
    else{
      addNewArea(name)
      setName('')
      handleClick()
    }
  };
  const handleCancel = () => {
    handleClick();
    setName("");
  };
  return (
    <div>
      <div>
        <span>Nombre</span>
        <input type="text" onChange={changeName} value={name} />
      </div>
      <button>
        <div onClick={handleAdds}>Agregar</div>
      </button>
      <button onClick={handleCancel}>
        <div>Cancelar</div>
      </button>
    </div>
  );
};
