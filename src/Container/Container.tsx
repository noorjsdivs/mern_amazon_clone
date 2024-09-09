const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-screen-2xl mx-auto px-2 md:px-5 ">{children}</div>
  );
};

export default Container;
