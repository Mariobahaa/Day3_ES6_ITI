async function init() {
    try {

        let req = await fetch('./rockbands.json');
        let opt = await req.json();

        let bandSel = document.querySelectorAll('select')[0];
        for (let i in opt)
            bandSel.innerHTML += `<option> ${i} </option>`;
        
        alert('choose a band');

    } catch {
        alert('Try again later');
    }

}
init();

var flag = false;
document.querySelectorAll('select')[0].onchange = async function () {
    document.querySelectorAll('select')[1].innerHTML= '';
    try {

        let req = await fetch('./rockbands.json');
        let opt = await req.json();

        let SingerSel = document.querySelectorAll('select')[1];

        SingerSel.innerHTML += `<option>Please select a singer</option>`;

        for (let j of opt[this.value]) {
            SingerSel.innerHTML += `<option> ${j['name']} </option>`;
        }
        
        flag = true;
        alert('Now choose a singer')
        
    } catch {
        alert('Try again later');
    }
}


document.querySelectorAll('select')[1].onchange = async function () {
    if (flag) {
        try {

            let req = await fetch('./rockbands.json');
            let opt = await req.json();

            let band = document.querySelectorAll('select')[0].value;
            let singer = document.querySelectorAll('select')[1].value;
            if (singer != null && singer != "Please select a singer" && band!= null){
                for (let j of opt[band]) {
                    if(j['name']==singer)
                        {
                            //console.log(j);
                            location.assign(j['value']);
                        }
                }
            }



        } catch {
            alert('Try again later');
        }
    }
}
