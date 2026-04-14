const Pill = ({ label, href }: { label: string; href?: string }) => {
  const className =
    "flex h-6 items-center rounded-full bg-[#64ffda]/20 px-[10px] pt-[1px] font-mono text-xs text-[#64ffda]";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} transition-colors hover:bg-[#64ffda]/30`}
      >
        {label}
      </a>
    );
  }

  return <div className={className}>{label}</div>;
};

export default Pill;
