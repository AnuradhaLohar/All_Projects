const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
  
    if (height === "" || height < 0 || isNaN(height)) {
      results.textContent = `Please give a valid height ${height}`;
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
      results.textContent = `Please give a valid weight ${weight}`;
    } else {
      const bmi = (weight / ((height * height) / 10000)).toFixed(2);
      //show the result
      results.textContent = `${bmi}`

      
        if(bmi < 18.6 ){
            document.querySelector(".guide").innerHTML= "Under Weight = Less than 18.6" ;

        }else if(bmi > 18.6 || bmi < 24.9 ){
            document.querySelector(".guide").innerHTML= "Normal Range = 18.6 and 24.9" ;
        

        }
        if(bmi > 24.9 ){
            document.querySelector(".guide").innerHTML= "Overweight = Greater than 24.9" ;
        
        }

      }
  
});




