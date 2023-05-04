import { useState } from "react"

function Search(){
    const [location, UpdateLocation] = useState("seattle, LA")
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location
                    <input id="location" value={location} placeholder="Location" onChange={(location) => updateLocation(location.target.value)}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search