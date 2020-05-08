function run() {
    document.getElementById("searchq").innerHTML = "";
    $.ajax({

        url: 'https://itunes.apple.com/search?term=' + document.getElementById("Artist").value + '&limit=' +document.getElementById("results").value,
        dataType: "jsonp",
        success: process
    });
}

function process(data) {
    console.log(data);

    var songs = data.results;
    var o = "";
    if(songs.length == 0){
        document.getElementById("searchq").innerHTML = "Im sorry but there were no results for your search query";
    }else{
        for (var p = 0; p < songs.length; p++) {
            var v = p + 1;
            var x = songs[p].artworkUrl100;
            console.log(x);
            var z = songs[p].previewUrl;
            console.log(z);
            o += "<tr>";
            o += "<td>" + v + "</td>";
            o += "<td>" + songs[p].artistName + "</td>";
            o += "<td>" + songs[p].trackName + "</td>";
            o += "<td>" + songs[p].collectionName + "</td>";
            o += "<td>" + "<audio controls> <source src='" + z + "' type='audio/mp4'></audio>" + "</td>";
            o += "<td>" + "<img src='" + x + "' alt='SongArtwork'>"+ "</td>";
            o += "</tr>";
        }
        var table = document.getElementById("final");
        table.innerHTML = o;
        table.style.display = "block";
    }

}