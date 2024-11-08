const Pill = ({ label }: { label: string }) => {
  return (
    <span className="rounded-full bg-[#64ffda]/20 px-[12px] py-[5px] font-mono text-xs text-[#64ffda]">
      {label}
    </span>
  );
};

export default Pill;
