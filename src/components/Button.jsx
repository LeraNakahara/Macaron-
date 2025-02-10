export default function Button({ children, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="border-2 border-[#4E9DD3] mt-[35px] px-[48px] py-[17px] mx-[600px]"
      >
        {children}
      </button>
    </>
  );
}
