import { Link } from "react-router-dom";

interface SignInSliderProps {
  swipe: boolean;
}

const SignInSlider = ({ swipe }: SignInSliderProps) => {
  return (
    <aside
      id="illustration"
      className={
        "absolute left-0 top-0 z-[1000] hidden h-screen w-1/2 flex-col items-center justify-center gap-10 bg-[#e6eefb] transition-all duration-500 md:flex " +
        (swipe
          ? "left-[50%] rounded-bl-[30px] rounded-tl-[30px]"
          : "rounded-br-[30px] rounded-tr-[30px]")
      }
    >
      <img
        src="/images/blob/login-left.svg"
        className={
          "absolute bottom-0 left-0 z-[-99] block " + (swipe ? "hidden" : "")
        }
        loading="lazy"
      />
      <img
        src="/images/blob/login-right.svg"
        className={
          "absolute bottom-0 right-0 z-[-99] block " + (swipe ? "" : "hidden")
        }
        loading="lazy"
      />
      <div className="description">
        <Link to="/">
          <img
            className="mx-auto"
            src="/images/icon/chrono-full.png"
            alt="Chrono"
          />
        </Link>
        <p className="font-bold tracking-[5px] text-main">
          TIME MANAGEMENT ASSISTANT
        </p>
      </div>
      <img
        src="/images/illustration/signin-illustration.png"
        className={
          "signin-illustration maw-w-[80%] " + (swipe ? "scale-x-[-1]" : "")
        }
      />
    </aside>
  );
};
export default SignInSlider;
