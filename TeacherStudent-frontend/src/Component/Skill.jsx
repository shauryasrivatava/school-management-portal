import React from "react";
import { Table } from "react-bootstrap";

export default class GetSkills extends React.Component{
    state={
        skills : []
    }
    async componentDidMount()
    {
        const response = await fetch("http://localhost:9091/admin/skill", {
        method: 'GET',
        headers: { Accept: '*/*'},});

        const result = await response.json();

       console.log(result);

        console.log('result is: ', JSON.stringify(result, null, 4));

        this.setState({skills : result});
    }
    render()
    {
        return(
                <div style={{marginLeft:"20rem", marginRight:"10rem"}}>
                    <Table striped bordered hover variant="dark">
                    <thead style={{fontSize:"1.2rem",fontStyle:"oblique"}}>
                        <tr>
                        <th>SkillName</th>
                        <th>Audience</th>
                        <th>Competency</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.skills.map(skill=> 
                        <tr>
                            <td>{skill.skillName}</td>
                            <td>{skill.intendedAudience}</td>
                            <td>{skill.competencyLevel}</td>
                        </tr>
                        )
                        }
                    </tbody>
                    </Table> 
                </div>
        )
    }
}

