type ComponentProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SecondaryButton({ children, ...rest }: ComponentProps) {
  return (
    <button
      className="mt-2 self-center rounded border border-transparent py-2 px-6 hover:border-gray-200 disabled:cursor-not-allowed"
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
}
