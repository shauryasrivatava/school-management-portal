import React from "react";
import {Table}  from "react-bootstrap";


export default class GetDocuments extends React.Component{
    state={
        documents : []
    }
    async componentDidMount()
    {
        const response = await fetch("http://localhost:9091/user/resourceList/document", {
        method: 'GET',
        headers: { Accept: '*/*'},});

        const result = await response.json();

       console.log(result);

        console.log('result is: ', JSON.stringify(result, null, 4));

        this.setState({documents : result});
    }
    render()
    {
        return(
            <div style={{marginLeft:"20rem", marginRight:"10rem"}}>
                <Table striped bordered hover variant="dark">
                <thead style={{fontSize:"1.2rem",fontStyle:"oblique"}}>
                    <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.documents.map(document=> 
                    <tr>
                        <td>{document.title}</td>
                        <td>{document.description}</td>
                        <td>{document.author}</td>
                    </tr>
                    )
                    }
                </tbody>
                </Table> 
            </div>
            
        )
    }
}

