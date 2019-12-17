faker.locale="tr";
faker.seed(12345678);


class Kisi {
    constructor(ad, soyad, eadres, dt) {
        this.ad = ad;
        this.soyad = soyad;
        this.eadres = eadres;
        this.dt = dt;
    }
}

const KayitliKisiler = [{

        ad: faker.name.firstName(),
        soyad: faker.name.lastName(),
        dt: "1969-01-19",
        eadres: faker.address.zipCode()+" / "+faker.address.streetName()+" / "+faker.address.secondaryAddress()+" / "+faker.address.countryCode()+" / "+faker.address.state()
    },
    {
        ad: faker.name.firstName(),
        soyad: faker.name.lastName(),
        dt: "1984-05-04",
        eadres: faker.address.zipCode()+" / "+faker.address.streetName()+" / "+faker.address.secondaryAddress()+" / "+faker.address.countryCode()+" / "+faker.address.state()
    },
    {
        ad: faker.name.firstName(),
        soyad: faker.name.lastName(),
        dt: "1988-02-23",
        eadres: faker.address.zipCode()+" / "+faker.address.streetName()+" / "+faker.address.secondaryAddress()+" / "+faker.address.countryCode()+" / "+faker.address.state()
    }
];






const bilgiler = document.querySelectorAll('.bilgi');
function yazdir(x) {
    
    for(var i=0;i<x;i++){
        bilgiler[0].value=KayitliKisiler[i].ad;
        bilgiler[0].disabled=true;
        bilgiler[1].value=KayitliKisiler[i].soyad;
        bilgiler[1].disabled=true;
        bilgiler[2].value=KayitliKisiler[i].dt;
        bilgiler[2].disabled=true;
        bilgiler[3].innerHTML= "<option id='eadres' class=''>"+KayitliKisiler[i].eadres+"</option>";
        
    }
}
function makeClear(){
    bilgiler.forEach((i) => {
        i.value='';
        i.disabled=false;
        
    });
    let x=document.querySelector("#eadres");
    x.innerHTML=" ";


}
const log=document.querySelector(".login");
const list=document.querySelector("#tb");
function home(){
    if(log.classList.contains("d-none")){
        log.classList.remove("d-none");
        
    }
    if(!list.classList.contains("d-none")){
        list.classList.add("d-none");
    }
    


}
function showList(){
    
    
    if(list.classList.contains("d-none")){
        list.classList.remove("d-none");
        log.classList.add("d-none")
    }

}

function pass(){

    const list=document.querySelector("#kisi-list");

    const row=document.createElement("tr");
    row.innerHTML=`
    <td>${faker.random.number()}</td>
    <td>${bilgiler[1].value}</td>
    <td>${bilgiler[4].value}</td>
    <div class="text-center">
    <td class="m-0"><a href="#" class="btn btn-danger btn-sm delete">X</a>
    
    <td class="m-0"><a href="#" class="btn btn-warning btn-sm delete"><i class="fas fa-equals"></i></a>
    
    </td>
    </div>
    `;

    list.appendChild(row);
    makeClear();

}
