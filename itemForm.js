const itemsController = new itemsController(0);

const newItemForm = document.getElementById('#newItemForm');

newItemForm.addEventListener('submit', (event) => {

    event.preventDefault();


    const newItemName = document.getElementById('#newItemName');
    const newItemDescription = document.getElementById('#newItemDescription');
    const newItemUrl = document.getElementById('#newItemUrl');    
    const newItemPrice = document.getElementById('#newItemPrice')


    const name = newItemName.value;
    const description = newItemDescription.value;
    const url = newItemUrl.value;
    const price = newItemPrice.value;


    itemsController.addItem(name, description, url, price);


    newItemName.value = '';
    newItemDescription.value = '';    
});