favMovies = []

function Movie(title, directors, genre, year, actors, rating, liked){
  this.title = title
  this.director = directors
  this.genre = genre
  this.year = year
  this.actors = actors
  this.rating = rating
  this.liked = liked

}

favMovies.push(new Movie("Good Will Hunting", ["Gus Van Sant"], "Drama", "1997", ["Matt Damon","Ben Affleck", "Minnie Driver", "Robin Williams"], {star: 7.3, meta: 86}, true))
favMovies.push(new Movie("Fellowship of the Ring", ["Peter Jackson"], "Fantasy", "2001", ["Elijah Wood", "Ian McKellen", "Liv Tyler", "Viggo Mortensen", "Sean Astin", "Orlando Bloom", "Cate Blanchett", "Christopher Lee"], {star: 8.8, meta: 92}, true))
favMovies.push(new Movie("The Big Short", ["Adam McKay"], "Drama", "2015", ["Brad Pitt", "Steve Carrell", "Ryan Goslin", "Christian Bale"], {star: 7.8, meta: 81}, true))
favMovies.push(new Movie("The Emperor's New Groove", ["Mark Dindal"], "Cartoon", "2000", ["David Spade", "John Goodman", "Eartha Kitt", "Patrick Warburton", "Wendie Malick"], {star: 7.3, meta: 70}, true))
favMovies.push(new Movie("Beasts of the Southern Wild", ["Benh Zeitlin"], "Indie", "2012", ["Quvenzhane Wallis", "Dwight Henry"], {star: 7.3, meta: 86}, true))

favMovies.push(new Movie("Transformers Age of Exinction", ["Michael Bay"], "Action", "2014", ["Mark Wahlberg", "Stanley Tucci"], {star: 5.7, meta: 32}, false))
favMovies.push(new Movie("The Expendables", ["Slyvester Stallone"], "Action", "2010", ["Slyvester Stallone", "Jason Statham", "Jet Li", "Dolph Lundgren", "Eric Roberts", "Steve Austin"], {star: 6.5, meta: 43}, false))
favMovies.push(new Movie("Night at the Museum", ["Shawn Levy"], "Comedy", "2006", ["Ben Stiller", "Carla Gugino", "Ricky Gervais", "Dick Van Dyke"], {star: 6.4, meta: 48}, false))
favMovies.push(new Movie("The Last Airbender", ["M. Night Shyamalan"], "Drama", "2010", ["Noah Ringer", "Dev Patel", "Nicola Peltz"], {star: 4.2, meta: 20}, false))
favMovies.push(new Movie("Argo", ["Ben Affleck"], "Drama", "2012", ["Ben Affleck", "Bryan Cranston", "Alan Arkin", "John Goodman"], {star: 7.7, meta: 86}, false))

favMovies.sort(function(a, b){
  if(a.title > b.title){
    return 1
  }
  if(a.title < b.title){
    return -1
  }

  return 0
})

console.log(JSON.stringify(favMovies))

favMovies.sort(function(a, b){
  if(a.rating["star"] > b.rating["star"]){
    return -1
  }
  if(a.rating["star"] < b.rating["star"]){
    return 1
  }

  return 0
})

function formatArray(arr){
    var outStr = "";
    if (arr.length === 1) {
        outStr = arr[0];
    } else if (arr.length === 2) {
        outStr = arr.join(' and ');
    } else if (arr.length > 2) {
        outStr = arr.slice(0, -1).join(', ') + ', and ' + arr.slice(-1);
    }
    return outStr;
}

htmlString = ""

favMovies.forEach(function(movie){
htmlString += "<tr>" + "<td>" + movie.title + "</td>"
htmlString += "<td>" + movie.director + "</td>"
htmlString += "<td>" + movie.genre + "</td>"
htmlString += "<td>" + movie.year + "</td>"
htmlString += "<td>" + formatArray(movie.actors) + "</td>"
htmlString += "<td>" + movie.rating["star"] + "</td>"
htmlString += "<td>" + movie.rating["meta"] + "</td>"
htmlString += "<td>" + movie.liked + "</td>" + "</tr>"

})

document.getElementById("movies-objects").innerHTML = "<tr><th>Title</th><th>Director(s)</th><th>Genre</th><th>Year</th><th>Actor(s)</th><th>Star Rating</th><th>Metacritic Rating</th><th>Liked?</th></tr>"
document.getElementById("movies-objects").innerHTML += htmlString
