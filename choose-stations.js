const chooseStations = function (stations) {
    let goodStation = [];
    for (let station of stations){
      console.log(station)
      if (station[1] >= 20 && (station[2] === 'school' || station[2] === 'community centre')){
        console.log(station[0]);
        goodStation.push(station[0]);
        console.log(goodStation);
      }
    }
    return goodStation;
  }
  
  const stations = [
    ['Big Bear Donair', 10, 'restaurant'],
    ['Bright Lights Elementary', 50, 'school'],
    ['Moose Mountain Community Centre', 45, 'community centre']
  ];
  
  console.log(chooseStations(stations));