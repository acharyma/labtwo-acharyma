// TODO: load the dataset 

function filterData(category) {

	/* **************************************************
	 *
	 * TODO: filter attractions by the selected category
	 * TODO: filter top 5 attractions
	 *
	 * CALL THE FOLLOWING FUNCTION TO RENDER THE BAR-CHART:
	 *
	 * renderBarChart(data)
	 *
	 * - 'data' must be an array of JSON objects
	 * - the max. length of 'data' is 5
	 *
	 * **************************************************/
	

}
var attractions;
fetch('/attractions.json')
.then(response => response.json())
.then(data => {
		attractions = data;
		console.log('attractions - (a)', attractions);
		let topFive = attractions.sort((a, b) => (a.Visitors > b.Visitors) ? 1 : -1).reverse();
		topFive = topFive.slice(0,5);
		console.log(topFive);
		renderBarChart(topFive);
		
		let selectBar = document.querySelector("select");
		var selectedAttractions;
		selectedAttractions = attractions;
		selectBar.addEventListener('change', (event) => {
			console.log(event.target.value);
			if(event.target.value === "all"){
				selectedAttractions = attractions;
			}
			else{
				selectedAttractions = attractions.filter((attraction => attraction.Category == event.target.value ));
			}
			console.log(selectedAttractions);
			topFive = selectedAttractions.sort((a, b) => (a.Visitors > b.Visitors) ? 1 : -1).reverse();
			topFive = topFive.slice(0,5);
			console.log(topFive);
			renderBarChart(topFive);
			
		  });
		
		
});






// TODO: Define an event listener for the dropdown menu
//       Call filterData with the selected category