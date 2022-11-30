// Code your solution in this file!
const hqLocation = 42
let startingLocation;
let endingLocation;
let distance;
let distanceInFeet;
let distanceBetweenLocations;
let distanceBetweenLocationsInFeet;
let farePrice;


function distanceFromHqInBlocks(startingLocation){
    if (startingLocation >= 43){
        distance = (startingLocation - hqLocation)
        return distance
    }
    else if (startingLocation <= 41){
        distance = (hqLocation - startingLocation)
        return distance
    }

}

function distanceFromHqInFeet(startingLocation){
    distanceFromHqInBlocks(startingLocation);
    distanceInFeet = (distance * 264)
    return distanceInFeet

}

function distanceTravelledInFeet(startingLocation, endingLocation){
    if (startingLocation > endingLocation){
        distanceBetweenLocations = (startingLocation - endingLocation)
        distanceBetweenLocationsInFeet = (distanceBetweenLocations * 264)
        return distanceBetweenLocationsInFeet
    }
    else if (startingLocation < endingLocation){
        distanceBetweenLocations = (endingLocation - startingLocation)
        distanceBetweenLocationsInFeet = (distanceBetweenLocations * 264)
        return distanceBetweenLocationsInFeet

    }
}

function calculatesFarePrice(startingLocation, endingLocation){
    distanceTravelledInFeet(startingLocation, endingLocation);
    if (distanceBetweenLocationsInFeet <= 400){
        farePrice = 0
        return farePrice;
    }
    else if (distanceBetweenLocationsInFeet <= 2000){
        farePrice = ((distanceBetweenLocationsInFeet - 400) * 2)
        farePrice = farePrice / 100
        return farePrice;
    }
    else if (distanceBetweenLocationsInFeet <= 2500){
        farePrice = 25
        return farePrice;
    }
    else if (distanceBetweenLocationsInFeet >= 2501){
        farePrice = 'cannot travel that far'
        return farePrice;
    }
}