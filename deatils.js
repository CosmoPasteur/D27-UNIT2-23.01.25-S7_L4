//Questo è il dato di ID, queste due operazioni ricavano il dato.
const params = new URLSearchParams(window.location.search());
const imgId = params.get("imgId");
console.log(imgId);

fetch("https://api.pexels..com/v1/photos/" + imgId, {
  method: "GET",
  headers: {
    Authorization: 

  } ,
}).then((response) => {
    if (response.ok){
        return response.json();
    } else {
        throw new Error ("ERRORE");
    }
})
.then((photoObj) => {
    console.log(photoObj);
    const wrapper = document.createElement("wrapper");
    const img = document.createElement("img");
    img.serc = photoObj.src.large;
    img.alt = photoObj.alt;
    const h4 = document.createElement("h4");
    h4.innerText = photoObj.photographer;
    const link = document.createElement("a");
    link.href = photoObj.photographer_url;
    link.innerText = "Vai sul sito del fotografo";
    wrapper.appendChild(img)
    wrapper.appendChild(h4);
    wrapper.appendChild(link);
})
