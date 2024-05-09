import { Oval } from "react-loader-spinner";


const Loader = () => {
  return (
    <div>
    <Oval
        type="ThreeDots" 
        color="#00BFFF"
        height={100}
        width={100}
      />
    </div>
  );
};

export default Loader;