let container = document.querySelector(".container"),
dark = document.querySelector(".dark"),
value = document.querySelector(".value"),
input = document.querySelector(".input"),
ainput = document.querySelector("input"),
color = document.querySelectorAll(".color")[0],
color_2 = document.querySelectorAll(".color")[1],
color_3 = document.querySelectorAll(".color")[2],
color_4 = document.querySelectorAll(".color")[3],
color_5 = document.querySelectorAll(".color")[4],
color_6 = document.querySelectorAll(".color")[5],
color_7 = document.querySelectorAll(".color")[6],
color_8 = document.querySelectorAll(".color")[7],
bu = document.querySelector("button"),
dot = document.querySelector(".dot"),
calula = document.querySelector(".calula"),
light = document.querySelector(".light");

dark.addEventListener("click" , () =>{
    calula.classList.add("show");
    container.classList.add("container-2");
    dark.classList.add("hide");
    light.classList.add("li")
    value.classList.add("value-2");
    input.classList.add("input-2");
    ainput.classList.add("input-3");
    color.classList.add("color-2");
    color_2.classList.add("color-2");
    color_3.classList.add("color-2");
    color_4.classList.add("color-2");
    color_5.classList.add("color-2");
    color_6.classList.add("color-2");
    color_7.classList.add("color-2");
    color_8.classList.add("color-2");
    bu.classList.add("bu");
    // dot.classList.add("dot");


})
light.addEventListener("click" , () =>{
    calula.classList.remove("show");
    container.classList.remove("container-2");
    dark.classList.remove("hide")
    light.classList.remove("li")
    value.classList.remove("value-2");
    input.classList.remove("input-2");
    ainput.classList.remove("input-3");
    color.classList.remove("color-2");
    color_2.classList.remove("color-2");
    color_3.classList.remove("color-2");
    color_4.classList.remove("color-2");
    color_5.classList.remove("color-2");
    color_6.classList.remove("color-2");
    color_7.classList.remove("color-2");
    color_8.classList.remove("color-2");
    bu.classList.remove("bu");
    // dot.classList.remove(".dot");


})