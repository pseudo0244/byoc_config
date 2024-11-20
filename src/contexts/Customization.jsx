import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});

export const colours = [
  {
    colour: "#FF0000",
    name: "Red",
  },
  {
    colour: "#1a5e1a",
    name: "Green",
  },
  {
    colour: "#0000FF",
    name: "Blue",
  },
  {
    colour: "#222222",
    name: "Black",
  },
  {
    colour: "#ececec",
    name: "White",
  },
];

export const CustomizationProvider = (props) => {
  const [car, setCar] = useState("car1");
  const [accessory, setAccessory] = useState(0);
  const [carColour, setCarColour] = useState(colours[2]);
  const [carDetails, setCarDetails] = useState(false);
  return (
    <CustomizationContext.Provider
      value={{
        car,
        setCar,
        accessory,
        setAccessory,
        carColour,
        setCarColour,
        carDetails,
        setCarDetails,
      }}
    >
      {props.children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
