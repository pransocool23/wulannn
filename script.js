let data = JSON.parse(localStorage.getItem("kehadiran")) || [];

function tampilkanData() {
    const tabel = document.getElementById("tabelData");
    tabel.innerHTML = "";

    data.forEach((item, index) => {
        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.status}</td>
            </tr>
        `;
    });
}

function tambahData() {
    const nama = document.getElementById("nama").value;
    const status = document.getElementById("status").value;

    if (nama === "") {
        alert("Nama tidak boleh kosong!");
        return;
    }

    data.push({ nama, status });
    localStorage.setItem("kehadiran", JSON.stringify(data));

    document.getElementById("nama").value = "";
    tampilkanData();
}

tampilkanData();
