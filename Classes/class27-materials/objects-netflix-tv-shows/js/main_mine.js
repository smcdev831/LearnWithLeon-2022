//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class NetflixShow {
  constructor(showGenre, showRating, showSeries, showLength) {
    this.genre = showGenre
    this.rating = showRating
    this.series = showSeries
    this.length = showLength
  }
}

watched(){
  alert('You watched this already')
}
