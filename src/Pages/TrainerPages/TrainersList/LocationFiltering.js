import React from "react";
const LocationFiltering = ({address, handleFilters}) =>{
    const handleChange = e => {
       
        handleFilters(e.target.value);
    }
    return(
        <div className="trainer_select_wrap">
            <div className="form_group_row">
                <div className="form_group">
                   
                        <input type="text"
                            placeholder="plaates"  
                            name="address"
                            onChange={handleChange}
                         />
                    
                </div>
            </div>
        </div>
    )

}

export default LocationFiltering;