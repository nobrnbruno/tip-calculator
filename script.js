function calculateTip(event){
    event.preventDefault();
    console.log(event);
    let bill = document.getElementById('bill').value;
    let service = document.getElementById('service').value;
    let clients = document.getElementById('clients').value;

    if (bill == '' | service == '0'){
        alert("Por favor, preencha todos os valores corretamente")
    }

    if (clients <= 1){
        clients=1;
        document.getElementById('each').style.display = "none";
    } else {
        document.getElementById('each').style.display = "block";
    }

    let total = (bill * service)/clients;
    total = total.toFixed(2);
    document.getElementById('tip').innerHTML = total;
    document.getElementById('totalTip').style.display = "block";
}

document.getElementById('totalTip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipForm').addEventListener('submit', calculateTip);