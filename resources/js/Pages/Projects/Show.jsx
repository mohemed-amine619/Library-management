import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/Constants.js";
export default function Show({auth , project}) {
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
                                <div>
                                  <label htmlFor=""> PROJECT ID</label>
                                  <p className="mt-1">{project.id}</p>
                                </div>
                              </div>
                            </div>
                       </div>
                   </div>
               </div>
          </div>
    </AuthenticatedLayout>
    )

}
