import React from "react";
import { Table } from "react-bootstrap";

export default class Teachers extends React.Component{
    state={
        teachers : []
    }
    async componentDidMount()
    {
        const response = await fetch("http://localhost:9091/user/resourceList/teacher", {
        method: 'GET',
        headers: { Accept: '*/*'},});

        const result = await response.json();

       console.log(result);

        console.log('result is: ', JSON.stringify(result, null, 4));

        this.setState({teachers : result});
    }
    render()
    {
        return(
                <div>
                    <Table striped bordered hover variant="dark">
                    <thead style={{fontSize:"1.2rem",fontStyle:"oblique"}}>
                        <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.teachers.map(teacher=> 
    
                        <tr>
                            <td>{teacher.id}</td>
                            <td>{teacher.username}</td>
                            <td>{teacher.firstName} {teacher.lastName}</td>
                        </tr>
                        )
                        }
                    </tbody>
                    </Table> 
                </div>
        )
    }
}