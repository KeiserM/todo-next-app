import { MdOutlineDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";

const Todo = ({
  id,
  title,
  description,
  mongoId,
  complete,
  deleteTodo,
  completedTodo,
}) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {id + 1}
      </th>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>{title}</td>
      <td className={`px-6 py-4 ${complete ? "line-through" : ""}`}>
        {description}
      </td>
      <td className="px-6 py-4">{complete ? "Complete" : "Pending"}</td>
      <td className="px-6 py-4 flex gap-5">
        <button
          onClick={() => deleteTodo(mongoId)}
          className="text-red-400 rounded-full hover:bg-red-200 transition-[0.2] "
        >
          <MdOutlineDeleteForever size={25} />
        </button>
        {complete ? (
          ""
        ) : (
          <button
            onClick={() => completedTodo(mongoId)}
            className="text-green-400 rounded-full hover:text-green-600  transition-[0.2] "
          >
            <FaCheckCircle size={25} />
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
