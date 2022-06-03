function WebOptions(props) {
  return (
    <div>
      <label htmlFor="pages">Número de {props.name}</label>
      <div className="counter__container">
        <button
          onClick={props.handleClick}
          name="pages"
          id="pagesSubs"
          value={props.value}
        >
          -
        </button>
        <input
          id="pages"
          type="text"
          name="pages"
          value={props.value}
          onChange={props.updateBudget}
          min={1}
        />
        <button
          onClick={props.handleClick}
          name="pages"
          id="pagesAdd"
          value={props.value}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default WebOptions;
