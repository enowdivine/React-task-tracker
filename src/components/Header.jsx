import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="heading">
      <h2>{title}</h2>
      <Button
        action={showAdd ? "Close" : "Add"}
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
      />
    </header>
  );
};

export default Header;
