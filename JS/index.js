const inpEl = document.querySelector("#inpEl");
const inpDescEl = document.querySelector("#inpDescEl");
const btnEl = document.querySelector("#button-addon2");
const expEl = document.querySelector("#totalExp");
const descEl = document.querySelector('#desc')
let totalExp = 0;
updateTotal();

let expenseArray = [];

btnEl.addEventListener('click',handleSum,false);
document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        handleSum();
    }
  });

function deleteItem(dateval,amount) {
    const newarr = expenseArray.filter(exp => exp.moment.valueOf() !== dateval);
    renderDesc(newarr);
    console.log(amount);
    totalExp -= amount;
    console.log(totalExp);
    updateTotal();
}


function renderDesc (arr) {
    const descp = arr.map(elm => createEl(elm));
    descEl.innerHTML = descp.join("");
    expenseArray = arr;
}

function updateTotal() {
    expEl.textContent = `Total : ${totalExp} ₹`;
}

function createEl ({desc,amount,moment}) {
    return `<li class="list-group-item d-flex justify-content-between">
    <div class="d-flex flex-column">
        ${desc}
        <small class="text-muted">${moment.toLocaleDateString('en-US',{year:'numeric',day:'numeric',hour:'numeric',minute:'numeric',month:'long',second:'numeric'})}</small>
    </div>
    <div>
        <span class="px-5">
        ${amount} ₹
        </span>
        <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteItem(${moment.valueOf()},${amount})">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
</li>`
}

function handleSum () {
    const obj = {};
    let txtEl = inpEl.value;
    let txtEl2 = inpDescEl.value;
    txtEl = parseInt(txtEl,10);
    if (txtEl2 !== "" && !isNaN(txtEl) && txtEl > 0) {
        obj.desc = txtEl2;
        obj.amount = txtEl;
        obj.moment = new Date();

        totalExp = totalExp + txtEl;
        updateTotal();
        expenseArray.push(obj);

        renderDesc(expenseArray);
        inpEl.value = "";
        inpDescEl.value = "";
    }
    else {
        alert('Enter all fields properly')
    }
}