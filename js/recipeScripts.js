const recipeCards = $('.recipeCard').on('click',showRecipeModal);

$('.login').on('click', function() {
    $('#loginModal').modal('show');
});

$('.signup').on('click', function() {
    $('#signupModal').modal('show');
});

function showRecipeModal() {
    var recipeModal = $('#recipeModal');
    var index = $('.recipeCard').index($(this));
    var img = recipeCards[index].querySelector('img');
    var modalImg = document.getElementById('img01');
    var title = recipeCards[index].querySelector('div').textContent;
    
    // console.log(img.getAttribute('src'));
    // console.log(img.getAttribute('alt'));
    console.log(title);

    modalImg.src = img.getAttribute('src');
    modalImg.alt = img.getAttribute('alt');
    //console.log(index);
    
    
    //console.log(title);
    recipeModal.modal('show');
    $('.modal-title').text(title);
}


