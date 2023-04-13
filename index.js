function createelement(tagname,attname,attvalue,content){
    let ele = document.createElement(tagname);
    ele.setAttribute(attname,attvalue);
    ele.innerHTML=content;
    return ele
}

function linebreaker(tagname){
    let ele = document.createElement(tagname)
    return ele
}

function inputele(tagname,attname,attvalue,attname1,attvalue1){
    let ele = document.createElement(tagname);
    ele.setAttribute(attname,attvalue)
    ele.setAttribute(attname1,attvalue1)
    return ele
}

var firstname_label = createelement("label","for","fname","FirstName")
var linebreake = linebreaker("br")
var linebreake1 = linebreaker("br")
var firstname_input = inputele("input","type","text","id","fname")
document.body.append(firstname_label,linebreake,firstname_input,linebreake1)

var midname_label = createelement("label","for","mname","MiddleName")
var linebreake4 = linebreaker("br")
var linebreake5 = linebreaker("br")
var midname_input = inputele("input","type","text","id","mname")
document.body.append(midname_label,linebreake4,midname_input,linebreake5)


var lastname_label = createelement("label","for","lname","LastName")
var linebreake2 = linebreaker("br")
var linebreake3 = linebreaker("br")
var lastname_input = inputele("input","type","text","id","lname")
document.body.append(lastname_label,linebreake2,lastname_input,linebreake3)


var email_label = createelement("label","for","email","Email")
var linebreake6 = linebreaker("br")
var linebreake7 = linebreaker("br")
var email_input = inputele("input","type","text","id","email")
document.body.append(email_label,linebreake6,email_input,linebreake7)


var state_label = createelement("label","for","state","State")
var linebreake8 = linebreaker("br")
var linebreake9 = linebreaker("br")
var state_input = inputele("input","type","text","id","email")
document.body.append(state_label,linebreake8,state_input,linebreake9)
