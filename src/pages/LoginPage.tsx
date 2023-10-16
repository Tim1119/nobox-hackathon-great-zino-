import { toast } from "react-toastify";
import { AccountModel } from "../nobox/record-structures/account";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


type Props = {
  setAccountId: (val: string) => void;
  setFullName: (val: string) => void;
  setEmail: (val: string) => void;
  setProfilePhoto: (val: string) => void;
};

const LoginPage = ({ setAccountId,setFullName,setEmail,setProfilePhoto}:Props) => {
 

	const navigate = useNavigate()


  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const returnedData = await AccountModel.find(formData);
    setAccountId(returnedData[0].id)
    setFullName(returnedData[0].fullName)
    setEmail(returnedData[0].email)
    setProfilePhoto(returnedData[0].profilePhoto)
	console.log(returnedData)

    if (returnedData.length === 0) {
      toast.error("Sorry you do not have an account or password incorrect ", {
        toastId: "login_error",
      });
      // console.log(returnedData[0].id)
    
      setIsLoading(false);
      return;
    }

    toast.success("Signup Successful ", {
      toastId: "signup_success",
    });
	localStorage.setItem('userData', JSON.stringify(returnedData));

    navigate("/");
    console.log("User created:", returnedData);
    setIsLoading(false);

    // Nobox was used here
  };

  return (
    <section className="bg-gray-50 grid place-items-center">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
   
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your email
                </label>
                <input
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Password
                </label>
                <input
                  required
                  value={formData.password}
                  onChange={handleInputChange}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading ? true : false}
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary- dark:focus:ring-primary"
              >
                {" "}
                {isLoading ? "...Loading" : "Sign in"}
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}

                <Link
                  to='/Signup'
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
