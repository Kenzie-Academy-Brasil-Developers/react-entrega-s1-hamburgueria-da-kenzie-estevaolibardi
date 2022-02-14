import "./style.css";

export const InputSearch = ({ showProducts, words, setWords, funcFilter }) => {
  return (
    <div className="container-input">
      <div className="subcontainer-input">
        <input
          className="input-text"
          type="text"
          value={words}
          placeholder="Digitar Pesquisa"
          onChange={(e) => setWords(e.target.value)}
        />
        <div>
          <button onClick={funcFilter}>Pesquisar</button>
        </div>
      </div>
    </div>
  );
};
