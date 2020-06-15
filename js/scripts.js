// Business Logic

// Business logic for Travel Book
function TravelBook() {
  this.places = [];
  this.currentId = 0;
}

TravelBook.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

TravelBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

TravelBook.prototype.findPlace = function() {
  for (let i=0; i< this.places.length; i++) {
    if(this.places[i].id == id) {
      return this.places[i];
    }
  };
  return false;
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