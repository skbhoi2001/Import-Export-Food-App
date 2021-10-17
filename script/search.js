window.addEventListener('load', ()=>{
    const btn = document.getElementById("btn-search");
    btn.addEventListener('click', searchData)
})

function searchData() {
    const value = document.querySelector('input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    .then(resolve => resolve.json())
    .then(resolve => {
        showData(resolve.meals)})
    .catch(err => alert('Invalid Food Name!!'));
    document.querySelector('input').value = '';
}
function showData(data) {
    const cont = document.getElementById("searchData")
    document.getElementById('display').innerHTML=""
    cont.textContent = null
        let div = document.createElement('div')
        let image = document.createElement('img');
        image.src = data[0].strMealThumb;
        let h4 = document.createElement('h4')
        h4.textContent = `${data[0].strMeal}`
        div.append(image, h4)
        cont.append(div)
    console.log(data)
}