type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const SearchButtton = ({ children, onClick }: Props) => {
  const searchButton = {
    color: "#FFF",
    backgroundColor:"#d45613",
    padding:"6px 14px",
    borderRadius: "7px",
    margin: "25px 0 5px 210px",
    fontSize:"14px",
    cursor:"pointer",
    fontFamily: "Tsukushi B Round Gothic,Klee,Yu Mincho,YuGothic,fantasy,sans-serif,cursive"
  };
  
  return (
    <button style={searchButton} onClick={onClick}>{children}</button>
  );
}

export default SearchButtton;