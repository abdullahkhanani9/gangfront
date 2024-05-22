$(document).ready(function() {
    $("#slider-range").slider({
        range: true,
        min: 1800,
        max: new Date().getFullYear(),
        values: [1900, 2000],
        slide: function(event, ui) {
            $("#amount").val(ui.values[0] + " - " + ui.values[1]);
        }
    });
    $("#amount").val($("#slider-range").slider("values", 0) +
        " - " + $("#slider-range").slider("values", 1));
    
    $("#submit").click(function() {
        let startYear = $("#slider-range").slider("values", 0);
        let endYear = $("#slider-range").slider("values", 1);
        
        fetch('/api/found/filter', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                start_date: startYear + '-01-01',
                end_date: endYear + '-12-31'
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            let results = $("#results");
            results.empty();  // Clear previous results
            if (data.length === 0) {
                results.append('<li>No companies found in this range.</li>');
            } else {
                data.forEach(function(company) {
                    results.append('<li>' + company['Company Name'] + ' (Founded: ' + company['Founded'] + ') - ' + company['GICS Sector'] + '</li>');
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Error fetching data:', error);
        });
    });

    $("#start-visualization").click(function() {
        alert("Start Visualization clicked!");
    });
});
