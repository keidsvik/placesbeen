// Business Logic

// Business logic for Travel Book
function TravelBook() {
  this.place = [];
}

// Business logic for Destinations

function Place (placeName, landmarks, timeOfYear, notes) {
  this.placeName = placeName;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.fullPlace = function() {
  return "I've been to " + this.placeName + "." + "These are some cool landmarks to see:" + this.landmarks + "." + " The best time of year to go is " + this.timeOfYear + "." + "Here are some additional things about it: " + this.notes + ".";
}

// User Interface