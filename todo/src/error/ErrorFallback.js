import bandit from "../assets/bandit.webp"


const ErrorFallback = ({ error }) => {
  return (
	<div role="alert">
	  <h1>Чики-брики, и в дамки!</h1>
	  <img style={{  marginLeft: "850px"}} src={bandit} alt="dangerous"/>
	  <p style={{fontSize: "30px" , textAlign: "center"}}>{error.message}</p>
	</div>
  );
};
export default ErrorFallback;


