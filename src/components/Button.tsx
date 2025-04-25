function Button({ navigate }) {
  return (
    <button
      onClick={() => navigate("/create-account")}
      className="bg-slate-400 p-1.5 border-2 shadow-md rounded-md border-black"
    >
      Log in
    </button>
  );
}

export default Button;
