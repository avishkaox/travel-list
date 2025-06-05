
function Stats(props) {
  return (
    <footer className="stats">
      {props.percentage() === 100 ? <p>Now you are ready to go</p> :  <p> You have {props.total} items on your list, and you already packed {props.totalpacked} and {props.percentage()}%</p> }
    </footer>
  );
}

export default Stats;
