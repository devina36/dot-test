type TButtonProps = {
  label?: string;
  type?: 'submit' | 'button' | 'reset';
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  label = 'Button',
  type = 'button',
  disabled = false,
  onClick,
}: TButtonProps) => {
  return (
    <>
      <button
        type={type}
        className={`bg-blue-500 w-full text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-400`}
        disabled={disabled}
        onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
