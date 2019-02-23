console.log('it WORKS');

function run() {
    $.ajax({
        type: "GET",
        url: '/coolbeans'
      })
      .done(function( data ) {
        console.log(data);
        document.getElementById('something').innerHTML = JSON.stringify(data);

      });
}

