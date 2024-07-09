const HamburgerIcon = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div
      className={`${open ? "open" : ""}`}
      id="nav-icon"
      onClick={() => onClick(!open)}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerIcon;
