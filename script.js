function create_label(tagname,attrname,attrvalue,content){
    var label = document.createElement(tagname)
    label.setAttribute(attrname,attrvalue)
    label.innerHTML = content
    label.ClassName = "labels"
    return label 
}

function create_input(tagname,arr1name,attr1value,attr2name,attr2value,attr3name,attr3value){
    var input = document.createElement(tagname)
    input.setAttribute(arr1name,attr1value)
    input.setAttribute(attr2name,attr2value)
    input.setAttribute(attr3name,attr3value)
    input.className = "input"
    return input
}

function create_checkbox(tagname,ar1name,ar1value,ar2name,ar2value,ar3name,ar3value,){
    var checkbox = document.createElement(tagname)
    checkbox.setAttribute(ar1name,ar1value)
    checkbox.setAttribute(ar2name,ar2value)
    checkbox.setAttribute(ar3name,ar3value)
    return checkbox

}

function br(){
    var brr = document.createElement("br")
    return brr
}

function span(){
    var sp = document.createElement("span")
    sp.className = "span"
    return sp
}

 ////////////////////////////////Form///////////////////////////////////////////////

var form = document.createElement("form")
form.setAttribute("action","")
form.className = "mb3 mb-5 form-style"

var title = document.createElement("h2")
title.className = "title"
title.innerHTML = "Form Submission:"

var fn_label = create_label("label","for","firstname","First Name:");
var br2 =br()
var fn_input = create_input("input","type","text","id","firstname","placeholder","First Name");
var br3 = br();

var ln_label = create_label("label","for","lastname","Last Name:")
var br4 = br()
var ln_input = create_input("input","type","text","id","lastname","placeholder","Last Name");
var br5 = br();

var add1_label = create_label("label","for","address1","Address Line 1:");
var br6 =br()
var add1_input = create_input("input","type","text","id","address1","placeholder","Address Line 1");
var br7 = br();

var add2_label = create_label("label","for","address2","Address Line 2:")
var br8 = br()
var add2_input = create_input("input","type","text","id","address2","placeholder","Address Line 2");
var br9 = br();

var pin_label = create_label("label","for","pin","PIN:");
var br10 =br()
var pin_input = create_input("input","type","number","id","pin","placeholder","PIN");
var br11 = br();

var gender_label = create_label("label","for","gender","Gender:")
var br12 = br()

var male = document.createElement("input")
male.setAttribute("type","radio")
male.setAttribute("id","gender")
male.setAttribute("name","gender")
male.setAttribute("value","male")
var sp1 = document.createElement("span")
sp1.innerHTML = "Male"
sp1.className = "malem"

var female = document.createElement("input")
female.setAttribute("type","radio")
female.setAttribute("id","gender")
female.setAttribute("name","gender")
female.setAttribute("value","female")
female.className = "female"
var sp2 = document.createElement("span")
sp2.innerHTML = "Female"
sp2.className = "femalem"
var br13 =br()

var food = create_label("label","for","food","Choise Of Food:")
var sp3 = document.createElement("span")
sp3.className = "choise"
sp3.innerHTML = "(must choose atleast 2 out of 5 choises)"
var br14 = br()

var NR = create_checkbox("input","type","checkbox","id","food","value","north indian")
NR.setAttribute("name","food")
var sp4 = span()
sp4.innerHTML = "North Indian"
var br15 = br()

var SR = create_checkbox("input","type","checkbox","id","food","value","south indian")
SR.setAttribute("name","food")
var sp5 = span()
sp5.innerHTML = "South Indian"
var br16 = br()

var chinese = create_checkbox("input","type","checkbox","id","food","value","chinese")
chinese.setAttribute("name","food")
var sp6 = span()
sp6.innerHTML = "Chinese"
var br17 = br()

var jap = create_checkbox("input","type","checkbox","id","food","value","japanese")
jap.setAttribute("name","food")
var sp7 = span()
sp7.innerHTML = "Japanese"
var br18 = br()

var seafood = create_checkbox("input","type","checkbox","id","food","value","sea food")
seafood.setAttribute("name","food")
var sp8 = span()
sp8.innerHTML = "Sea Food"
var br19 = br()

