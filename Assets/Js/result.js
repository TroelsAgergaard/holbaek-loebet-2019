db.collection("rounds")
    .onSnapshot(function(querySnapshot) {
        let rounds = [];
        let total  = null;
        querySnapshot.forEach(function(doc) {
            rounds.push(doc.data().round);
            //total += Math.round(doc.data().round * 10) / 10;
            total += Math.round(doc.data().round * 4) / 4
            // total += doc.data();
        });
        if(total < 0.25){
            document.querySelector('.fullscreen__result-header').innerHTML = 0;
        }else{
            document.querySelector('.fullscreen__result-header').innerHTML = total.toFixed(2);
        }
});