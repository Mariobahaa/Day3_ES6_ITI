async function init() {
    try {

        let req = await fetch('./rockbands.json');
        let opt = await req.json();

        let bandSel = document.querySelectorAll('select')[0];
        for (let i in opt)
            bandSel.innerHTML += `<option> ${i} </option>`;

    } catch {
        alert('Try again later');
    }

}
init();


document.querySelectorAll('select')[0].onchange = async function () {
    try {

        let req = await fetch('./rockbands.json');
        let opt = await req.json();

        let SingerSel = document.querySelectorAll('select')[1];
        
        console.log(opt[this.value]);
        for (let j of opt[this.value]){
            SingerSel.innerHTML += `<option> ${j['name']} </option>` ;       
        }

    } catch {
        alert('Try again later');
    }
}
