// Dimensions de la salle
const salleWidth = 400; // Largeur de la salle
const salleHeight = 800; // Hauteur de la salle

// Données pour les tables (position et dimensions)
const tables = [
  { x: 50, y: 50, width: 100, height: 50 },
  { x: 200, y: 50, width: 100, height: 50 },
  { x: 50, y: 150, width: 100, height: 50 },
  { x: 200, y: 150, width: 100, height: 50 },
];

const chairs = [
  { x: 60, y: 40 }, // Chaise 1
  { x: 140, y: 40 }, // Chaise 2
];


// Créer un conteneur SVG pour dessiner la salle
const svg = d3.select("#salle-container")
  .append("svg")
  .attr("width", salleWidth)
  .attr("height", salleHeight)
  .style("border", "1px solid black");

// Dessiner la salle (rectangle principal)
svg.append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", salleWidth)
  .attr("height", salleHeight)
  .attr("fill", "#f0f0f0");

// Dessiner les tables
svg.selectAll("rect.table")
  .data(tables)
  .enter()
  .append("rect")
  .attr("class", "table")
  .attr("x", d => d.x)
  .attr("y", d => d.y)
  .attr("width", d => d.width)
  .attr("height", d => d.height)
  .attr("fill", "#87CEEB")
  .attr("stroke", "#000")
  .attr("stroke-width", 2);

// Ajouter des labels sur les tables
svg.selectAll("text")
  .data(tables)
  .enter()
  .append("text")
  .attr("x", d => d.x + d.width / 2)
  .attr("y", d => d.y + d.height / 2)
  .attr("text-anchor", "middle")
  .attr("dominant-baseline", "middle")
  .text((d, i) => `Table ${i + 1}`)
  .attr("font-size", "14px")
  .attr("fill", "#000");

//Dessiner les chaises
svg.selectAll("circle.chair")
  .data(chairs)
  .enter()
  .append("circle")
  .attr("class", "chair")
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("r", 10)
  .attr("fill", "#FFA500");


