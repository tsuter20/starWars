function test() {
    swapiModule.getFilms(1, function(data) {
        
        for (var result of data.results) {
            var x = document.createElement("li");
            var y = document.createTextNode(result.title);

            x.appendChild(y);

            document.getElementById("movieList").appendChild(x);
        }

        console.log(array);
    });
}