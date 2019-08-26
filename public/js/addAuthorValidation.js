function validateAuthor() {
    if(checkAuthor()==true && checkImage()==true && checkCountry()==true)
    {
        authorName = $('#authorName').val();
        alert('successfully Added Author : ' +authorName);
        return true;
    }
    else
    {
        alert('Invalid Inputs Found');
        return false;
    }
}



function checkAuthor() {
    var authorName = $('#authorName').val();
    let pattern = /^[A-Za-z]{1}[A-Za-z_\-.&\s]{0,}$/;
    if (authorName.match(pattern)) {
        $('#reqAuthorName').text('');
        return true;
    }
    $('#reqAuthorName').text('Invalid Author Name');
    return false;
}

function checkCountry() {
    var authorCountry = $('#authorCountry').val();
    let pattern = /^[A-Za-z]{1}[A-Za-z_\-.&\s]{0,}$/;
    if (authorCountry.match(pattern)) {
        $('#AuthorCountry').text('');
        return true;
    }
    $('#reqAuthorCountry').text('Invalid Country Name');
    return false;
}
function checkImage()
{
    var bookImage = $('#bookImage').val().split('\\').pop().toLowerCase();
    var bookImageExt=bookImage.split('.').pop();
    var allowedExt = ['jpg','jpeg','png'];
    if (allowedExt.includes(bookImageExt)) {
        $('#reqBookImage').text('');
       return true;
    }
    else
    {
        $('#reqBookImage').text('Invalid File Format');
        return false;
    }
}   
