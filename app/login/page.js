import LoginForm from "../components/LoginForm";
import LoginUi from "../components/LoginUi";

export default function Login() {
  return (
    <section className=" bg-mythemegreen bg-login flex justify-center py-20 h-[100vh] ">
      <div className="flex xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-between items-center  xl:w-[67%] lg:w-[85%] max-md:w-[90%]">
        <div className=" xl:w-[731px] lg:w-[45.5%] md:w-[90%] sm:w-[90%]">
          <LoginUi />
        </div>
        <div className="xl:w-full lg:w-[50%] max-md:w-[100%] w-full max-w-[488px] flex justify-center items-center">
          <LoginForm />
        </div>
      </div>
    </section>
  );
}
