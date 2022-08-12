type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const Headline1 = ({ children }: Props) => {
  const h1Style = {
    fontSize: "32px",
    color: "#000",
    padding: "5px 10px"
  };
  
  return (
    <h1 style={h1Style}>{children}</h1>
  );
}

export default Headline1;