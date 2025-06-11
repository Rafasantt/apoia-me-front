export default function SecondaryButton({ children, onClick, className }: { children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; className?: string }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`border-1 border-gray-300 text-gray-600 font-medium px-8 h-12 rounded-md transition-colors duration-200 cursor-pointer ${className || ""}`}
    >
      {children}
    </button>
  );
}