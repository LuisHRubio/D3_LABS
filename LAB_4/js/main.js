var svg = d3.select("#chart-area").append("svg")
    .attr("width", 500)
    .attr("height", 500);

var heights = []
d3.json("data/buildings.json").then((data)=> {

    var x = d3.scaleBand()
        .domain(data.map((d) => d.height))
        .range([0, 500])
        .paddingInner(0.3)
        .paddingOuter(0.3);


    var y = d3.scaleLinear()
        .domain([0,828])
        .range([0, 500])

    var buildings = svg.selectAll("rect")
        .data(data)

    buildings.enter()//create many data
        .append("rect")//add atributes

        .attr("x",(d, index)=>{
            return (index*45)+25;
        })
        .attr("width", (d)=>y(40))
        .attr("height", (d) => x(d.height))
});











