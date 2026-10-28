let output = document.getElementById("output");
let text_in = document.getElementById("name");

async function new_directory(){
    const name = text_in.value;
    const response = await fetch("/mkdir/" + name);
    output.textContent = await response.text();
}

async function new_file(){
    const name = text_in.value;
    const response = await fetch("/mkfile/" + name);
    output.textContent = await response.text();
}

async function show_files() {
    //Write here
}
