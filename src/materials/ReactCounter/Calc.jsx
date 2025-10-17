export default function Calc({ add, sub }) {
  return (
    <>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
    </>
  );
}
