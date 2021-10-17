function navbar(){
    return `<div id="navbar">
    <div id="input">
        <input type="text" id="search">
        <buton id="btn-search" onclick="alert(555)">Search</buton>
    </div>
    <div id="others">
        <a href="index.html">Home</a>
        <a href="dealOfDay.html">Of the Day</a>
        <a href="latest.html">Latest</a>
    </div>
</div>
<div id="display"></div>`
}

export default navbar