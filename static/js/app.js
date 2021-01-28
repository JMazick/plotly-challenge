// from samples.js
d3.json("../data/samples.json").then(function(data) {
    var metadata = data.metadata;
// TO DO - come back and inputValue for id. nameplace will be part of a function for drop down
    var filterMetadata = metadata.filter(demo => demo.id === nameplace);
    var firstElement = filterMetadata[0];
    var sampleMetadata = d3.select("#sample-metadata");
    sampleMetadata.html("");

Object.entries(firstElement).forEach(([key, value]) => sampleMetadata.append("h5").text(`${key}:${value}`));



    
    console.log(firstElement);
  });



  



// YOUR CODE HERE!
