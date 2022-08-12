type Props = React.InputHTMLAttributes<HTMLInputElement> & {
};

const BaseInput = ({ type, value, placeholder, onChange, className }: Props) => {
  const baseInput = {
    border: "1px solid #ccc",
    padding: "5px 10px",
    borderRadius: "4px",
    width:"170px",
    height:"25px",
    marginRight: "10px"
  };
  
  return (
    <input type={type} value={value} placeholder={placeholder} style={baseInput} onChange={onChange}></input>
  );
}

export default BaseInput;