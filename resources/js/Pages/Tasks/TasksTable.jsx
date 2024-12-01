import TableHeading from './../../Components/TableHeading';
import { router ,Link } from "@inertiajs/react";
import  TextInput  from '@/Components/TextInput';
import Selectinput from "@/Components/Selectinput";
import Pagination from "@/Components/Pagination";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/Constants.js";
export default function TasksTable ({tasks , queryParams = null , hideProjectColumn = false}) {
  queryParams = queryParams || {}
  const searchFieldChange = (name,value) => {
    if(value){
        queryParams[name] = value;
    }else{
        delete queryParams[name]

    }
    router.get(route('Task.index',queryParams))
}
const onKeyPress = (name , e) => {
    if(e.key !== "Enter") return;

    searchFieldChange(name,e.target.value);
}
const sortedChange = (name) => {
    if(name == queryParams.sort_field){
        if(queryParams.sort_direction == 'asc' ){
            queryParams.sort_direction = "desc"
        } else {
            queryParams.sort_direction = "asc"
        }
    } else {
        queryParams.sort_field = name ;
        queryParams.sort_direction = 'asc'
    }
  router.get(route('Task.index') , queryParams);
}
const deleteproject = (Task) => {
  if(!window.confirm('Are you want to delete the Task')) {
    return ;
  }
   router.delete(route("Task.destroy",Task.id));
}
    return(

      <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
      <div className="p-6 text-gray-900 dark:text-gray-100">


          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
           border-b-2 border-gray-500">

               <tr className="text-nowrap">
                   <TableHeading
                   name = "id"
                   sort_direction={queryParams.sort_direction}
                   sort_field={queryParams.sort_field}
                   sortedChange={sortedChange}
                   >
                       ID
                   </TableHeading>
                   <th
                    className="px-3 py-3">IMAGE
                    </th>
                    {!hideProjectColumn && (
                      <th
                      className="px-3 py-3">PROJECT NAME
                      </th>
                    )}

                   <TableHeading
                   name = "name"
                   sort_direction={queryParams.sort_direction}
                   sort_field={queryParams.sort_field}
                   sortedChange={sortedChange}
                   >
                       NAME
                   </TableHeading>
                   <TableHeading
                   name = "status"
                   sort_direction={queryParams.sort_direction}
                   sort_field={queryParams.sort_field}
                   sortedChange={sortedChange}
                   >
                       STATUS
                   </TableHeading>
                   <TableHeading
                   name = "created_at"
                   sort_direction={queryParams.sort_direction}
                   sort_field={queryParams.sort_field}
                   sortedChange={sortedChange}
                   >
                       CREATED AT
                   </TableHeading>
                   <TableHeading
                   name = "due_date"
                   sort_direction={queryParams.sort_direction}
                   sort_field={queryParams.sort_field}
                   sortedChange={sortedChange}
                   >
                       DUE DATE
                   </TableHeading>
                   <TableHeading
                   name = "priority"
                   sort_direction={queryParams.sort_direction}
                   sort_field={queryParams.sort_field}
                   sortedChange={sortedChange}
                   >
                       TASK PRIORITY
                   </TableHeading>
                   <th
                    className="px-3 py-3">CREATED BY</th>
                   <th
                    className="px-3 py-3">ACTIONS</th>
               </tr>
           </thead>
           <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
           border-b-2 border-gray-500">
               <tr className="text-nowrap">
                   <th className="px-3 py-3"></th>
                   <th className="px-3 py-3"></th>
                   { !hideProjectColumn && <th className="px-3 py-3"></th>}
                   <th className="px-3 py-3">
                       <TextInput className="w-full "
                       defaultValue={queryParams.name}
                       placeholder = "Task Name"
                       onBlur = {e => searchFieldChange("name" , e.target.vakue)}
                       onKeyPress = {e => onKeyPress('name',e)}
                       />
                   </th>
                   <th className="px-3 py-3">
                       <Selectinput defaultValue = {queryParams.status} className="w-full"onChange= {e => searchFieldChange("status", e.target.value)}>
                           <option value="">select Status</option>
                           <option value="pending">pending</option>
                           <option value="in_progress">in progress</option>
                           <option value="completed">completed</option>
                       </Selectinput>
                   </th>
                   <th className="px-3 py-3"></th>
                   <th className="px-3 py-3"></th>
                   <th className="px-3 py-3"></th>
                   <th className="px-3 py-3"></th>
                   <th className="px-3 py-3"></th>
               </tr>
           </thead>
           <tbody>
               {

                   tasks.data.map(task => (
                       <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={task.id}>
                          <td className='px-3 py-2'>{task.id}</td>
                          <td className='px-3 py-2'>
                           <img src={task.image_path} style={{width:60} } />
                          </td>
                          {
                            !hideProjectColumn && (
                              <td>{task.project.name}</td>
                            )
                          }

                          <td className='px-3 py-2 hover:underline'>
                          <Link href={route("Task.show" , task.id)}>
                                            {task.name}
                          </Link>
                          </td>
                          <td className='px-3 py-2'>
                           <span
                           className={
                               "px-2 py-1 rounded text-white " + TASK_STATUS_CLASS_MAP[task.status]
                           }
                           >
                           {TASK_STATUS_TEXT_MAP[task.status]}
                           </span>
                           </td>

                          <td className='px-3 py-2'>{task.created_at}</td>
                          <td className='px-3 py-2'>{task.due_date}</td>
                          <td className='px-3 py-2'>{task.priority}</td>
                          <td className='px-3 py-2'>{task.created_by.name}</td>

                          <td className="px-3 py-2 text-nowrap">
                           <Link
                             href={route('Task.edit',task.id)}
                             className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                           >
                             Edit
                           </Link>
                           <button
                            onClick={(e)=> deleteproject(task)}
                            className="font-medium text-red-600 dark:text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                         </td>
                       </tr>
                  ))
               }

           </tbody>
          </table>
          <Pagination Links={tasks.meta.links} />
      </div>
  </div>
    )
}
