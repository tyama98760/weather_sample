type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  children: React.ReactNode;
};

const Description = ({ children }: Props) => {
  const pStyle = {
    fontSize:"12px", 
    fontFamily: "Tsukushi B Round Gothic,Klee,YuGothic,sans-serif", 
    color:"#ebe5e5",
    fontWeight:"600",
  };
  
  return (
    <p style={pStyle}>{children}</p>
  );
}

export default Description;