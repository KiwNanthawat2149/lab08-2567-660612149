import Header from "./component/Header";
import TaskLnput from "./component/TaskInput";
import Task from "./component/Task";
import Footer from "./component/Footer";
import { title } from "process";

export default function Home() {
  const tasks = [
    {id: 1, title: "Read a book", isDone: true},
    {id: 2, title: "Take a shower",isDone: false},
    {id: 3, title: "Sleep", isDone: false},
  ];

  return (
    <div className="container mx-auto">
      {/* header section */}
      <Header/>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput/>
        
      
        {/* Task detail */}
        <Task {...tasks[0]}/>
        <Task {...tasks[1]}/>
        <Task {...tasks[2]}/>
      </div>

      {/* //footer section */}
      <Footer year="2024" fullName="Nanthawat Sirisuksumran" studentID="660612149"/>
    </div>
  );
}
