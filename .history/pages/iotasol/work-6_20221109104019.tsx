import { useState } from "react"
import {Table} from 'react-bootstrap'
interface userData{
    fullName:string,
    email:string,
    city:string,
    dob:string
}
export default function App() {
    const [userData, setUserData] = useState<userData[]>([])
    const addData = (e) => {
        e.preventDefault()
        const form = new FormData(e.target), userDetail:any = {}
        for(let pair of form.entries()) {
            userDetail[pair[0]] = pair[1]
        }
        setUserData(prev => prev.concat(userDetail))
        
    }
    return (
        <>
            <h2>Adding new TD Dynamically to a Table</h2>
            <form onSubmit={addData}>
                <fieldset>
                    <legend>Enter the details</legend>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="fullName" id="name" />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" id="email" />
                    </div>
                    <div>
                            
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" />
                    </div>

                    <div>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" name="dob" id="dob" />

                    </div>
                    
                    
                    <button type="submit">Submit</button>
                </fieldset>
            </form>
            {userData.length > 0 ?
            <Table size="sm">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date of Birth</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {userData.map((data,i) => {
                        return (
                            <tr key={`${data.fullName}_${data.city}_${i}`}>
                                <td>{data.fullName}</td>
                                <td>{data.email}</td>
                                <td>{data.dob}</td>
                                <td>{data.city}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>: null}
            
        </>
    )
}