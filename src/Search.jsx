import React, { useState } from "react";
import propertiesData from "./data/properties.json"; // Import properties data
import { useNavigate } from "react-router-dom"; // Import navigation hook/used to move to another page
import "./Search.css"; // Import CSS for styling

export default function Search() {
  const [filteredProperties, setFilteredProperties] = useState(
    propertiesData.properties // Initialize filtered properties with all properties
  );
  const [favorites, setFavorites] = useState([]); // Stores properties added to the Favorites list

  //converting json months to numbers,cuz JS date requires numbers
  const monthToNumber = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };


   // Runs when the search form is submitted
  const handleSearch = (event) => {
    event.preventDefault(); // Stops the page from reloading to default 

    const formData = new FormData(event.target); //Collects all form inputs at once.
    const propertyType = formData.get("propertyType");
    const searchArea = formData.get("searchArea"); //Selected property type and area


    const minBedrooms = parseInt(formData.get("NoOfBedroomMin"), 10) || 0;//min bedroom default to 0
    const maxBedrooms = parseInt(formData.get("NoOfBedroomMax"), 10) || Infinity;  //and max to infinity
    const minPrice = parseInt(formData.get("priceMin"), 10) || 0;
    const maxPrice = parseInt(formData.get("priceMax"), 10) || Infinity;

    //Converts selected start date to a Date object
    const startDate = formData.get("startDate")
      ? new Date(formData.get("startDate"))
      : null; 


    const endDate = formData.get("endDate")
      ? new Date(formData.get("endDate"))
      : null;

      // Filter properties based on form input
    const filtered = propertiesData.properties.filter((property) => { //Loops through every property and keep only passed conditions
      
      const addedDate = new Date( //Converts JSON date data into a valid JavaScript Date
        property.added.year,
        monthToNumber[property.added.month] - 1,//-1 because JavaScript months start at 0
        property.added.day
      );


      return (
        (propertyType === "type" || property.type === propertyType) && // If user selected All Types → allow all properties
                                                                        //Otherwise → property type must match exactly

        (searchArea === "area" || property.location.includes(searchArea)) &&  //"area" means Any Area
        
        property.bedrooms >= minBedrooms &&  //Ensures property has at least the selected minimum number
        property.bedrooms <= maxBedrooms &&  //Ensures property has at most the selected maximum number
        property.price >= minPrice &&  //Property price must be greater than or equal to selected min price
        property.price <= maxPrice &&
        (!startDate || addedDate >= startDate) &&  //If no start date selected → allow all
                                                    //Otherwise → property must be added on or after start date


        (!endDate || addedDate <= endDate)//If no end date selected → allow all
        //Otherwise → property must be added on or before end date


      );
    });

    setFilteredProperties(filtered); // Update filtered properties
  };

  

  return (
    <div className="wrapper">
      <main className="main-layout">
        {/* Search Section */}
        <section className="left-section">
          <div className="Search-container">
            {/* Search Form */}
            <form className="Search-form" >
              <h2 className="section-title">Search Properties</h2>
              {/* Property Type */}
              <div className="form-row">
                <div className="form-item">
                  <label>Property Type:</label>
                  <select id="propertyType" name="propertyType">
                    <option value="type">All Types</option>
                    <option value="House">House</option>
                    <option value="Flat">Flat</option>
                    <option value="Bungalow">Bungalow</option>
                    <option value="Maisonette">Land</option>
                    <option value="Apartment">Apartment</option>
                  </select>
                </div>
                {/* Search Area */}
                <div className="form-item">
                  <label>Search Area:</label>
                  <select id="searchArea" name="searchArea">
                    <option value="area">Any Area</option>
                    <option value="BR1">BR1</option>
                    <option value="BR2">BR2</option>
                    <option value="BR3">BR3</option>
                    <option value="BR4">BR4</option>
                    <option value="BR5">BR5</option>
                    <option value="BR6">BR6</option>
                  </select>
                </div>
              </div>
              {/* Bedrooms and Price Range */}
              <div className="form-row">
                <div className="form-item">
                  <label>No of Bedrooms:</label>
                  <select id="NoOfBedroomMin" name="NoOfBedroomMin">
                    <option value="">No Min</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                  <select id="NoOfBedroomMax" name="NoOfBedroomMax">
                    <option value="">No Max</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div className="form-item">
                  <label>Price Range:</label>
                  <select id="priceMin" name="priceMin">
                    {/* Default option shown when no minimum price is selected */}
                    <option value="">Min Price</option>

                    {/* 
                        Dynamically generate 20 price options
                       Array.from creates an array of length 20
                       i starts from 0..
                      (i + 1) avoids starting from 0
                      Each price increases by 50,000
                                                        */}
                    {Array.from({ length: 20 }, (_, i) => (
                      <option value={(i + 1) * 50000} key={`min-${i + 1}`}>
                        ${(i + 1) * 50000}
                      </option>
                    ))}
                  </select>
                  
                  <select id="priceMax" name="priceMax">
                    <option value="">Max Price</option>
                    {Array.from({ length: 20 }, (_, i) => (
                      <option value={(i + 1) * 50000} key={`max-${i + 1}`}>
                        ${(i + 1) * 50000}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {/* Date Added */}
              <div className="form-row">
                <div className="form-item">
                  <label>Date Added:</label>
                  <input type="date" id="startDate" name="startDate" />
                  <input type="date" id="endDate" name="endDate" />
                </div>
              </div>
              {/* Submit and Clear Buttons */}
              <div className="form-row">
                <button type="submit" className="search-button">
                  Search
                </button>
                <button
                  type="button"
                  
                  className="clear-button"
                >
                  Clear All
                </button>
              </div>
            </form>
          </div>

          
        </section>

        
      </main>
      
    </div>
  );
}
