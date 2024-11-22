import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head,Link,useForm } from "@inertiajs/react";
import TextInput from '@/Components/TextInput';
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import TextAreaInput from "@/Components/TextAreaInput";
import SelectInput from "@/Components/SelectInput";
export default function Edit({auth , USER}) {
 const {data , setData , post , processing , errors ,reset} = useForm({
    name : USER.name || "",
    email : USER.email|| "",
    _method : "PUT"
  })
  const onSubmit = (e) => {
    e.preventDefault();
    post(route('user.update' , USER.id));
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
                               <div className="mt-4">
                                    <InputLabel htmlFor="USER_name" value="USER Name" />
                                    <TextInput
                                    id="USER_NAME"
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
                                    <InputLabel htmlFor="USER_email" value="USER Email" />
                                    <TextInput
                                    id="USER_EMAIL"
                                    type="text"
                                    name="email"
                                    value={data.email}
                                    className="mt-1 h-10 block w-full"
                                    onChange={e => setData('email' , e.target.value)}
                                    />
                                    <InputError
                                    message={errors.email} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="USER_password" value="USER password" />
                                    <TextInput
                                    id="USER_password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    className="mt-1 h-10 block w-full"
                                    onChange={e => setData('password' , e.target.value)}
                                    />
                                    <InputError
                                    message={errors.password} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4">
                                    <InputLabel htmlFor="USER_password_confirmation" value="USER password_confirmation" />
                                    <TextInput
                                    id="USER_password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    className="mt-1 h-10 block w-full"
                                    onChange={e => setData('password_confirmation' , e.target.value)}
                                    />
                                    <InputError
                                    message={errors.password_confirmation} className="mt-2"
                                    />
                              </div>
                              <div className="mt-4 text-right">
                                <Link
                                href={route("user.index")}
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
