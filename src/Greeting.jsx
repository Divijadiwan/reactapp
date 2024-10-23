function Greeting(props){
    return <div>
            <h1>hello {props.name}
                <br></br>
            <span>
				{props.score > 60 ? "good work" : "you can do better"}
		  </span>
           </h1>
    
        </div>
}
export default Greeting;
