import React from "react";
import { Table } from "react-bootstrap";

export default class GetStudents extends React.Component{
    state={
        students : []
    }
    async componentDidMount()
    {
        const response = await fetch("http://localhost:9091/user/resourceList/student", {
        method: 'GET',
        headers: { Accept: '*/*'},});

        const result = await response.json();

       console.log(result);

        console.log('result is: ', JSON.stringify(result, null, 4));

        this.setState({students : result});
    }
    render()
    {
        return(
                <div style={{marginLeft:"20rem", marginRight:"10rem"}}>
                    <Table striped bordered hover variant="dark">
                    <thead style={{fontSize:"1.2rem",fontStyle:"oblique"}}>
                        <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.students.map(student=> 
                        <tr>
                        <td>{student.id}</td>
                        <td>{student.username}</td>
                        <td>{student.firstName} {student.lastName}</td>
                        </tr>)
                        }
                    </tbody>
                    </Table> 
                </div>
        )
    }
}

