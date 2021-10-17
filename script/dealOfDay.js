import navbar from "../components/navbar/navbar.js"
document.body.innerHTML = navbar()

function displayLatest(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        displayCard(res.meals)
    })
}
displayLatest()

function displayCard(data){
    var mainContainer = document.querySelector('#display')
    mainContainer.innerHTML = ""
    var container = document.createElement('div')
    const {strMeal,strCategory,strInstructions,strArea,strMealThumb} = data[0] 
    container.innerHTML = `
        <div id="image-data">
            <img src="${strMealThumb}" alt="">
            
        </div>
        
        <div>
            <h4>Name:</h4>
            <p>${strMeal}</p>
            <h4>Category: </h4>
            <p>${strCategory}</p>
            <h4>Area: </h4>
            <p>${strArea}</p>
            <h4>About:</h4>
            <p>${strInstructions}</p>
        </div>
    `
    mainContainer.append(container)
}

