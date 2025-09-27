const Pill = ({ label }: { label: string }) => {
  return (
    <div className="flex h-6 items-center rounded-full bg-[#64ffda]/20 px-[10px] pt-[1px] font-mono text-xs text-[#64ffda]">
      {label}
    </div>
  );
};

export default Pill;
