async function random() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const cat = await response.json();
    var picture = document.getElementById("mycat");
    picture.src = cat[0].url;
    picture.alt = "random cat number " + cat[0].url;
}