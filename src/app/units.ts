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
        measurement: "count",
        conversion: 1
    },
    {
        fullName: "Grams",
        abbreviation: "g",
        measurement: "weight",
        conversion: 1
    },
    {
        fullName: "Millileters",
        abbreviation: "mL",
        measurement: "volume",
        conversion: 1
    },
    {
        fullName:"Kilograms",
        abbreviation: "kg",
        measurement: "weight",
        conversion: 1000
    },
    {
        fullName:"Pounds",
        abbreviation:"lbs",
        measurement:"weight",
        conversion: 453.592
    },
    {
        fullName:"Ounces",
        abbreviation:"oz",
        measurement:"weight",
        conversion: 28.3495
    },
    {
        fullName:"Liters",
        abbreviation:"L",
        measurement:"volume",
        conversion: 1000
    },
    {
        fullName:"Teaspoon",
        abbreviation:"tsp",
        measurement:"volume",
        conversion: 4.92892
    },
    {
        fullName:"Tablespoon",
        abbreviation:"Tbsp",
        measurement:"volume",
        conversion:14.7868,   
    },
    {
        fullName:"Fluid Ounces",
        abbreviation:"fl oz",
        measurement:"volume",
        conversion:29.5735
    },
    {
        fullName:"Cup",
        abbreviation:"cp",
        measurement:"volume",
        conversion:240
    },
    {
        fullName:"Pint",
        abbreviation:"pt",
        measurement:"volume",
        conversion: 473.176
    },
    {
        fullName:"Quart",
        abbreviation:"qt",
        measurement:"volume",
        conversion:946.353
    },
    {
        fullName:"Gallon",
        abbreviation:"gal",
        measurement:"volume",
        conversion:3785.41
    },
]