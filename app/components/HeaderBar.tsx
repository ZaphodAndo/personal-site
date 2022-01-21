import { Link } from "remix";

type HeaderBarProps = {
  title: string;
};

function HeaderBar({ title }: HeaderBarProps) {
  return (
    <div className="header-bar">
      <h1>{title}</h1>
      <hr />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/thoughts">Thoughts</Link>
        <Link to="/now">Now</Link>
      </div>
    </div>
  );
}

export default HeaderBar;
