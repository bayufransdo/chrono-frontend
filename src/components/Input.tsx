interface InputProps {
  inputTitle: string;
  inputName: string;
  inputType: string;
  iconUrl: string;
}
const Input: React.FC<InputProps> = ({
  inputTitle,
  inputName,
  inputType,
  iconUrl,
}) => {
  return (
    <label className="mb-5 block">
      {inputTitle}
      <div className="relative">
        <input
          className="mt-[10px] w-full rounded-xl border-2 border-solid border-dark p-[10px_35px_10px_15px] focus:border-main focus:outline-1 focus:outline-main"
          type={inputType}
          name={inputName}
          required
        />
        <span className="absolute right-[10px] top-[20px] w-5">
          <img src={iconUrl} />
        </span>
      </div>
    </label>
  );
};

export default Input;
