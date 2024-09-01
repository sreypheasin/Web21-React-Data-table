export function Button(props) {
  return (
    <>
      <button style={buttonStyle} className={`${props.style}`}>
        {props?.title}
      </button>
    </>
  );
}

// export function TailwindBtn() {
//   const title = "Enter";
//   return (
//     <>
//       <button
//         type="button"
//         className="ml-5 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
//       >
//         {title}
//       </button>
//     </>
//   );
// }

const buttonStyle = {
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  marginLeft: "10px"
};
