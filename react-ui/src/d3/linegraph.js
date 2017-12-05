import * as d3 from 'd3';

function chartData(testData) {

  let aspects = ['sleep', 'diet', 'physical', 'emotional', 'social', 'occupational', 'spiritual', 'intellectual']
//======================= PROCESS DATA TO PROPER FORMAT =========================
  let inputData = aspects.map(function(id) {
    return {id: id,
    values: testData.map(function(d) {
      return {date: new Date(d.date), score: parseFloat(d[id])}
    })}
  })

//========================= GRAB & SET UP SVG ELEMENT ============================
  let svg = d3.select("#graph"),
  margin = {top: 20, right: 80, bottom: 100, left: 50},
  width = svg.attr("width") - margin.left - margin.right,
  height = svg.attr("height") - margin.top - margin.bottom,
  g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")"),
  colorScheme = ["#e41a1c", "#377eb8", "#4daf4a", "#984ea3", "#ff7f00", "#a6cee3", "#a65628", "#f781bf"],
  color = d3.scaleOrdinal(colorScheme),
  legendSpace = width/aspects.length;

  svg.attr("width") - margin.left - margin.right;
  svg.attr("height") - margin.top - margin.bottom;

  //========================== SET UP AXIS =======================================

  let x = d3.scaleTime().range([0, width]), //x axis is the time dimension, time scale
      y = d3.scaleLinear().range([height, 0]), //y is the data dimension, linear scale
      z = d3.scaleOrdinal(colorScheme); //z is the series dimension, categorical scale for each line

//============================= SET UP LINE =====================================
  let line = d3.line()
    .curve(d3.curveBasis)
    .x(function(d) { return x(d.date); })
    .y(function(d) {return y(d.score); });

x.domain(d3.extent(testData, function(d) { return Date.parse(d.date);}));

y.domain([
  d3.min(inputData, function(c) { return d3.min(c.values, function(d) { return d.score;}); }),
  d3.max(inputData, function(c) { return d3.max(c.values, function(d) { return d.score}); })
]);

z.domain(inputData.map(function(c) { return c.id; }));

g.append("g")
  .attr("class", "axis axis--x")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

g.append("g")
  .attr("class", "axis axis--y")
  .call(d3.axisLeft(y))
.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", "0.71em")
  .attr("fill", "#000")
  .text("Rating (1-5)")

  let aspect = g.selectAll(".aspect")
    .data(inputData)
    .enter().append("g")
      .attr("class", "aspect")

  aspect.append("path")
    .attr("class", "line")
    .attr("d", function(d) { return line(d.values); })
    .attr("id", function(d) { return d.id})
    .style("stroke", function(d) {console.log('from path',d.id);return color(d.id); })
    .style("fill", "none")

  let count = -1;

  let text = g.selectAll(".legendItem")
    .data(inputData)
    .enter()
    .append("text")
    .attr("class", "legendItem")
    .attr("id", function(d) {
      return d.id + "text";
    })
    .attr("x", function(d,i) { return (legendSpace/2) + (count+=1) * legendSpace })
    .attr("y", height + (margin.bottom/2) + 5)
    .attr("class", "legend")
    .style("padding", "15px")
    .style("fill", function(d) {
      return d.color = color(d.id) })
      .style("text-decoration", "none")
      .style("cursor","pointer")
    .text(function(d) { return d.id })
    .on("click", function(d) {
      let active = d.active ? false : true,
      newOpacity = active ? 0 : 1;
      d3.select("#" + d.id)
        .transition().duration(100)
        .style("opacity", newOpacity)
      d3.select("#" + d.id + "text")
      .style("text-decoration", function(d) {
        return d.active ? "none" : "line-through" })
      .style("fill", function(d) {
        return d.active ? d.color : "grey" })
      d.active = active;
    })

}

export default chartData;
//chartData(testData);
