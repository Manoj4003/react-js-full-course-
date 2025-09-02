const FunctionRendering = () => {
  const isLogged = true;
  return (
    <div>
      {isLogged ? <h1>Welcome</h1> : <h1>Please Try again</h1>}
    </div>
  );
};

export default FunctionRendering;
