function test() {
    swapiModule.getFilms(1, function(data) {
        var array = [];
        for (var result of data.results) {
            array.push(result.title);
        }

        console.log(array);
    });
}