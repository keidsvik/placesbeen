// Business Logic

// Business logic for Travel Book
function TravelBook() {
  this.places = [],
  this.currentId = 0
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
    if(this.places[1]) {
      if(this.places[i].id == id) {
        return this.places[i];
    }
  }
};
  return false;
}

TravelBook.prototype.deletePlace = function(id) {
  for (let i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
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
  return this.placeName + " " + this.landmarks + " " + this.timeOfYear + this.notes;
}

// User Interface

let travelBook = new TravelBook();

function displayPlaceDetails(travelBookToDisplay) {
  let placesList = $("ul#places");
  let htmlForPlaceInfo = "";
  travelBookToDisplay.places.forEach(function(place) {
    htmlForPlaceInfo += "<li id=" + place.id + ">" + place.placeName + " " + place.landmarks + " " + place.timeOfYear + " " + place.notes + "</li>";
  });
  placesList.html(htmlForPlaceInfo);
};

function showPlace(placeId) {
  const place = travelBook.findPlace(placeId);
  $("#show-place").show();
  $(".place-name").html(place.placeName);
  $(".landmark").html(place.landmark);
  $(".notes").html(place.notes);
  $(".timeoyear").html(place.timeOfYear);
  let buttons = $("#buttons");
  buttons.empty();
  buttons.append("<button class='deleteButton' id" + + place.id + ">Delete</button>");
}

function attachPlaceListeners() {
  $("ul#places").on("click", "li", function() {
    showPlace(this.id);
    
  $("#buttons").on("click", ".deleteButton", function() {
    travelBook.deletePlace(this.id);
    $("#show-place").hide();
    displayPlaceDetails(travelBook);
    });
  });
};

$(document).ready(function() {
  attachPlaceListeners();
  $("form#new-place").submit(function(event) {
    event.preventDefault();
    const inputtedPlaceName = $("input#new-place-name").val();
    const inputtedLandmarks = $("input#new-landmark").val();
    const inputtedTimeofYear = $("input#new-time-of-year").val();
    const inputtedNotes = $("input#new-notes").val();

  $("input#new-place-name").val("");
  $("input#new-landmark").val("");
  $("input.timeoyear").val("");
  $("input.notes").val("");

    let newPlace = new Place(inputtedPlaceName, inputtedLandmarks, inputtedTimeofYear, inputtedNotes);
    travelBook.addPlace(newPlace);
    displayPlaceDetails(travelBook);
  });
});