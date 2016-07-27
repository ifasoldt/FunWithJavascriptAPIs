xhr1 = new XMLHttpRequest()
xhr1.open("GET", "http://www.omdbapi.com/?t=Big Lebowski&tomatoes=true", false)
xhr1.send()
var myMovies = []
myMovies.push(JSON.parse(xhr1.responseText))

xhr2 = new XMLHttpRequest()
xhr2.open("GET", "http://www.omdbapi.com/?t=Batman Begins&tomatoes=true", false)
xhr2.send()
myMovies.push(JSON.parse(xhr2.responseText))

xhr3 = new XMLHttpRequest()
xhr3.open("GET", "http://www.omdbapi.com/?t=Princess Bride&tomatoes=true", false)
xhr3.send()
myMovies.push(JSON.parse(xhr3.responseText))


// Add your code above this line!
console.log(myMovies)

document.getElementById("omdbapi").innerHTML = "<tr><th>Title</th><th>Year</th><th>Plot</th><th>Tomato Meter</th><th>Tomato Consensus</th></tr>"
myMovies.forEach(function(movie){
document.getElementById("omdbapi").innerHTML += "<tr><td>" + movie.Title + "</td><td>" + movie.Year + "</td><td>" + movie.Plot + "</td><td>" + movie.tomatoMeter + "</td><td>" + movie.tomatoConsensus + "</td></tr>"
})
