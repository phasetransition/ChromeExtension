var elmInputs = document.getElementsByTagName('input');
for (var i = 0; i < elmInputs.length; i++) {
    if(elmInputs[i].getAttribute('onclick')){
        if(!(elmInputs[i].getAttribute('onclick').match(/zip/))){
            $(elmInputs[i]).css('display','none');
        }
    }
}
