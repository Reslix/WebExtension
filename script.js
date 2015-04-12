
var dat = [];
var pie;
var height = document.body.clientHeight;
var width = document.body.clientWidth;
var stor;

   chrome.storage.local.get('website', function(store) {    
		stor = store['website'];
        console.log(stor);
		for (index = 0; index < stor.length; index+=3){
        dat.push({label: String(stor[index]), value: (stor[index + 2])});
    }
	
   pie = new d3pie("pieChart",{ 
        header: {
            title: {
                text:    "Your Internet Usage",
                color:    "#333333",
                fontSize: 20,
                font:     "Times New Roman"
            },
            subtitle: {
                text: "Are you bringing shame to your family?",
                color:    "#666666",
                fontSize: 12,
                font:     "Times New Roman"
            },
            location: "pie-center",
            titleSubtitlePadding: 8
        },
        footer: {
            text:     "",
            color:    "#666666",
            fontSize: 14,
            font:     "Times New Roman",
            location: "left"
        },
        size: {
            canvasHeight: height,
            canvasWidth: width,
            pieInnerRadius: "60%",
            pieOuterRadius: "80%"
        },
        data: {
            sortOrder: "none",
            smallSegmentGrouping: {
                enabled: true,
                value: 4,
                valueType: "percentage",
                label: "Other",
                color: "#cccccc"
            },

            // REQUIRED! This is where you enter your pie data; it needs to be an array of objects
            // of this form: { label: "label", value: 1.5, color: "#000000" } - color is optional
            content: dat
        },
        labels: {
            outer: {
                format: "label",
                hideWhenLessThanPercentage: null,
                pieDistance: 30
            },
            inner: {
                format: "percentage",
                hideWhenLessThanPercentage: null
            },
            mainLabel: {
                color: "#333333",
                font: "Times New Roman",
                fontSize: 20
            },
            percentage: {
                color: "#dddddd",
                font: "Times New Roman",
                fontSize: 20,
                decimalPlaces: 0
            },
            value: {
                color: "#cccc44",
                font: "Times New Roman",
                fontSize: 20
            },
            lines: {
                enabled: true,
                style: "straight",
                color: "segment" // "segment" or a hex color
            }
        },
        effects: {
            load: {
                effect: "default", // none / default
                speed: 1000
            },
            pullOutSegmentOnClick: {
                effect: "back", // none / linear / bounce / elastic / back
                speed: 300,
                size: 10
            },
            highlightSegmentOnMouseover: true,
            highlightLuminosity: -0.2
        },
        tooltips: {
            enabled: true,
            type: "placeholder", // caption|placeholder
            string: "{label}, {percentage}%",
            placeholderParser: null,
            styles: {
                fadeInSpeed: 250,
                backgroundColor: "#000000",
                backgroundOpacity: 0.5,
                color: "#efefef",
                borderRadius: 2,
                font: "Times New Roman",
                fontSize: 20,
                padding: 4
            }
        },

        misc: {
            colors: {
                background: null, // transparent
                segments: [
                    "#2484c1", "#65a620", "#7b6888", "#a05d56", "#961a1a",
                    "#d8d23a", "#e98125", "#d0743c", "#635222", "#6ada6a",
                    "#0c6197", "#7d9058", "#207f33", "#44b9b0", "#bca44a",
                    "#e4a14b", "#a3acb2", "#8cc3e9", "#69a6f9", "#5b388f",
                    "#546e91", "#8bde95", "#d2ab58", "#273c71", "#98bf6e",
                    "#4daa4b", "#98abc5", "#cc1010", "#31383b", "#006391",
                    "#c2643f", "#b0a474", "#a5a39c", "#a9c2bc", "#22af8c",
                    "#7fcecf", "#987ac6", "#3d3b87", "#b77b1c", "#c9c2b6",
                    "#807ece", "#8db27c", "#be66a2", "#9ed3c6", "#00644b",
                    "#005064", "#77979f", "#77e079", "#9c73ab", "#1f79a7"
                ],
                segmentStroke: "#ffffff"
            },
            gradient: {
                enabled: true,
                percentage: 95,
                color: "#000000"
            },
            canvasPadding: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            },
            pieCenterOffset: {
                x: 0,
                y: 0
            },
            cssPrefix: null
        },
        callbacks: {
            onload: null,
            onMouseoverSegment: null,
            onMouseoutSegment: null,
            onClickSegment: null
        }
    });

	});
	

/*
    for(index = 0; index < 20; index++) {
        dat.push({label: "DERP", value: Math.floor(Math.random() * 100) + 1});
        //alert("DERP!");
    }
*/
 
