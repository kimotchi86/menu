let gyps = document.querySelector('.product1');
let m3dn = document.querySelector('.product2');
let acc = document.querySelector('.product3');

let productsOne = [
    { id: 1, name: "   جبس أبيض كناوف 3 م", unit: "لوح", price: 335},
    { id: 2, name: "   جبس أبيض كناوف 2.50 م", unit: "لوح", price: 280},
    { id: 3, name: "  جبس أخضر كناوف ", unit: "لوح", price: 410},
    { id: 4, name: "جبس أحمر كناوف", unit: "لوح", price: 410},
    { id: 5, name: "جبس أبيض جي بورد", unit: "لوح", price: 265},
    { id: 6, name: "جبس أخضر جي بورد", unit: "لوح", price: 370},
    { id: 7, name: "جبس أخضر جي بورد", unit: "لوح", price: 370}
];

let productsTwo = [
    { id: 8, name: " زاوية 3", unit: "عود", price: 15},
    { id: 9, name: " أوميجا 3", unit: "عود", price: 30},
    { id: 10, name: " سي 3", unit: "عود", price: 23},
    { id: 11, name: " زاوية 33", unit: "عود", price: 16},
    { id: 12, name: " أوميجا 33", unit: "عود", price: 32},
    { id: 13, name: " سي 33", unit: "عود", price: 24},
    { id: 14, name: " زاوية 35", unit: "عود", price: 19},
    { id: 15, name: " أوميجا 35", unit: "عود", price: 38},
    { id: 16, name: " سي 35", unit: "عود", price: 29},
    { id: 17, name: " زاوية 4", unit: "عود", price: 22},
    { id: 18, name: " أوميجا 4", unit: "عود", price: 44},
    { id: 19, name: " سي 4", unit: "عود", price: 33},
    { id: 20, name: " خشن 5 سم سمك 0.4", unit: "عود", price: 60},
    { id: 21, name: "  ناعم 5 سم سمك 0.4", unit: "عود", price: 55},
    { id: 22, name: " خشن 7 سم سمك 0.4", unit: "عود", price: 70},
    { id: 23, name: "  ناعم 7 سم سمك 0.4", unit: "عود", price: 65}
]
let productsThree = [
    { id: 24, name: " ميتال", unit: "بكرة", price: 110},
    { id: 25, name: " فايبر", unit: "بكرة", price: 70},
    { id: 26, name: " معجون كناوف", unit: "شيكارة", price: 85},
    { id: 27, name: " معجون اكسترا فيل", unit: "شيكارة", price: 70},
    { id: 28, name: " معجون ايزي فيل", unit: "شيكارة", price: 130},
    { id: 29, name: " مسمار 25 كيلو", unit: "علبة", price: 100},
    { id: 30, name: " مسمار 35 كيلو", unit: "علبة", price: 100},
    { id: 31, name: " مسمار 25 صن شاين", unit: "علبة", price: 125},
    { id: 32, name: " مسمار 35 صن شاين", unit: "علبة", price: 135},
    { id: 33, name: " مسمار تك", unit: "علبة", price: 120},
    { id: 34, name: " مسمار تخويش", unit: "علبة", price: 130},
    { id: 35, name: " مسمار جنش", unit: "علبة", price: 65},
    { id: 36, name: " أكمن مستورد", unit: "علبة", price: 130},
    { id: 37, name: " فيشر", unit: "علبة", price: 5},
    { id: 38, name: " تيش 6 مم مستورد", unit: "عود", price: 25},
    { id: 39, name: " تيش 8 مم مستورد", unit: "عود", price: 35},
    { id: 40, name: " كورنر بيد", unit: "عود", price: 25},
    { id: 41, name: " اند بيد", unit: "عود", price: 27},
    { id: 42, name: "  شادو جاب", unit: "عود", price: 95},
    { id: 43, name: " عصفورة U", unit: "عدد", price: 1.25},
    { id: 44, name: " عصفورة L", unit: "عدد", price: 2.5},
    { id: 45, name: " صامولة ", unit: "كجم", price: 90},
    { id: 46, name: " سلك", unit: "كجم", price: 90},
    { id: 47, name: " كورنير", unit: "زاوية", price: 23},
    { id: 48, name: " اكسسوار", unit: "متر", price: 50},
    { id: 49, name: " بلاطات ديكوراما 7 مم", unit: "متر", price: 150},
    { id: 50, name: " بلاطات سادة 7 مم", unit: "متر", price: 150},
]

function displayGyps(filteredGyps) {
    gyps.innerHTML = ""; 
    filteredGyps.forEach(product => {
        gyps.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.unit}</td>
                <td>${product.price}</td>
            </tr>
        `
    });
}
function displayM3dn(filteredM3dn) {
    m3dn.innerHTML = ""; 
    filteredM3dn.forEach(product => {
        m3dn.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.unit}</td>
                <td>${product.price}</td>
            </tr>
        `
    })
}
function displayAcc(filteredAcc) {
    acc.innerHTML = ""; 
    filteredAcc.forEach(product => {
        acc.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.unit}</td>
                <td>${product.price}</td>
            </tr>
        `
    });
}

displayGyps(productsOne);
displayM3dn(productsTwo);
displayAcc(productsThree);
