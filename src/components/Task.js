// import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
const Task = ({ task, onDelete, onEdit }) => {
    return (
      <div>
        <div className="task">
          <div>
            <p className="taskName">
              <span className="textBold">Task Name:</span> {task.text}
            </p>
        <p className="taskDate"><span className="textBold">Date of Completion:</span>              {task.day}
            </p>
            </div>
            <div>
            <p><button onClick={() => onDelete(task.id)} className="delIcon" > Delete</button></p>
          <p><button onClick={() => onEdit(task.id)} className="editIcon" > Edit</button></p>
          </div>
        </div>
      </div>
    )
}
export default Task;