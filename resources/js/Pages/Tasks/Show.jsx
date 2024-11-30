import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/Constants.js";
import TasksTable from './../Tasks/TasksTable';
export default function Show({auth , task , Tasks , QueryParams}) {
  return(
    <AuthenticatedLayout
    user={auth}
    header={
        <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >
        {`task "${task.name}"`}
        </h2>
    }
    >
          <Head title={`Task "${task.name}"`} />
          <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                   <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                       <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div>
                              <img src={task.image_path} alt="" className="w-full h-64 object-cover" />
                            </div>
                            <div className="grid gap-1 grid-cols-2">
                              <div>
                                <div className="mt-4">
                                  <label htmlFor=""> TASK ID :</label>
                                  <p className="mt-1">{task.id}</p>
                                </div>
                                <div  className="mt-4">
                                  <label htmlFor=""> TASK NAME :</label>
                                  <p className="mt-1">{task.name}</p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> TASK STATUS :</label>
                                  <p className="mt-1">
                                  <span
                                            className={
                                                "px-2 py-1 rounded text-white " + TASK_STATUS_CLASS_MAP[task.status]
                                            }
                                            >
                                            {TASK_STATUS_TEXT_MAP[task.status]}
                                            </span>
                                  </p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> CREATED BY</label>
                                  <p className="mt-1">{task.created_by.name}</p>
                                </div>
                              </div>
                              <div>
                                <div className="mt-4">
                                  <label htmlFor=""> DUE DATE:</label>
                                  <p className="mt-1">{task.due_date}</p>
                                </div>
                                <div  className="mt-4">
                                  <label htmlFor=""> CREATE DATE</label>
                                  <p className="mt-1">{task.created_at}</p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> UPDATED BY</label>
                                  <p className="mt-1">
                                 {task.updated_by.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                           <label className="font-bold text-lg">
                            TASK DESCRIPTION
                           </label>
                           <p className="mt-1">{task.description}</p>
                            </div>
                       </div>
                   </div>
               </div>
          </div>
          <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                   <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                       <div className="p-6 text-gray-900 dark:text-gray-100">
                           {/* TABLE GOES HERE  */}
                            <TasksTable tasks={Tasks} queryParams={QueryParams} hideTaskColumn = {true}/>
                       </div>
                   </div>
               </div>
          </div>
    </AuthenticatedLayout>
    )

}
