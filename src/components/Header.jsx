import "./header.css";
let headerStyle = { backgroundColor: "white" };
export default function Header() {
  return (
    <header className="header" style={headerStyle}>
      <nav>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}
