export default function TabButton({ children, onClick, isSelected }) {
  return (
    <li>
      <button classNam={isSelected ? "active" : ""} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
