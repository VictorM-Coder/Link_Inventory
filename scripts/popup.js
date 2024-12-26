document.getElementById("btn-cancel")
    .addEventListener("click", function () {
        window.close()
    })

btnAddlink = document.getElementById("btn-addlink")
btnLibrary = document.getElementById("btn-library")

btnAddlink.addEventListener("click", () => {
    btnAddlink.disabled = true
    btnLibrary.disabled = false
})

btnLibrary.addEventListener("click", () => {
    btnLibrary.disabled = true
    btnAddlink.disabled = false
})