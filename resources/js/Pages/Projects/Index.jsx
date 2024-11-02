import Pagination from "@/Components/Pagination";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/Constants.js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router ,Link } from "@inertiajs/react";
import  TextInput  from '@/Components/TextInput';
import Selectinput from "@/Components/Selectinput";
export default function Index ({auth,projects,queryParams = null }) {
    queryParams = queryParams || {}
    const searchFieldChange = (name,value) => {
        if(value){
            queryParams[name] = value;
        }else{
            delete queryParams[name]
           
        }
        router.get(route('Project.index',queryParams))
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
        router.get(route('Project.index') , queryParams);
    }
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
                                    <th
                                     onClick={(e) => sortedChange('id')}
                                     className="px-3 py-3 ">
                                        <div className="flex items-center justify-between gap-1 cursor-pointer">
                                              ID  
                                            <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-4">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-4 -mt-2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                            </div>
                                        </div>
                                        </th>
                                    <th
                                     className="px-3 py-3">IMAGE</th>
                                    <th
                                     onClick={(e) => sortedChange('name')}
                                     className="px-3 py-3">
                                        <div className="flex items-center justify-between gap-1 cursor-pointer">
                                              Name
                                              <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-4">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-4 -mt-2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                            
                                            </div>
                                        </div>
                                     </th>
                                    <th
                                     onClick={(e) => sortedChange('status')}
                                     className="px-3 py-3">
                                        <div className="flex items-center justify-between gap-1 cursor-pointer">
                                              status 
                                            <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-4">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-4 -mt-2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                            </div>
                                        </div>
                                    </th>
                                    <th
                                     onClick={(e) => sortedChange('created_at')}
                                     className="px-3 py-3">
                                        <div className="flex items-center justify-between gap-1 cursor-pointer ">
                                            CREATE DATE
                                            <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-4">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 w-4 -mt-2">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                            </svg>
                                            </div>
                                        </div>
                                        </th>
                                    <th
                                     onClick={(e) => sortedChange('due_date')}
                                     className="px-3 py-3"><div className="flex items-center justify-between gap-1 cursor-pointer ">
                                     due date
                                     <div>
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"size-4 w- 4 " + (queryParams.sort_field === "due_date" && queryParams.sort_direction === "asc" ? "text-white" : " ")}>
                                       <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                     </svg>
                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={"size-4 w- 4 -mt-2 " + (queryParams.sort_field === "due_date" && queryParams.sort_direction === "desc" ? "text-white" : " ")}>
                                       <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                     </svg>
                                     </div>
                                    </div>
                                    </th>
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
                                    <th className="px-3 py-3">
                                        <TextInput className="w-full " 
                                        defaultValue={queryParams.name}
                                        placeholder = "Project Name"
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
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects.data.map(project => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={project.id}>
                                           <td>{project.id}</td>
                                           <td>
                                            <img src={project.image_path} style={{width:60} } />
                                           </td>
                                           <td>{project.name}</td>
                                           <td>
                                            <span
                                            className={
                                                "px-2 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]
                                            }
                                            >
                                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                            </td>
                                           <td>{project.created_at}</td>
                                           <td>{project.due_date}</td>
                                           <td>{project.created_by.name}</td>
                                           <td className="px-3 py-2 text-nowrap">
                                            <Link
                                              href='#'
                                              className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                            >
                                              Edit
                                            </Link>
                                            <button
                                              onClick={(e) => console.log(e.currentTarget)}
                                              className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                             
                                            >
                                              Delete
                                            </button>
                                          </td>
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