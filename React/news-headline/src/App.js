// import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react';
import UserCard from './UserCard';
// import Conditional from './conditional';

export default function App() {

  let [country, setCountry] = useState("in");

  let api = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=2c55db4c1bd34eaba4406ed3a5964057`;
  let [users, setUsers] = useState([]);

  async function getDataFromApi(){
    let response = await fetch(api);
    let data = await response.json();

    console.log(data);
    console.log(data.articles)
    setUsers(data.articles);
  }



  useEffect(() => {
    getDataFromApi();
  }, [country])


  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Today's Headline</h1>


     <div style={{textAlign : 'right', padding : "1rem"}}>
     <label for="country-select">Change Country:</label>
     <br/>
      <select onChange={() => setCountry(country = document.getElementById("country-select").value)} name="country" id="country-select">
          <option value={country}>{country}</option>
          <option value="ae">United Arab Emirates</option>
          <option value="ar">Argentina</option>
          <option value="au">Australia</option>
          <option value="be">Belgium</option>
          <option value="bg">Bulgaria</option>
          <option value="br">Brazil</option>
          <option value="ca">Canada</option>
          <option value="ch">Switzerland</option>
          <option value="cn">China</option>
          <option value="co">Colombia</option>
          <option value="cu">Cuba</option>
          <option value="cz">Czech Republic</option>
          <option value="de">Germany</option>
          <option value="eg">Egypt</option>
          <option value="fr">France</option>
          <option value="gb">Great Britain</option>
          <option value="gr">Greece</option>
          <option value="hk">Hong Kong</option>
          <option value="hu">Hungary</option>
          <option value="id">Indonesia</option>
          <option value="ie">Ireland</option>
          <option value="il">Israel</option>
          <option value="in">India</option>
          <option value="it">Italy</option>
          <option value="jp">Japan</option>
          <option value="kr">South Korea</option>
          <option value="lt">Lithuania</option>
          <option value="lv">Latvia</option>
          <option value="ma">Morocco</option>
          <option value="mx">Mexico</option>
          <option value="my">Malaysia</option>
          <option value="ng">Nigeria</option>
          <option value="nl">Netherlands</option>
          <option value="no">Norway</option>
          <option value="nz">New Zeland</option>
          <option value="ph">Phillipines</option>
          <option value="pl">Poland</option>
          <option value="pt">Portugal</option>
          <option value="ro">Romania</option>
          <option value="rs">Serbia</option>
          <option value="ru">Russia</option>
          <option value="sa">Saudi Arabia</option>
          <option value="se">Sweden</option>
          <option value="sg">Singapore</option>
          <option value="si">Slovenia</option>
          <option value="sk">Slovakia</option>
          <option value="th">Thailand</option>
          <option value="tr">Turkey</option>
          <option value="tw">Taiwan</option>
          <option value="ua">Ukraine</option>
          <option value="us">United States</option>
          <option value="ve">Venezuela</option>
          <option value="za">South Africa</option>
      </select>
     </div>
      {
        users.map((user) => {
          return (
            <>
            <UserCard user={user}/>
            </>
          )
        })
      }
    </div>
    


  );
}



// function App() { 
//   const handleSubmit = (e) => { e.preventDefault(); 
//   const first = e.target.fname.value; 
//   const last = e.target.lname.value; 
//   const email = e.target.email.value; 
//   const number = e.target.phno.value; 
//   const address = e.target.address.value; 

//   if(first === "" || last === "" || email === "" || number === "" || address === ""){
//     alert("All fields are required");
//   }



  
//   console.log("First name : " + first, "\n", "Last name : " + last, "\n", "email ID: " + email, "\n", "phn No: " + number, "\n", "Address is: " + typeof(address)); 
// }

//   return ( 
//   <div className="App"> 
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="fname" placeholder="First name"/>
//       <br/><br/> 
//       <input type="text" name="lname"  placeholder="Last name"/>
//       <br/><br/> 
//       <input type="email" name="email" placeholder="email"/>
//       <br/><br/> 
//       <input type="number" name="phno" placeholder="Phone Number"/>
//       <br/><br/> 
//       <input type="text" name="address"  placeholder="address"/>
//       <br/><br/> 
//       <button>Submit</button>
//     </form>
//   </div>
//    );
  
// }

// export default App