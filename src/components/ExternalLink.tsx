type ComponentProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export default function ExternalLink({
  href,
  className,
  children
}: ComponentProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
