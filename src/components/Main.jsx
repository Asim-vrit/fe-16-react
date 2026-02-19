export function Main(props) {
  let a = props.a;
  return (
    <main>
      <Card
        b={
          <>
            <hr />
          </>
        }
      >
        <Listitem>{a}</Listitem>
      </Card>
      <Card>
        <ul>
          <li>hi</li>
        </ul>
      </Card>
      <div>jsx</div>
    </main>
  );
}
export function Card(props) {
  console.log(props);
  return (
    <div
      style={{ width: "fit-content", border: "1px solid black", padding: 20 }}
    >
      {props.b}
      <div>{props.children}</div>
    </div>
  );
}

export function Listitem(props) {
  return <div className="list-styles">{props.children}</div>;
}
