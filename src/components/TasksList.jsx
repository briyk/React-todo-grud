import TaskItem from './TaskItem'
//add styles module
import styles from './TaskList.module.css'

const TasksList = ({tasks , deleteTask,updateTask}) => {
     return ( 
          <ul className={styles.tasks}>
               {
                    tasks.sort( (a,b) => b.id - a.id ).map( task =>(
                         <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
                    ))
               }
          </ul>
     );
}
 
export default TasksList;