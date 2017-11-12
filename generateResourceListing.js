'use strict';

// Generate a List template of resources. 
// 
module.exports.generateListing = function (resources, max_length){
    let fbPayload = {
        template_type: "list", 
        top_element_style: "compact", 
        elements: []
    }
    for (let i=0; i<Math.min(max_length, resources.length); i++) {
        let r = resources[i];
        let listItem = {
            title: r.name, 
            subtitle: r.short_description, 
            buttons: [
                {
                    title: "View",
                    type: "web_url", 
                    url: r.website ? r.website : "https://askdarcel.org/resource?id="+r.id
                }
            ]
        }
        fbPayload.elements.push(listItem);
    }

    return fbPayload;
}
