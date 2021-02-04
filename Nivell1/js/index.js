$(document).ready(function () {
    $('#read').click(function (e) { 
        e.preventDefault();
        $.ajax({
            url: 'http://api.icndb.com/jokes/random',
            type: 'get',
            dataType: 'json',
            success: function(data){
             $(`#joke-data`).html(`
            Special joke for you: ${data.value.joke} 
            `);
        }
    });
});
});