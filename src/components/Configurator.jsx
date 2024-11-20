import { Button } from "@mui/material";
import { colours, useCustomization } from "../contexts/Customization";
const Configurator = () => {
  const {
    car,
    setCar,
    accessory,
    setAccessory,
    carColour,
    setCarColour,
    carDetails,
    setCarDetails,
  } = useCustomization(); //these are the componenets and define of the state variables
  var cost = 0;
  if (car === "car1") {
    cost = 20000000;
  } else {
    cost = 0;
  }
  if (accessory === 1) {
    cost += 200000;
  } else {
    cost += 0;
  }
  //This part give the logic for price change when we add accessories to the car model

  
  return (
    <div className="configurator">
      <div className="configurator_section">
        <div className="configurator_section_title">Byoc Lab</div>
        <div className="configurator_section_values">
          <div
            className={`item ${car === "car1" ? "item-active" : ""}`}
            onClick={() => setCar("car1")}
          >
            <div className="item_option">Porsche 911 GT</div>
          </div>
          <Button
            onClick={() => {
              setCarDetails((carDetails) => !carDetails);
            }}
            variant="contained"
          >
            {carDetails ? "5L Booking" : "1.99 Cr Onwards"} {/* Special function to change things 
            when we click on a button */}
          </Button>
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Car Colour</div>
        <div className="configurator_section_values">
          {colours.map((item, index) => (
            <div
              key={index}
              className={`item ${
                item.colour === carColour.colour ? "item-active" : ""
              }`}
              onClick={() => setCarColour(item)} //Sets the car color
            >
              <div
                className="item_colour_preview"
                style={{
                  backgroundColor: item.colour,
                }}
              />
              <div className="item_option">{item.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Accessories</div>
        <div className="configurator_section_values">
          <div
            className={`item ${accessory === 1 ? "item-active" : ""}`}
            onClick={() => setAccessory(1)} //Updates to 1 if we click on add capiler
          >
            <div className="item_option">Add Calipers - ₹2,00,000</div>
          </div>
          <div
            className={`item ${accessory === 0 ? "item-active" : ""}`}
            onClick={() => setAccessory(0)}
          >
            <div className="item_option">No Calipers</div>
          </div>
        </div>
      </div>
      <div className="configurator_section">
        <div className="configurator_section_title">Total Cost</div>
        <div className="configurator_section_values">
          <div className={"item"}>
            <div className="item_option2">₹{cost}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configurator;
