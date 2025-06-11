export default function PrimaryButton({ children, onClick, className }: { children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; className?: string }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`border-1 border-blue-500 bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 h-12 rounded-md transition-colors duration-200 cursor-pointer ${className || ""}`}
    >
      {children}
    </button>
  );
}