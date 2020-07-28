const btnEl = document.querySelector("#button-addon2");
let totalExp = 0;
const arr = [];
btnEl.addEventListener('click',handleSum,true);

function deleteItem(dateval) {
    const newarr = arr.filter(exp => exp.moment.valueOf() !== dateval);
    renderDesc(newarr);
}

function renderDesc (arr) {
    const descp = arr.map(elm => createEl(elm)).join('');
    const descEl = document.querySelector('#desc')
    descEl.innerHTML = descp;
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
        <button type="button" class="btn btn-outline-danger btn-sm" onclick="deleteItem(${moment.valueOf()})">
            <i class="fas fa-trash-alt"></i>
        </button>
    </div>
</li>`
}

function handleSum () {
    const inpEl = document.querySelector("#inpEl");
    let txtEl = inpEl.value;
    const inpEl2 = document.querySelector("#inpEl2");
    let txtEl2 = inpEl2.value;
    txtEl = parseInt(txtEl,10);
    const obj = {};
    obj.desc = txtEl2;
    obj.amount = txtEl;
    obj.moment = new Date;
    arr.push(obj);
    totalExp = totalExp + txtEl;
    const expEl = document.querySelector("#totalExp");
    expEl.textContent = `Total : ${totalExp}`;
    renderDesc(arr);
}