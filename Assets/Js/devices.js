let deviceList = document.querySelector('.device-list');
let i = 1;
db.collection("rounds")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            deviceList.innerHTML += `
                <li class="device-list__device-item"><div class="button button_device-list"></div><a href="button.html?docid=${doc.id}">Device ${i} (Docid: ${doc.id})</a></li>
            `
            i++;
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });