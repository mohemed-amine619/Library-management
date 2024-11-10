import Pagination from "@/Components/Pagination";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/Constants.js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router ,Link } from "@inertiajs/react";
import  TextInput  from '@/Components/TextInput';
import Selectinput from "@/Components/Selectinput";
import TableHeading from './../../Components/TableHeading';
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
      <div className="flex justify-between items-center">
           <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >projects</h2>
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
                           <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400
                            border-b-2 border-gray-500">
                                <tr className="text-nowrap">
                                    <TableHeading
                                    name = "id"
                                    sort_direction={queryParams.sort_direction}
                                    sort_field={queryParams.sort_field}
                                    sortedChange={sortedChange}
                                    >
                                        ID
                                    </TableHeading>
                                    <th
                                     className="px-3 py-3">IMAGE
                                     </th>
                                    <TableHeading
                                    name = "name"
                                    sort_direction={queryParams.sort_direction}
                                    sort_field={queryParams.sort_field}
                                    sortedChange={sortedChange}
                                    >
                                        NAME
                                    </TableHeading>
                                    <TableHeading
                                    name = "status"
                                    sort_direction={queryParams.sort_direction}
                                    sort_field={queryParams.sort_field}
                                    sortedChange={sortedChange}
                                    >
                                        STATUS
                                    </TableHeading>
                                    <TableHeading
                                    name = "created_at"
                                    sort_direction={queryParams.sort_direction}
                                    sort_field={queryParams.sort_field}
                                    sortedChange={sortedChange}
                                    >
                                        CREATED AT
                                    </TableHeading>
                                    <TableHeading
                                    name = "due_date"
                                    sort_direction={queryParams.sort_direction}
                                    sort_field={queryParams.sort_field}
                                    sortedChange={sortedChange}
                                    >
                                        DUE DATE
                                    </TableHeading>

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
                                           <td className="px-3 py-2">{project.id}</td>
                                           <td className="px-3 py-2">
                                            <img src={project.image_path} style={{width:60} } />
                                           </td>
                                           <th className="px-3 py-2 hover:underline">
                                            <Link href={route("Project.show" , project.id)}>
                                            {project.name}
                                            </Link>
                                           </th>
                                           <td className="px-3 py-2">
                                            <span
                                            className={
                                                "px-2 py-1 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status]
                                            }
                                            >
                                            {PROJECT_STATUS_TEXT_MAP[project.status]}
                                            </span>
                                            </td>
                                           <td className="px-3 py-2">{project.created_at}</td>
                                           <td className="px-3 py-2">{project.due_date}</td>
                                           <td className="px-3 py-2">{project.created_by.name}</td>
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
