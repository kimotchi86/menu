let gyps = document.querySelector('.product1');
let m3dn = document.querySelector('.product2');
let acc = document.querySelector('.product3');

let productsOne = [
    { id: 1, name: " جبس أبيض كناوف", unit: "لوح", price: 235},
    { id: 2, name: "  جبس أخضر كناوف ", unit: "لوح", price: 325},
    { id: 3, name: "جبس أحمر كناوف", unit: "لوح", price: 335},
    { id: 4, name: "جبس أبيض جي بورد", unit: "لوح", price: 200},
    { id: 5, name: "جبس أخضر جي بورد", unit: "لوح", price: 270}
];

let productsTwo = [
    { id: 6, name: " زاوية 3", unit: "عود", price: 26},
    { id: 7, name: " أوميجا 3", unit: "عود", price: 52},
    { id: 8, name: " سي 3", unit: "عود", price: 39},
    { id: 9, name: " زاوية 35", unit: "عود", price: 30},
    { id: 10, name: " أوميجا 35", unit: "عود", price: 60},
    { id: 11, name: " سي 35", unit: "عود", price: 45},
    { id: 12, name: " زاوية 4", unit: "عود", price: 36},
    { id: 13, name: " أوميجا 4", unit: "عود", price: 72},
    { id: 14, name: " سي 4", unit: "عود", price: 54},
    { id: 15, name: " خشن 5 سم", unit: "عود", price: 95},
    { id: 16, name: "  ناعم 5 سم", unit: "عود", price: 90},
    { id: 17, name: "  خشن 7 سم", unit: "عود", price: 110},
    { id: 18, name: "  ناعم 7 سم", unit: "عود", price: 105}
]
let productsThree = [
    { id: 19, name: " ميتال", unit: "بكرة", price: 130},
    { id: 20, name: " فايبر", unit: "بكرة", price: 85},
    { id: 21, name: " معجون كناوف", unit: "شيكارة", price: 90},
    { id: 22, name: " معجون اكسترا فيل", unit: "شيكارة", price: 75},
    { id: 23, name: " مسمار 25 كيلو", unit: "علبة", price: 125},
    { id: 24, name: " مسمار 35 كيلو", unit: "علبة", price: 125},
    { id: 25, name: " مسمار 25 صن شاين", unit: "علبة", price: 165},
    { id: 26, name: " مسمار 35 صن شاين", unit: "علبة", price: 175},
    { id: 27, name: " مسمار تك", unit: "علبة", price: 200},
    { id: 28, name: " مسمار جنش", unit: "علبة", price: 70},
    { id: 29, name: " أكمن", unit: "علبة", price: 160},
    { id: 30, name: " فيشر", unit: "علبة", price: 6},
    { id: 31, name: " تيش مصري", unit: "عود", price: 35},
    { id: 32, name: " تيش مستورد", unit: "عود", price: 40},
    { id: 33, name: " كورنر بيد", unit: "عود", price: 40},
    { id: 34, name: " آند بيد", unit: "عود", price: 40},
    { id: 34, name: "  شادو جاب", unit: "عود", price: 125},
    { id: 35, name: " عصفورة U", unit: "عدد", price: 1.5},
    { id: 36, name: " عصفورة L", unit: "عدد", price: 3},
    { id: 36, name: " صامولة ", unit: "كجم", price: 100},
    { id: 37, name: " سلك", unit: "كجم", price: 100},
    { id: 37, name: " كورنير", unit: "زاوية", price: 35},
    { id: 38, name: " اكسسوار", unit: "متر", price: 80},
    { id: 39, name: " بلاطات ديكوراما 7 مم", unit: "متر", price: 95},
    { id: 40, name: " بلاطات سادة 7 مم", unit: "متر", price: 100},
]

function displayGyps(filteredGyps) {
    gyps.innerHTML = ""; 
    filteredGyps.forEach(product => {
        gyps.innerHTML += `
            <div class="one d-flex justify-content-between">
                <p>${product.name}</p>
                <div class="number d-flex">
                    <p class="u">${product.unit}</p>
                    <p class="pr">${product.price}</p>
                </div>
                </div>
                
        `;
    });
}
function displayM3dn(filteredM3dn) {
    m3dn.innerHTML = ""; 
    filteredM3dn.forEach(product => {
        m3dn.innerHTML += `
            <div class="one d-flex justify-content-between">
                <p>${product.name}</p>
                <div class="number d-flex">
                    <p class="u">${product.unit}</p>
                    <p class="pr">${product.price}</p>
                </div>
            </div>
            
        `;
    })
}
function displayAcc(filteredAcc) {
    acc.innerHTML = ""; 
    filteredAcc.forEach(product => {
        acc.innerHTML += `
            <div class="one d-flex justify-content-between">
                <p>${product.name}</p>
                <div class="number d-flex">
                    <p class="u">${product.unit}</p>
                    <p class="pr">${product.price}</p>
                </div>
            </div>
            
        `;
    });
}

displayGyps(productsOne);
displayM3dn(productsTwo);
displayAcc(productsThree);
