const countriesByContinent = {
    Africa: [
      'Nigeria', 'Ethiopia', 'Egypt', 'DR Congo', 'Tanzania',
      'South Africa', 'Kenya', 'Uganda', 'Algeria', 'Sudan',
      // Add more countries as needed
    ],
    Asia: [
      'China', 'India', 'Indonesia', 'Pakistan', 'Bangladesh',
      'Japan', 'Philippines', 'Vietnam', 'Turkey', 'Iran', 'Korea'
      // Add more countries as needed
    ],
    Europe: [
      'Russia', 'Germany', 'United Kingdom', 'France', 'Italy',
      'Spain', 'Ukraine', 'Poland', 'Romania', 'Netherlands',
      // Add more countries as needed
    ],
    NorthAmerica: [
      'United States', 'Canada', 'Mexico', 'Guatemala', 'Honduras',
      'Cuba', 'Haiti', 'Dominican Republic', 'Panama', 'Jamaica',
      // Add more countries as needed
    ],
    SouthAmerica: [
      'Brazil', 'Argentina', 'Colombia', 'Peru', 'Venezuela',
      'Chile', 'Ecuador', 'Bolivia', 'Paraguay', 'Uruguay',
      // Add more countries as needed
    ],
    Oceania: [
      'Australia', 'Papua New Guinea', 'New Zealand', 'Fiji', 'Solomon Islands',
      'Micronesia', 'Vanuatu', 'Samoa', 'Kiribati', 'Tonga',
      // Add more countries as needed
    ]
  };

export const isCountryInContinent= (continent, country)=>{

    return countriesByContinent[continent].includes(country);
  }
