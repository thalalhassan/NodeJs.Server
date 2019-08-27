function validateBook() {
    if(checkTitle()==true && checkAuthor()==true && checkGenre()==true && checkImage()==true)
    {
        alert('Success');
        return true;
    }
    else
    {
        alert('Invalid Inputs Found');
        return false;
    }
}

function checkTitle() {
    var bookTitle = $('#bookTitle').val();
    let pattern = /^[A-Za-z1-9]{1}[A-Za-z0-9_\-.&]{0,}$/; 
    if (bookTitle.match(pattern)) {
        $('#reqBookTitle').text('');
        return true;
    }
    $('#reqBookTitle').text('Invalid Book Title');
    return false;
}

function checkAuthor() {
    var bookAuthor = $('#bookAuthor').val();
    let pattern = /^[A-Za-z]{1}[A-Za-z0-9_\-.&]{0,}$/;
    if (bookAuthor.match(pattern)) {
        $('#reqBookAuthor').text('');
        return true;
    }
    $('#reqBookAuthor').text('Invalid Book Author');
    return false;
}

function checkGenre() {
    var bookGenre = $('#bookGenre').val();
    let pattern = /^[A-Za-z]{1}[A-Za-z_\-]{0,}$/;
    if (bookGenre.match(pattern)) {
        $('#reqBookGenre').text('');
        return true;
    }
    $('#reqBookGenre').text('Invalid Book Genre');
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


