import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link,useForm } from "@inertiajs/react";
import TextInput from '@/Components/TextInput';
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";
export default function Edit({auth , USER}) {
 const {data , setData , post , processing , errors ,reset} = useForm({
    image:'',
    image_path : USER.image_path || "" ,
    name : USER.name || "",
    status : USER.status|| "",
    description : USER.description || "",
    due_date : USER.due_date|| "",
    _method : "PUT"
  })
  const onSubmit = (e) => {
    e.preventDefault();
    post(route('USER.update' , USER.id));
  }

  return (

    <AuthenticatedLayout
    user={auth}
    header={
      <div className="flex justify-between items-center">
           <h2 className="font-semibold text-x1 text-gray-800 dark:text-gray-200 leading-tight" >
                Edit USER "{USER.name}"
            </h2>
      </div>
    }
    >
           <Head title="USERs" />

           <div className="py-12">
               <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">

                   <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                       <div className="p-6 text-gray-900 dark:text-gray-100">

                            <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow-sm:rounded-lg"
                            >
                              <pre>{JSON.stringify(data , undefined , 2)}</pre>
                              {USER.image_path && (
                                <div className="mb-4">
                                  <img src={USER.image_path} alt=""  className="w-64"
                                   />
                                </div>
                              )}
                              <div className="mt-4">
                                    <InputLabel htmlFor="USER_image_path" value="USER image" />
                                    <TextInput
                                    id="USER_image_path"
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
                                    <InputLabel htmlFor="USER_name" value="USER Name" />
                                    <TextInput
                                    id="USER_image_path"
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
                                    <InputLabel htmlFor="USER_description" value="USER Description" />
                                    <TextAreaInput
                                     id="USER_description"
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
                                    <InputLabel htmlFor="USER_status" value="USER Status" />
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
                                    <InputLabel htmlFor="USER_due_date" value="USER due date" />
                                    <TextInput
                                    id="USER_due_date"
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
                              <div className="mt-4 text-right">
                                <Link
                                href={route("USER.index")}
                                className="inline-block bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                  cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 text-sm h-10">
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
