type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const SearchButtton = ({ children, onClick }: Props) => {
  const searchButton = {
    color: "#FFF",
    backgroundColor:"#d45613",
    padding:"4px 8px",
    borderRadius: "5px",
    margin: "15px 0 5px 120px"
  };
  
  return (
    <button style={searchButton} onClick={onClick}>{children}</button>
  );
}

export default SearchButtton;