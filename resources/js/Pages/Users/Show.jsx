import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/Constants.js";
import TasksTable from './../Tasks/TasksTable';
export default function Show({auth , USER , Tasks , QueryParams}) {
  return(
    <AuthenticatedLayout
    user={auth}
    header={
        <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >
        {`USER "${USER.name}"`}
        </h2>
    }
    >
          <Head title={`USER "${USER.name}"`} />
          <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                   <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                       <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div>
                              <img src={USER.image_path} alt="" className="w-full h-64 object-cover" />
                            </div>
                            <div className="grid gap-1 grid-cols-2">
                              <div>
                                <div className="mt-4">
                                  <label htmlFor=""> USER ID :</label>
                                  <p className="mt-1">{USER.id}</p>
                                </div>
                                <div  className="mt-4">
                                  <label htmlFor=""> USER NAME :</label>
                                  <p className="mt-1">{USER.name}</p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> USER STATUS :</label>
                                  <p className="mt-1">
                                  <span
                                            className={
                                                "px-2 py-1 rounded text-white " + USER_STATUS_CLASS_MAP[USER.status]
                                            }
                                            >
                                            {USER_STATUS_TEXT_MAP[USER.status]}
                                            </span>
                                  </p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> CREATED BY</label>
                                  <p className="mt-1">{USER.created_by.name}</p>
                                </div>
                              </div>
                              <div>
                                <div className="mt-4">
                                  <label htmlFor=""> DUE DATE:</label>
                                  <p className="mt-1">{USER.due_date}</p>
                                </div>
                                <div  className="mt-4">
                                  <label htmlFor=""> CREATE DATE</label>
                                  <p className="mt-1">{USER.created_at}</p>
                                </div>
                                <div className="mt-4">
                                  <label htmlFor=""> UPDATED BY</label>
                                  <p className="mt-1">
                                 {USER.updated_by.name}
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="mt-4">
                           <label className="font-bold text-lg">
                            USER DESCRIPTION
                           </label>
                           <p className="mt-1">{USER.description}</p>
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
                            <TasksTable tasks={Tasks} queryParams={QueryParams} hideUSERColumn = {true}/>
                       </div>
                   </div>
               </div>
          </div>
    </AuthenticatedLayout>
    )

}
