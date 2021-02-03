// 1. Use the D3 library to read from samples.js
d3.json("../data/samples.json").then(function(data) {
    
    
// 2. Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// var samplesData = data.samples;
// // Create a custom function
// function otuIDs (OTUs) {
//     return OTUs.otu_ids;
//   }
// // Call the custom function with filter()
// var otuID = samplesData.filter(otuIDs);



  



// 5. Display each key-value pair from the metadata JSON object somewhere on the page
var metadata = data.metadata;
// TO DO - come back and inputValue for id. nameplace will be part of a function for drop down
var filterMetadata = metadata.filter(demo => demo.id === nameplace);
var firstElement = filterMetadata[0];
var sampleMetadata = d3.select("#sample-metadata");
sampleMetadata.html("");

// Object.entries(firstElement).forEach(([key, value]) => sampleMetadata.append("h5").text(`${key}:${value}`));



    
    console.log(firstElement);
  });



  



// YOUR CODE HERE!
