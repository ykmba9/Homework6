$("button").on("click", function () {
    var animal = $(this).attr("data-animal");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        let data = response.data;

        //make a variable named results and set it equal to response.data
        //For each results:
        for (let i = 0; i < data.length; i++) {

            //make a div with jQuery and store it in a variable called animalDiv
            let animalDiv = $("<div>");

            //make a paragraph tag with jQuery and store it in a vaiable called p
            let p = $("<p>");

            //set the inner text of the paragraph to the rating of the image in results[i]
            p.text(data[i].rating);

            //set an image tag with jQuery and store it in a variable called animalImage
            let animalImage = $("<img>");

            //set the image's src to results[i]'s fixed_height.url
            animalImage.attr("src", data[i].images.fixed_height.url);

            //append p variable to animalDiv variable
            animalDiv.append(p);

            //append animalImage variable to animalDiv variable
            animalDiv.append(animalImage);
            
            //prepend the animalDiv variable to the element with an id of gifs
            $("#gifs").append(animalDiv);


        }
    })
})
