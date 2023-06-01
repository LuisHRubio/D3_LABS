var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var data = [25, 20, 15, 10, 5];

print(data.length)

for (i = 0;i<data.length;i++){
    svg.append("rect")
        .attr("x", i*(40+20))
        .attr("y", 0)
        .attr("width", 40)
        .attr("height", data[i])
        .attr("fill","red");
}

