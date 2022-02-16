export const Button = ({ addToCart }) => {
  return (
    <div className="container-btn">
      <button onClick={addToCart}>Adicionar</button>
    </div>
  );
};
