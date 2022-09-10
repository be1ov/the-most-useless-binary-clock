const container = document.getElementById("container")

let matrix = []

function drawMatrix() {
    container.innerHTML = ""
    for (let i = 0; i < matrix.length; i++) {
        const column = document.createElement("div")
        column.classList.add("col")
        column.setAttribute("data-value", (2 ** (matrix.length - i)).toString())
        if (matrix[i]) {
            column.classList.add("active")
        }
        container.appendChild(column)
    }
}

function updateMatrixByTs() {
    let ts_ms = Date.now()
    let ts = (ts_ms - ts_ms % 1000) / 1000

    let data = []
    while (ts > 0) {
        data.push(ts % 2)
        ts = (ts - ts % 2) / 2
    }
    data.reverse()

    document.getElementById("time").innerText = data.join("")

    matrix = []

    for (let i = 0; i < data.length; i++) {
        matrix.push(data[i])
    }
}

function cycle() {
    updateMatrixByTs()
    drawMatrix()
}

function init() {
    cycle()
    setInterval(() => {
        cycle()
    }, 1000)
}