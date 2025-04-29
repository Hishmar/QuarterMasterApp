export interface Unit{
    fullName: String,
    abbreviation: String,
    measurement: String,
    //ratio of this Unit to base unit, eg 1000 for kg to g
    //Base Units are g, ml, and count
    conversion: number
}

export const units:Unit[] = [
    {
        fullName: "Count",
        abbreviation: "ct",
        measurement: "COUNT",
        conversion: 1
    },
    {
        fullName: "Grams",
        abbreviation: "g",
        measurement: "WEIGHT",
        conversion: 1
    },
    {
        fullName: "Mililiters",
        abbreviation: "mL",
        measurement: "VOLUME",
        conversion: 1
    },
    {
        fullName:"Kilograms",
        abbreviation: "kg",
        measurement: "WEIGHT",
        conversion: 1000
    },
    {
        fullName:"Pounds",
        abbreviation:"lbs",
        measurement:"WEIGHT",
        conversion: 453.592
    },
    {
        fullName:"Ounces",
        abbreviation:"oz",
        measurement:"WEIGHT",
        conversion: 28.3495
    },
    {
        fullName:"Liters",
        abbreviation:"L",
        measurement:"VOLUME",
        conversion: 1000
    },
    {
        fullName:"Teaspoon",
        abbreviation:"tsp",
        measurement:"VOLUME",
        conversion: 4.92892
    },
    {
        fullName:"Tablespoon",
        abbreviation:"Tbsp",
        measurement:"VOLUME",
        conversion:14.7868,   
    },
    {
        fullName:"Fluid Ounces",
        abbreviation:"fl oz",
        measurement:"VOLUME",
        conversion:29.5735
    },
    {
        fullName:"Cup",
        abbreviation:"cp",
        measurement:"VOLUME",
        conversion:240
    },
    {
        fullName:"Pint",
        abbreviation:"pt",
        measurement:"VOLUME",
        conversion: 473.176
    },
    {
        fullName:"Quart",
        abbreviation:"qt",
        measurement:"VOLUME",
        conversion:946.353
    },
    {
        fullName:"Gallon",
        abbreviation:"gal",
        measurement:"VOLUME",
        conversion:3785.41
    },
]