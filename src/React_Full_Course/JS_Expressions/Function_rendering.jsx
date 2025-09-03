const FunctionRendering = () => {
  const isLogged = true;
  const greeting=isLogged ? <h1>Welcomes</h1> : <h1>Please Try again</h1>
  return (
    <div>
      {greeting}
    </div>
  );
};

export default FunctionRendering;
