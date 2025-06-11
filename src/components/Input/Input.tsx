type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export default function Input({ label, error, ...props }: InputProps) {
  return (
    <div className="w-full mb-4">
      {label && (
        <label
          htmlFor={props.id}
          className="block text-gray-600 mb-1"
        >
          {label}
        </label>
      )}
      <input
        {...props}
        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {error && <span className="text-red-500 text-sm mt-1 block">{error}</span>}
    </div>
  );
}

