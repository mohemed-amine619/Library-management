import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head , Link} from "@inertiajs/react";
import TasksTable from "./TasksTable";
export default function Index ({auth,Tasks, QueryParams , success}) {

    return(
    <AuthenticatedLayout
    user={auth}
    header={
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >tasks</h2>
        <Link href= {route("Task.create")} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
           Add New
        </Link>
      </div>
    }
    >
           <Head title="tasks" />

           <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                 {success && (
                   <div className="bg-emerald-500 py-2 px-4 text-white rounded mb-4">
                    {success}
                 </div>
                  )}
                  <TasksTable tasks={Tasks}  queryParams={QueryParams}/>
               </div>
           </div>
    </AuthenticatedLayout>
    )
}
