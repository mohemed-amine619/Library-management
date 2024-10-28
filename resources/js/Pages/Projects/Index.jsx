import Pagination from "@/Components/Pagination";
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
                           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
                            border-b-2 border-gray-500">
                                <tr className="text-nowrap">
                                    <th className="px-3 py-2">ID</th>
                                    <th className="px-3 py-2">IMAGE</th>
                                    <th className="px-3 py-2">NAME</th>
                                    <th className="px-3 py-2">STATUS</th>
                                    <th className="px-3 py-2">CREATE DATE</th>
                                    <th className="px-3 py-2">DUE DATE</th>
                                    <th className="px-3 py-2">CREATED BY</th>
                                    <th className="px-3 py-2">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects.data.map(project => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                           <td>{project.id}</td>
                                           <td>
                                            <img src={project.image_path} style={{width:60} } />
                                           </td>
                                           <td>{project.name}</td>
                                           <td>{project.status}</td>
                                           <td>{project.created_at}</td>
                                           <td>{project.due_date}</td>
                                           <td>{project.created_by.name}</td>
                                           <td></td>
                                        </tr>
                                   ))
                                }
                                
                            </tbody>
                           </table>
                           <Pagination Links={projects.meta.links} />
                       </div>
                   </div>
               </div>
           </div>

    </AuthenticatedLayout>
    )
}