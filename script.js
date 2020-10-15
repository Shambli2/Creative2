document.getElementById('songSubmit').addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("songInput").value;
  const artistValue = document.getElementById("artistInput").value;
  if (value === "" || artistValue === "")
    return;
  console.log(value);
  console.log(artistValue);
  const url = "https://api.lyrics.ovh/v1/" + artistValue + '/' + value;
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json){
    console.log(json);
    let results = "";
    results += '<h2>Lyrics: ' + json.lyrics + '</h2>';
    document.getElementById("lyricResults").innerHTML = results;
  })
})