var state = create_label("label","for","state","State:")
var br20 = br()
var st = create_input("input","type","text","id","state","placeholder","State")
var br21 = br()

var country = create_label("label","for","country","Country:")
var br22 = br()
var cn = create_input("input","type","text","id","country","placeholder","Country")
var br23 = br()
var br24 = br()

var button = document.createElement("button")
button.setAttribute("type","submit")
button.setAttribute("id","submit")
button.className = "btn btn-secondary"
button.innerHTML = "Submit"

////////////////////////////////////////////////Table////////////////////////////////////////////////////

var h1 = document.createElement("h1")
h1.innerHTML = "Temporary Database"
history.className = "temp"
var table = document.createElement("table")
table.className = "table table-stripped"
var thead = document.createElement("thead")
thead.className = "bg-dark text-light"
var tr = document.createElement("tr")
var td = document.createElement("td")
td.innerHTML = "First Name"
var td1 = document.createElement("td")
td1.innerHTML = "Last Name"
var td2 = document.createElement("td")
td2.innerHTML = "Address"
var td3 = document.createElement("td")
td3.innerHTML = "Pincode"
var td4 = document.createElement("td")
td4.innerHTML = "Gender"
var td5 = document.createElement("td")
td5.innerHTML = "Food"
var td6 = document.createElement("td")
td6.innerHTML = "State"
var td7 = document.createElement("td")
td7.innerHTML = "Country"

var tbody = document.createElement("tbody")
tbody.className = "tbody"
tbody.id = "tbody"

tr.append(td,td1,td2,td3,td4,td5,td6,td7)
thead.append(tr,)
table.append(thead,tbody)



form.append(title,fn_label,br2,br2,fn_input,br3,ln_label,br4,ln_input,br5,add1_label,br6,add1_input,
    br7,add2_label,br8,add2_input,br9,pin_label,br10,pin_input,br11,gender_label,br12,male,sp1,female,sp2,br13,food,sp3,br14,NR,sp4,br15,SR,sp5,br16,
    chinese,sp6,br17,jap,sp7,br18,seafood,sp8,br19,state,br20,st,br21,country,br22,cn,br23,br24,button)

    document.body.append(form,h1,table)

    /////////////////////////////////submit button function///////////////////////////////////////////////

    let submit = document.getElementById("submit")
    submit.addEventListener("click",function(e){
    e.preventDefault();
    let address = [];
    address.push(address1.value)
    address.push(address2.value)

    let gender = document.getElementsByName("gender")
    let genderValue;
    for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
            genderValue = gender[i].value
        }
    }
    
    let food = document.getElementsByName("food")
    let foodList = []
    let foodCount = 0;
    console.log(food)
    for(let i=0;i<food.length;i++){
        if(food[i].checked){
            foodList.push(food[i].value)
            foodCount++
        }
    }
    if(foodList.length>=2){
        result = foodList.join(", ")
    }else{
        result = alert("Choose atleast 2 options")
    }

    createTable(firstname.value,lastname.value,address.join(" "),pin.value,genderValue,result,state1.value,country1.value)
    firstname.value = ""
    lastname.value = ""
    address1.value = ""
    address2.value = ""
    pin.value = ""
    gender.value = ""
    foodList = [];
    state1.value = ""
    country1.value = ""
})

let firstname = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let address1 = document.getElementById("address1")
let address2 = document.getElementById("address2")
let pin = document.getElementById("pin")
let gender = document.getElementById("gender")
let food1 = document.getElementById("food")
let state1 = document.getElementById("state")
let country1 = document.getElementById("country")


function createTable(firstname,lastname,address,pincode,gender,food1,state1,country1){
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = firstname;
    td2.innerHTML = lastname;
    td3.innerHTML = address;
    td4.innerHTML = pincode;
    td5.innerHTML = gender;
    td6.innerHTML = food1;
    td7.innerHTML = state1;
    td8.innerHTML = country1;
    tr.append(td1)
    tr.append(td2)
    tr.append(td3)
    tr.append(td4)
    tr.append(td5)
    tr.append(td6)
    tr.append(td7)
    tr.append(td8)
    tbody.append(tr)
}