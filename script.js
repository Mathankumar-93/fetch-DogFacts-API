// Here i'm using async and await keyword for to fetching details from Api.

let getBibleVerse = async () => {
  let readableStream = await fetch(`https://dogapi.dog/api/facts`);
  let data = await readableStream.json();

  // Using try and catch instead of .then() and catch() block.

  try {
    let content = document.createElement("div");
    document.body.appendChild(content);
    content.innerHTML = `<div class="container"><h2 class="facts">${data.facts}</h2>
    <button class="refersh btn btn-primary btn-lg" onclick="refreshPage()">Refresh</button>
    </div>`;
  } catch (error) {
    console.log(error);
  }
};

function refreshPage() {
  location.reload();
}

getBibleVerse();
