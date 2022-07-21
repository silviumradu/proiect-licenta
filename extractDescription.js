function revealText () {
    const postClass = document.getElementsByClassName("qzhwtbm6 knvmm38d");
    const textDescription = postClass[2].innerText;

    descriptionOfThePost += `${textDescription}`;
    descriptionArray = descriptionOfThePost.split(" ");

    return descriptionOfThePost;
}

function displayLength () {
    revealText();
    console.log(descriptionOfThePost);
    alert(descriptionOfThePost);
}

//const waitForDisplayDescription = setTimeout(displayLength, 5000);
