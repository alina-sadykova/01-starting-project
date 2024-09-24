export default function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button classNam={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
