import CreateTodo from "./_components/CreateTodo";
import Todo from "./_components/Todo";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10  p-24">
      <h2 className="font-bold text-xl">Daily Task Checklist</h2>
      <CreateTodo/>
      <Todo/>
    </main>
  );
}
