import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
// import img from '../Images/avatar.png'

const UserTeacher=()=>{

//     const [ user, setUser ] = useState([]);    
 
//     useEffect(() => {
//       const fetchata = async () => {
    
//           const response = await fetch(
//             'https://api.sampleapis.com/countries/countries');    
//              const data = await response.json();
   
//              setCountries( data.slice( 0,5) )     
//       }
//       fetchata();
//    }, []);

    return (
        <>


    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '150px', borderRadius: '10px' }}
                      src="{img}"
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>First Last</MDBCardTitle>
                    <MDBCardText>@Username</MDBCardText>
                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Contact Number</p>
                        <p className="mb-0">988767576</p>
                      </div>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>



        {/* <div classNameName="App">
     <h1>List of Countries</h1>
     <table>
       <thead>
         <tr>
           <th>country</th>
           <th>capital</th>
           <th>flag</th>
         </tr>   
       </thead>   
       <tbody>
         {
         countries.map( (country,key) =>
         <tr key={key}>
             <td classNameName='table-data'>{country.name }</td>
             <td classNameName='table-data'>{country.capital }</td>
             <td classNameName='table-data'><img width='20px' height='10px'
             src={ country.media.flag } alt="flag" /></td>
         </tr>
         )
       }
       </tbody>
     </table>
   </div> */}
        </>
    )
}

export default UserTeacher;