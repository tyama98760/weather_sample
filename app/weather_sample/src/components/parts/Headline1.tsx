type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode;
};

const Headline1 = ({ children }: Props) => {
  const h1Style = {
    fontSize: "32px",
    color:"#ebe5e5",
    padding: "5px 10px",
    fontFamily: "Tsukushi B Round Gothic,Klee,Yu Mincho,YuGothic,fantasy,sans-serif,cursive"
  };
  
  return (
    <h1 style={h1Style}>{children}</h1>
  );
}

export default Headline1;