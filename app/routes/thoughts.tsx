import { Link } from "remix";
import HeaderBar from "~/components/HeaderBar";

export default function Thoughts() {
  return (
    <div>
      <HeaderBar title="My random thoughts and ideas on tech and other things." />
      <p>This is the thoughts page</p>
      <Link to="/"></Link>
    </div>
  );
}
