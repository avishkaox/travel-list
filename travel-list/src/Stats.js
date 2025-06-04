
function Stats(props) {
  return (
    <footer className="stats">
      You have {props.total} items on your list, and you already packed {props.totalpacked} and {props.percentage()}%
    </footer>
  );
}

export default Stats;
