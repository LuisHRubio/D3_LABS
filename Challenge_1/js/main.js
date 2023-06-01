var svg = d3.select("#chart-area").append("svg")
    .attr("width", 800)
    .attr("height", 800);


var i = 0;
d3.json("data/buildings.json").then((data)=> {
    data.forEach((d)=>{
        d.height = +d.height;
        svg.append("rect")
            .attr("x", i*(50+20))
            .attr("y", 800-d.height)
            .attr("width", 50)
            .attr("height", d.height)
            .attr("fill","gray");

        console.log(d)
        i++;
    });



});


