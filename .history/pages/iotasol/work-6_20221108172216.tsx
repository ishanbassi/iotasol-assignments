import { useState } from "react"
interface userData{
    name:string,
    email:string,
    city:string,
    dob:string
}
export default function App() {
    const [userData, setUserData] = useState<userData[]>()
    const addData = (e) => {
        e.preventDefault()
        const form = new FormData(e.target), userDetail:any = {}
        for(let pair of form.entries()) {
            userDetail[pair[0]] = pair[1]
        }
        setUserData(prev => prev.concat(userDetail))
        console.log(userData)
    }
    return (
        <>
            <h2>Adding new TD Dynamically to a Table</h2>
            <form onSubmit={addData}>
                <fieldset>
                    <legend>Enter the details</legend>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="full name" id="name" />
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
        </>
    )
}