const Work = ({ ref }: { ref: React.RefObject<HTMLDivElement> }) => {
  return (
    <section id="about" className="w-full py-28" ref={ref}>
      <h2 className="mb-4 text-2xl font-bold">Work</h2>
      <p>Work</p>
    </section>
  );
};

export default Work;
