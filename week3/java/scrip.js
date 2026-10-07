let form_tugas = document.getElementById("form_tugas");
let input_tugas = document.getElementById("input_tugas");
let List_tugas = document.getElementById("List_tugas");

// let saved_tugas = []
let saved_tugas_storage = JSON.parse(localStorage.getItem("tugasku")) || []

function renderTugas() {
    List_tugas.innerHTML = '';


    for (const tugas of saved_tugas_storage) {
        let tugas_baru = document.createElement("li");
        tugas_baru.textContent = tugas;
        List_tugas.appendChild(tugas_baru);
    }
}
//     for (let i = 0; i < saved_tugas.length; i++) {
//         let tugas_baru = document.createElement("li");
//         tugas_baru.textContent = saved_tugas;
//         List_tugas.appendChild(tugas_baru);
//     }
// }

// form_tugas.addEventListener("submit", function(event) {
//     event.preventDefault();

//     saved_tugas.push(input_tugas.value);
//     randerTugas();
//     input_tugas.value = '';
// });


renderTugas();

form_tugas.addEventListener("submit", function(event) {
    event.preventDefault()

    saved_tugas_storage.push(input_tugas.value)
    localStorage.setItem("tugasku", JSON.stringify(saved_tugas_storage))

    renderTugas()
    input_tugas.value = ''
})

// form_tugas.addEventListener("submit", function(event) {
//     event.preventDefault();

//     if (input_tugas.value.trim() !== "") {
//         let tugas_baru = document.createElement("li");
//         tugas_baru.textContent = input_tugas.value;
//         List_tugas.appendChild(tugas_baru);

//         input_tugas.value = '';

//     }
// });