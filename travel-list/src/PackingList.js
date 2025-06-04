function PackingList(props) {
  return (
    <div className="list">
      <ul>
        {props.array.map((item, index) => (
          <li key={index} id={item.id}>
            <input type="checkbox" value={item.packed} onChange={()=>props.handleUpdateItem(item.id)} />
            <span style={item.packed ? {textDecoration:'line-through'} : {} } >{item.quantity} {item.description}</span>
            <button onClick={()=>props.handleDeleteItem(item.id)} >❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
