


document.getElementById('btn-post').addEventListener('click', function (event) {
    event.preventDefault();
    const inputValue = document.getElementById('text-input').value;

    // const inputFiles = document.getElementById('input-files');

    // Parent Node 
    const parentNode = document.getElementById('activity');

    // Children Node

   const childrens = document.createElement('div');

   
   childrens.innerHTML = `
    <div id="series" class="border-2 md:border-4 w-3/4 mx-auto rounded-2xl my-2 md:my-5 p-2 md:p-5"
    >
    <h1 class=" md:text-2xl text-black font-bold">  ${inputValue} </h1>
    </div>
    `;

    parentNode.appendChild(childrens);
    
})





