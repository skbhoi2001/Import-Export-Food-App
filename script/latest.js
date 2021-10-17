import navbar from "../components/navbar/navbar.js"
document.body.innerHTML = navbar()

window.addEventListener('load', ()=>{
    displayLatest();
})
function displayLatest(){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`)
    .then((res)=>{
        return res.json()
    })
    .then((res)=>{
        showData(res.meals)
    })
}
function showData(data) {
    const cont = document.getElementById('display')
    cont.textContent = null
    for(let i=0;i<data.length;i++){
        let div = document.createElement('div')
        let image = document.createElement('img');
        image.src = data[i].strMealThumb;

        let div1 = document.createElement('div')
        let h2 = document.createElement('h2')
        h2.textContent = `${data[i].strMeal}`
        let p1 = document.createElement('p')
        p1.textContent=`${data[i].strArea}`
        let p2 = document.createElement('p')
        p2.textContent=`${data[i].idMeal}`
        let p3 = document.createElement('p')
        p3.textContent=`${data[i].strInstructions}`
        div1.append(p2,h2,p1,p3)

        div.append(image, div1)

        cont.append(div)
    }
    console.log(data)
}
