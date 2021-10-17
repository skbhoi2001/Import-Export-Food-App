function navbar(){
    return `<div id="navbar">
    <div id="input">
    <input type="text" placeholder="Search Food"/>
    <button id="btn-search">Search</button>
    </div>
    <div id="others">
        <a href="index.html">Home</a>
        <a href="dealOfDay.html">Of the Day</a>
        <a href="latest.html">Latest</a>
    </div>
</div>
<div id="display"></div>
<div id="searchData"></div>
`
}

export default navbar