import { useState } from "react";
import { Input, InputPassword, SignInSlider } from "../../components";
// import './SignIn.css';

const SignIn = () => {
  const [swipe, setSwipe] = useState<boolean>(false);

  return (
    <main className="signin relative animate-fade-in">
      <div className="container md:relative md:mx-auto md:flex md:h-screen md:items-center md:justify-around">
        <SignInSlider swipe={swipe} />
        <section
          id="register"
          className={`transition-all duration-500 ${swipe ? "" : "scale-0"}`}
        >
          <div className="register-wrapper p-5 leading-5 text-dark">
            <p className="register mb-3 text-sm font-bold tracking-[0.2rem] text-main">
              REGISTER NOW
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              Sign up for <span className="text-main">free</span>
            </h2>
            <p className="desc mt-5 text-sm font-extralight">
              Already have an account?{" "}
              <span
                className="login cursor-pointer text-main hover:underline"
                onClick={() => setSwipe(false)}
              >
                Log In
              </span>
            </p>
            <form action="utils/signup.php" method="POST" className="py-5">
              <Input
                inputTitle="Name"
                inputName="name"
                inputType="text"
                iconUrl="/images/icon/user-small.svg"
              />
              <Input
                inputTitle="Email"
                inputName="email"
                inputType="email"
                iconUrl="/images/icon/mail.svg"
              />
              <InputPassword />
              <button
                className="w-full cursor-pointer rounded-xl bg-main p-3 tracking-widest text-white shadow-lg transition-all duration-300 hover:opacity-70"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
            <p className="policy text-center text-sm font-extralight">
              <small>
                By clicking Sign Up, you agree to our Terms and that you have
                read our{" "}
                <a href="#" className="text-main no-underline hover:underline">
                  Privacy Policy
                </a>
              </small>
            </p>
          </div>
        </section>
        <section
          id="login"
          className={`transition-all duration-500 ${swipe ? "scale-0" : ""}`}
        >
          <div className="login-wrapper p-5 leading-5 text-dark">
            <p className="login mb-3 text-sm font-bold tracking-[0.2rem] text-main">
              START YOU JOURNEY
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              Log in To <span className="text-main">Chrono</span>
            </h2>
            <p className="desc mb-5 text-sm font-extralight">
              Don't have an account?{" "}
              <span
                className="signup cursor-pointer text-main hover:underline"
                onClick={() => setSwipe(true)}
              >
                Sign Up
              </span>
            </p>
            <form className="my-5" action="utils/signin.php" method="POST">
              <Input
                inputTitle="Email"
                inputName="email"
                inputType="email"
                iconUrl="/images/icon/mail.svg"
              />
              <InputPassword />
              <button
                className="w-full cursor-pointer rounded-xl bg-main p-3 tracking-widest text-white shadow-lg transition-all duration-300 hover:opacity-70"
                type="submit"
              >
                LOG IN
              </button>
            </form>
            <p className="policy text-center text-sm font-extralight">
              <small>
                By clicking Sign Up, you agree to our Terms and that you have
                read our{" "}
                <a href="#" className="text-main no-underline hover:underline">
                  Privacy Policy
                </a>
              </small>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};
export default SignIn;
