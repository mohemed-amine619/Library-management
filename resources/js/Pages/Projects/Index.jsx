import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
export default function Index ({auth,projects}) {

    return(
    <AuthenticatedLayout
    user={auth} 
    header={
        <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >projects</h2>
    }
    >
           <Head title="projects" />

           <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                   <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                       <div className="p-6 text-gray-900 dark:text-gray-100">
                           <pre>
                            {JSON.stringify(projects,undefined,2)}
                           </pre>
                       </div>
                   </div>
               </div>
           </div>

    </AuthenticatedLayout>
    )
}