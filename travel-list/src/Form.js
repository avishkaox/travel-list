import { useState } from "react";

function Form(props) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1); 

  function formEventHandler(e) {
    e.preventDefault();
    if (description === "") {
      alert("please enter description");
    } else {
      const newItem = {
        description,
        quantity,
        packed: false,
        id: Date.now(),
      };
      props.handleAddItems(newItem);
      setDescription('');
      setQuantity(1);
    }
  }

  return (
    <form className="add-form" onSubmit={formEventHandler}>
      <h3>What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Input travel Item"
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
