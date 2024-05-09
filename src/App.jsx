import Collapse from "./components/Collapse.jsx";
function App() {
  const text = "collapse me";
  return (
    <>
      <Collapse text={text} opened={false} />
    </>
  );
}
export default App;
