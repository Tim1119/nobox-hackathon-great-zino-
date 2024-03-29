import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AccountModel } from "../nobox/record-structures/account";
import { faker } from '@faker-js/faker';


const SignUpPage = () => {
  const [isLoading,setIsLoading] = useState(false)

  const navigate = useNavigate()

    const [formData, setFormData] = useState({
      id:`${Math.floor(Math.random() * (1000000 - 0 + 1)) + 0}`,
      email: '',
      password: '',
      password2: '',
      fullName: '',
      profilePhoto:faker.image.avatar(),
    });

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
 

    const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // if password is incorrect
      if (formData.password != formData.password2){
        toast.error('Sorry password not matching ', {
            toastId: "password_error",
          });
          return
      }
      setIsLoading(true)
         
      const returnedData = await AccountModel.insertOne(formData); 
          
      if (returnedData === undefined){
        toast.error('Sorry an error occured ', {
            toastId: "signup_error",
          });
          setIsLoading(false)
          return
      }
      // localStorage.setItem('userData', JSON.stringify(returnedData));
        
          
          
      toast.success('Signup Successful ', {
          toastId: "signup_success",
        });
    
    navigate('/login')
    console.log('User created:', returnedData);
    setIsLoading(false)
      
    
      // Nobox was used here
   
  };


  return (
    <section className="bg-gray-50 grid place-items-center h-screen w-full">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input required value={formData.email}  onChange={handleInputChange} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                        <input required value={formData.fullName}  onChange={handleInputChange} type="text" name="fullName" id="fullName" placeholder="Full Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input required value={formData.password} onChange={handleInputChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div>
                        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
                        <input  required value={formData.password2} onChange={handleInputChange} type="password" name="password2" id="password2" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                   
                    <button type="submit" disabled={isLoading?true:false} className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary- dark:focus:ring-primary"> {isLoading ? '...Loading' : 'Sign up'}</button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet? <Link to={'/login'} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default SignUpPage