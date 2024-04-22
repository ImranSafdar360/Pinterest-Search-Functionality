const imageData = [
    {name:"bmw m5", image:"https://img.freepik.com/free-photo/dark-silver-sedan-port_114579-4388.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"bmw m8", image:"https://img.freepik.com/free-photo/yellow-car-gas-station_23-2150697544.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"Porche 911", image:"https://img.freepik.com/free-photo/white-mini-coupe-road_114579-5082.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"Dodge charger", image:"https://img.freepik.com/free-photo/black-sport-coupe-driving-with-back-red-lights_114579-4047.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"Mercedez", image:"https://img.freepik.com/free-photo/front-side-lights-vintage-black-sedan-car_114579-4026.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"keyboard", image:"https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"gaming-case",image:"https://img.freepik.com/free-photo/gradient-view-illuminated-neon-gaming-desk-setup-with-keyboard_23-2149529381.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"gaming setup", image:"https://img.freepik.com/free-photo/high-angle-gaming-setup-indoors_23-2149829123.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"mouse", image:"https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529370.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"leaf", image:"https://img.freepik.com/free-photo/vibrant-colors-autumn-leaves-wood-plank-generated-by-ai_188544-9873.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"mountains", image:"https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"river",image:"https://img.freepik.com/free-photo/lac-du-pontet-alps_181624-25842.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"sunset",image:"https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"boy",image:"https://images.unsplash.com/photo-1665250523930-597bc5a406b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGFsfGVufDB8fDB8fHww"},
    {name:"picture",image:"https://images.unsplash.com/photo-1621426867697-43e9693282fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kYWx8ZW58MHx8MHx8fDA%3D"},
    {name:"keyboard", image:"https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"gaming-case",image:"https://img.freepik.com/free-photo/gradient-view-illuminated-neon-gaming-desk-setup-with-keyboard_23-2149529381.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"gaming setup", image:"https://img.freepik.com/free-photo/high-angle-gaming-setup-indoors_23-2149829123.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"mouse", image:"https://img.freepik.com/free-photo/view-neon-illuminated-gaming-desk-setup-with-keyboard_23-2149529370.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"leaf", image:"https://img.freepik.com/free-photo/vibrant-colors-autumn-leaves-wood-plank-generated-by-ai_188544-9873.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"mountains", image:"https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"river",image:"https://img.freepik.com/free-photo/lac-du-pontet-alps_181624-25842.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"sunset",image:"https://img.freepik.com/free-photo/beautiful-scenery-rock-formations-by-sea-queens-bath-kauai-hawaii-sunset_181624-36857.jpg?size=626&ext=jpg&ga=GA1.1.1684277276.1707917049&semt=ais"},
    {name:"boy",image:"https://images.unsplash.com/photo-1665250523930-597bc5a406b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fG1vZGFsfGVufDB8fDB8fHww"},
    {name:"picture",image:"https://images.unsplash.com/photo-1621426867697-43e9693282fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kYWx8ZW58MHx8MHx8fDA%3D"}
];

const showTheCards = () => {
    var clutter = "";
    imageData.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="image">
        <div class="caption">Lorem ipsum </div>
    </div>`;
    })
    document.querySelector(".container")
    .innerHTML = clutter;
};

function searchBarHandler(){
    const input = document.querySelector("#searchinput");
    input.addEventListener(
        "focus",
        function(){
            document.querySelector(".overlay").style.display = "block";
        }
    )
    input.addEventListener(
        "blur", function(){
            document.querySelector(".overlay").style.display = "none";
            document.querySelector(".searchdata").style.display = "none";
        }
    )
    input.addEventListener(
        "input", function(){
            const filteredArray = imageData.filter(obj => obj.name.toLowerCase().startsWith(input.value));
            var clutter = "";
            filteredArray.forEach(function(obj){
                clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`
            })
            document.querySelector(".searchdata").style.display = "block";
            document.querySelector(".searchdata").innerHTML = clutter;
        }
    )
}
searchBarHandler();
showTheCards();