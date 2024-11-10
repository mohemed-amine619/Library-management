import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head} from "@inertiajs/react";
import TasksTable from "./TasksTable";
export default function Index ({auth,Tasks, QueryParams }) {
    
    return(
    <AuthenticatedLayout
    user={auth}
    header={
        <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >tasks</h2>
    }
    >
           <Head title="tasks" />

           <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                  <TasksTable tasks={Tasks} queryParams={QueryParams}/>
               </div>
           </div>

    </AuthenticatedLayout>
    )
}
