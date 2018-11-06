let eastWest = {'1st Avenue':1, '2nd Avenue':2, '3rd Avenue':3, 'Lexington Avenue':4, 'Park':5, 'Madison Avenue':6, '5th Avenue':7}

class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  }

  yearsExperienceFromBeginningOf(endYear) {
    let year = new Date(endYear, 1, 1)
    let years = (year - this.startDate)/(360*24*60*60*1000)
    return parseInt(years)
  }

}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let streets = Math.abs(this.endingLocation.vertical - this.beginningLocation.vertical)

    let avenues = Math.abs(eastWest[this.endingLocation.horizontal] - eastWest[this.beginningLocation.horizontal])
    let blocks = avenues + streets

    return parseInt(blocks)
  }

  estimatedTime(peak) {
    // off peak - 3 blocks/min
    // peak - 2 blocks/min
    let blocks = this.blocksTravelled();

    if (peak) {
      return blocks/2;
    } else {
      return blocks/3;
    }
  }

}
// estimatedTime — The method returns the number of minutes estimated for the trip. The estimated time depends on the distance in blocks and whether the trip is occurring during peak hours or off peak hours. During off peak hours, a driver travels three blocks in a minute, while during peak hours a driver travels an estimated two blocks in a minute.
