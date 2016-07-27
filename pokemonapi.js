xhr1 = new XMLHttpRequest()
xhr1.open("GET", "http://pokeapi.co/api/v2/type/17/", false)
xhr1.send()
var darkPokemon = []
darkPokemon.push(JSON.parse(xhr1.responseText))

console.log(darkPokemon)
darkPokemonNames = []
darkPokemon[0].pokemon.forEach(function(pokemon){
  darkPokemonNames.push(pokemon.pokemon.name)
})
xhr2 = new XMLHttpRequest()
var darkPokemonAll = []

darkPokemonNames.forEach(function(name){
  xhr2.open("GET", `http://pokeapi.co/api/v2/pokemon/${name}/`, false)
  xhr2.send()
  darkPokemonAll.push(JSON.parse(xhr2.responseText))
})
console.log(darkPokemonNames)
console.log(darkPokemonAll)
//
// darkPokemonAllNames = []
// darkPokemonAllPictures = []
// darkPokemonAllTotalStats = []
// darkPokemonAll.forEach(function(pokemon){
//   darkPokemonAllNames(pokemon.name)
//   darkPokemonAllTotalStats(pokemon.stats.reduce((sum, base_stat) => sum + base_stat, 0))
//   darkPokemonAllPictures(pokemon.sprites.front_default)
// })
//
// console.log(darkPokemonAllPictures)
// console.log(darkPokemonAllTotalStats)
// console.log(darkPokemonAllNames)
darkPokemonAll.sort(function(a, b){
  if(a.stats.reduce((sum, x) => sum + x.base_stat, 0) > b.stats.reduce((sum, x) => sum + x.base_stat, 0)){
    return -1
  }
  if(a.stats.reduce((sum, x) => sum + x.base_stat, 0) < b.stats.reduce((sum, x) => sum + x.base_stat, 0)){
    return 1
  }

  return 0
})


document.getElementById("darkPoke").innerHTML = "<tr><th>Picture</th><th>Name</th><th>Total Stats</th><th>Speed</th><th>Special Defense</th><th>Special Attack</th><th>Defense</th><th>Attack</th><th>HP</th></tr>"
darkPokemonAll.forEach(function(pokemon){
document.getElementById("darkPoke").innerHTML += `<tr><th><img src=${pokemon.sprites.front_default}></th><th>${pokemon.name}</th><th>${pokemon.stats.reduce((sum, x) => sum + x.base_stat, 0)}</th><th>${pokemon.stats[0].base_stat}</th><th>${pokemon.stats[1].base_stat}</th><th>${pokemon.stats[2].base_stat}</th><th>${pokemon.stats[3].base_stat}</th><th>${pokemon.stats[4].base_stat}</th><th>${pokemon.stats[5].base_stat}</th></tr>`
})
