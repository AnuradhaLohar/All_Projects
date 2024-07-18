// document.querySelector('.button').addEventListener('click',()=>{
//     document.body.style.backgroundColor ="red"
//     })

    function handleclick(color){
       
       return ()=>{
                document.body.style.backgroundColor = `${color}`;

       }

    }

     document.getElementById('red').onclick = handleclick("red")
     document.getElementById('orange').onclick = handleclick("orange")
     document.getElementById('blue').onclick = handleclick("blue")
     document.getElementById('green').onclick = handleclick("green")
