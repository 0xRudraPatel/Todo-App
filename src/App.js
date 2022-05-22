import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React.js" />
      <Todo text="Explore Next.js" />
      <Todo text="Try Tailwind CSS" />
    </div>
  );
}

export default App;
