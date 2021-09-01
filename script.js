"use strict";

let option = document.querySelector("#select").value;
let output = document.querySelector("#output")
let input = document.querySelector("#input")

document.querySelector("button").addEventListener("click", generateOutput);

function generateOutput() {
    event.preventDefault();
    console.log("generate output");

    if (option == "firstname") {
        console.log("firstname");
        firstCharacterUpperCase();
    }
    if (option == "fullname1") {
        console.log("fullname1");
        findFirstName();
    }
    if (option == "fullname2") {
        console.log("fullname2");
        findLengthOfFirstName();
    }
    if (option == "fullname3") {
        console.log("fullname3");
        findMiddleName();
    }
    if (option == "filename") {
        console.log("filename");
        checkFileName();
    }
    if (option == "password") {
        console.log("password");
        hidePassword();
    }
    if (option == "any") {
        console.log("any");
        thirdCharacterUppercase();
    }
    if (option == "any1") {
        console.log("any1");
        makeUpperCaseIfFollowsSpace();
    }
}

function firstCharacterUpperCase() {
    output.innerHTML = input.value[0].toUpperCase() + input.value.substring(1).toLowerCase();
}

function findFirstName() {
    output.innerHTML = input.value.substring(
        input.value.indexOf(" "),
        input.value.lastIndexOf()
    );
}

function findLengthOfFirstName() {
    const firstname = input.value.substring(
        input.value.indexOf(" "),
        input.value.lastIndexOf()
    );
    output.innerHTML = firstname.length;
}

function findMiddleName() {
    output.innerHTML = input.value.substring(
        input.value.indexOf(" ") + 1,
        input.value.lastIndexOf(" ")
    );
}

function checkFileName() {
    const extension = input.value.substring(
        input.value.indexOf(".") + 1
    );
    output.innerHTML = extension;
}

function hidePassword() {
    const inputLength = input.value.length;
    const newpassword = input.value.slice(inputLength).padStart(inputLength, "*");
    output.innerHTML = newpassword;
}

function thirdCharacterUppercase() {
    output.innerHTML = input.value.substring(0,2)+input.value[2].toUpperCase()+input.value.substring(3);
}

function makeUpperCaseIfFollowsSpace() {
    
}