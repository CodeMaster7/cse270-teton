let url = new URL(window.location);
let params  = url.searchParams;
let form = document.querySelector("form")

if (form != null) {
  for (const p of params) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = p[0];
    input.value = p[1];
    form.appendChild(input);
  }
}

let cd = document.querySelector("#currentdate");

if (cd != null){
    cd.value = new Intl.DateTimeFormat("en-US").format(new Date())
}