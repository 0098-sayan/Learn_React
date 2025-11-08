import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-blue-400 cursor-pointer m-5 px-4 py-2 rounded font-semibold active:scale-95"
      >
        Back to home
      </button>
        <button
                onClick={() => {
                    navigate(-1)
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Back
            </button>
            <button
                onClick={() => {
                    navigate(+1)
                }}
                className='font-medium bg-amber-500 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>
                Next
            </button>
    </div>
  );
};

export default Navbar2;
