import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router ,Link } from "@inertiajs/react";
export default function Create(auth) {
  return (
    <AuthenticatedLayout
    user={auth}
    header={
      <div className="flex justify-between items-center">
           <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >projects</h2>
           <Link href= {route("Project.create")} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
           Add New
           </Link>
           <Link href= {route("Project.create")} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
           Add New
           </Link>
           <Link href= {route("Project.create")} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
           Add New
           </Link>
      </div>
    }
    >
           <Head title="projects" />

           <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                   <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                       <div className="p-6 text-gray-900 dark:text-gray-100">
                         
                           
                       </div>
                   </div>
               </div>
           </div>

    </AuthenticatedLayout>
  )
}