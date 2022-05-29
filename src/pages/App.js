// File Import
import { UserList } from '../components/todos/UserList';
import { AddTodo } from '../components/todos/AddTodo';

function App() {
  return (
    <div className='App'>
      <div>
        <AddTodo />
        <UserList />
      </div>
    </div>
  );
}

export default App;
