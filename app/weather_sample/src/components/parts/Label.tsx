type Props = React.HTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode;
};

const Label = ({ children }: Props) => {
  const labelStyle = {
    fontSize:"12px", 
    fontFamily: "Tsukushi B Round Gothic,Klee,YuGothic,sans-serif", 
    color:"#2d2e2e",
    position:"relative" as "relative",
    right:"120px",
    fontWeight:"600",
    marginBottom:"3px",
    display: "block"
  };
  
  return (
    <label style={labelStyle}>{children}</label>
  );
}

export default Label;