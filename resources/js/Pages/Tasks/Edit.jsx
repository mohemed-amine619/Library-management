import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link,useForm } from "@inertiajs/react";
import TextInput from '@/Components/TextInput';
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";
export default function Edit({auth , task , projects , users}) {
  const { data, setData, post, errors, reset } = useForm({
    image: "",
    name: task.name || "",
    status: task.status || "",
    description: task.description || "",
    due_date: task.due_date || "",
    project_id: task.project.id || "",
    priority: task.priority || "",
    asseigned_user_id: task.assignedUser.id || "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();

    post(route("Task.update", task.id));
  };
  return (

    <AuthenticatedLayout
    user={auth}
    header={
      <div className="flex justify-between items-center">
           <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >
                Edit task "{task.name}"
            </h2>
      </div>
    }
    >
           <Head title="tasks" />

           <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                   <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                       <div className="p-6 text-gray-900 dark:text-gray-100">
                       <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow-sm:rounded-lg"
                            >

                              {task.image_path && (
                                <div className="mb-4">
                                  <img src={task.image_path} alt=""  className="w-64"
                                   />
                                </div>
                              )}
                              <div className="mt-4">
                                    <InputLabel htmlFor="task_project_id" value="Project" />
                                    <SelectInput
                                    name="task_project_id"
                                    id="task_project_id"
                                    value={data.project_id}
                                    className="mt-1 h-10 block w-1/3"
                                    onChange={e => setData('project_id' , e.target.value)}
                                    >
                                      <option value="">Select project</option>
                                      <option value="">Select project</option>
                                      {projects.data.map((project) => (
                                         <option value={project.id} key={project.id}>{project.name}</option>
                                      ))}
                                    </SelectInput>
                                    <InputError
                                    message={errors.project_id} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="task_image_path" value="task image" />
                                    <TextInput
                                    id="task_image_path"
                                    type="file"
                                    name="image"
                                    className="mt-1  block w-full"
                                    onChange={e => setData('image' , e.target.files[0])}
                                    />
                                    <InputError
                                    message={errors.image} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="task_name" value="Task Name" />
                                    <TextInput
                                    id="task_image_path"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    isFocused = {true}
                                    className="mt-1 h-10 block w-full"
                                    onChange={e => setData('name' , e.target.value)}
                                    />
                                    <InputError
                                    message={errors.name} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="task_due_date" value="Task deadline" />
                                    <TextInput
                                    id="task_due_date"
                                    type="date"
                                    name="due_date"
                                    value={data.due_date}
                                    className="mt-1 h-10 block w-full"
                                    onChange={e => setData('due_date' , e.target.value)}
                                    />
                                    <InputError
                                    message={errors.due_date} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="task_description" value="Task Description" />
                                    <TextAreaInput
                                     id="task_description"
                                     name="description"
                                     value={data.description}
                                     className="mt-1 block w-full"
                                     onChange={(e) => setData("description", e.target.value)}
                                    />
                                    <InputError
                                    message={errors.description} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="task_status" value="Task Status" />
                                    <SelectInput
                                    name="status"
                                    value={data.status}
                                    className="mt-1 h-10 block w-full"
                                    onChange={e => setData('status' , e.target.value)}
                                    >
                                      <option value="">Select status</option>
                                      <option value="completed">completed</option>
                                      <option value="pending">pending</option>
                                      <option value="in_progress">In progress</option>
                                    </SelectInput>
                                    <InputError
                                    message={errors.status} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="task_priority" value="Task priority" />
                                    <SelectInput
                                    name="priority"
                                    value={data.priority}
                                    className="mt-1 h-10 block w-1/3"
                                    onChange={e => setData('priority' , e.target.value)}
                                    >
                                      <option value="">Select priority</option>
                                      <option value="hight">hight</option>
                                      <option value="medium">medium</option>
                                      <option value="low">low</option>
                                    </SelectInput>
                                    <InputError
                                    message={errors.priority} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="task_assigned_user_id" value="Assigned user" />
                                    <SelectInput
                                    name="task_assigned_user_id"
                                    id="task_assigned_user_id"
                                    value = {data.asseigned_user_id}
                                    className="mt-1 h-10 block w-1/3"
                                    onChange={e => setData('asseigned_user_id' , e.target.value)}
                                    >
                                      <option value="">Select project</option>
                                      {users.data.map((user) => (
                                         <option value={user.id} key={user.id}>{user.name}</option>
                                      ))}
                                    </SelectInput>
                                    <InputError
                                    message={errors.assigned_user_id} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4 text-right">
                                <Link
                                href={route("Task.index")}
                                className="inline-block bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                  cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 mr-2">
                                  submit
                                </button>
                              </div>
                            </form>
                       </div>
                   </div>
               </div>
           </div>

    </AuthenticatedLayout>
  )
}
