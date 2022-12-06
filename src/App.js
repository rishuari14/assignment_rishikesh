import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";
import { useEffect} from 'react'
import axios from 'axios';
import Button from '@mui/material/Button';
import loader from "./images/loader.gif";
import { GET_USER_URL } from "./utility/url";


function App() {
    const [user,setUser] = useState([]);
	const [loading,setLoading] = useState(false)

    //SETTING UP API CALL

		let config = {
			method : 'get',
			url: GET_USER_URL,
		
		  };

// API CALL USING ASYNC AWAIT AND AXIOS

		const getRowdata = async () => {
		  try {
			const response = await axios(config);
			console.log(response.data.results)
			setUser(response.data.results[0]);
		   
		  }
		   catch (err) {
			setUser(null)
			
		  } finally {
			setLoading(false);
		  }
	
		};

   // Initial API CALL
      
	  useEffect(() => {

		getRowdata();

	  },  [ ])

	  






	return (
		(loading || user == null ) ? <div className="background">
		<div className="bg-pattern-top"></div>
		<div className="bg-pattern-bottom"></div>

	     <img className="loader" src={loader} alt="Loading" />
	 <Button variant="contained" disabled={true}>Wait..</Button>
	</div> : 

		<div className="background">
			<div className="bg-pattern-top"></div>
			<div className="bg-pattern-bottom"></div>

			<ProfileCard
				name= {user.name && user.name.first ? user.name.first +' '+ user.name.last  :"Not Available"}
				age= {user.dob && user.dob.age ? user.dob.age  :"Not Available"}
				email={user.location && user.location.city ? user.location.city  :"Not Available"}
				city={user.location && user.location.city ? user.location.city  :"Not Available"}
				country={user.location && user.location.country ? user.location.country  :"Not Available"}
				postcode={user.location && user.location.postcode ? user.location.postcode  :"Not Available"}
			></ProfileCard>
		 <Button variant="contained" disabled ={loading ? true : false} onClick={()=> {getRowdata();setLoading(true)} } >Next User</Button>
		</div>
	);
}

export default App;
