import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/Constants.js";
import TasksTable  from '../Tasks/TasksTable';
export default function Show({auth , project , Tasks , QueryParams}) {
  return(
    <AuthenticatedLayout
    user={auth}
    header={
        <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >
        {`project "${project.name}"`}
        </h2>
    }
    >
          <Head title={`Project "${project.name}"`} />
          <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                   <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                       <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div>
                              <img src={project.image_path} alt="" className="w-full h-64 object-cover" />
                            </div>
                            <div className="grid gap-1 grid-cols-2">
                              <div>
                                <div className="mt-4">
                                  <label htmlFor=""> PROJECT ID :</label>
                                  <p className="mt-1">{project.id}</p>
                                </div>
                                <div  className="mt-4">
                                  <label htmlFor=""> PROJECT NAME :</label>
                                  <p className="mt-1">{project.name}</p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> PROJECT STATUS :</label>
                                  <p className="mt-1">
                                  <span
                                            className={
                                                "px-2 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]
                                            }
                                            >
                                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                  </p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> CREATED BY</label>
                                  <p className="mt-1">{project.created_by.name}</p>
                                </div>
                              </div>
                              <div>
                                <div className="mt-4">
                                  <label htmlFor=""> DUE DATE:</label>
                                  <p className="mt-1">{project.due_date}</p>
                                </div>
                                <div  className="mt-4">
                                  <label htmlFor=""> CREATE DATE</label>
                                  <p className="mt-1">{project.created_at}</p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> UPDATED BY</label>
                                  <p className="mt-1">
                                 {project.updated_by.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                           <label className="font-bold text-lg">
                            PROJECT DESCRIPTION
                           </label>
                           <p className="mt-1">{project.description}</p>
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
                            <TasksTable tasks={Tasks} queryParams={QueryParams} hideProjectColumn = {true}/>
                       </div>
                   </div>
               </div>
          </div>
    </AuthenticatedLayout>
    )

}
