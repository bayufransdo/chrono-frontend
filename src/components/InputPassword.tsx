import { useState } from "react";

const InputPassword = () => {
  const [showToggle, setShowToggle] = useState<boolean>(false);
  const [togglePassword, setTogglePassword] = useState<boolean>(true);

  return (
    <label className="name mb-5 block">
      Password
      <div className="relative">
        <input
          className="mt-[10px] w-full rounded-xl border-2 border-solid border-dark p-[10px_35px_10px_15px] focus:border-main focus:outline-1 focus:outline-main"
          type={togglePassword ? "password" : "text"}
          name="password"
          required
          onInput={(e) =>
            (e.target as HTMLInputElement).value
              ? setShowToggle(true)
              : setShowToggle(false)
          }
        />
        <span className="user absolute right-[10px] top-[20px] w-4">
          <img src="/images/icon/lock.svg" />
        </span>
        <button
          type="button"
          className={
            "toggle-password-register absolute right-8 top-4 cursor-pointer p-[5px] hover:bg-[#e4dbdb] " +
            (showToggle ? "" : "hidden")
          }
          onClick={() => setTogglePassword(!togglePassword)}
        >
          <img
            src={`/images/icon/${togglePassword ? "eye" : "eye-slashed"}.svg`}
          />
        </button>
      </div>
    </label>
  );
};
export default InputPassword;
