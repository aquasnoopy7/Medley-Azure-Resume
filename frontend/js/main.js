window.addeventListener('DOMContentLoaded', (event) =>{
    getVisitCount();
})

const functionApi = 'http://localhost:7072/api/GetResmeCounter';

const getVisitCount =() => {
    let count = 30;
    fetch(fnctionApi).them(response => {
        return response.json()
    }).then(response =>{
        console.log("Website called function API.");
        count = response.count;
        document.getElementById("counter").innerText = count;
    }).catch(function(error){
        console.log
    });
    return count;
}