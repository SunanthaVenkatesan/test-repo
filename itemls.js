var form=document.getElementById('addForm')
var itemList=document.getElementById('items')

//form submit event->after the event is listening to submit button it goes to addditem function and the function is to be written
form.addEventListener('submit',addItem)

//delete event 
itemList.addEventListener('click',removeItem)
function addItem(e){
    //this will prevent the button click from blinking continuous
    e.preventDefault()
   //get input values
   var newItem=document.getElementById('item')
   //create new li element
   var li=document.createElement('li')
   //add class
   li.className='list-group-item'
   console.log(li)
   //add text node with input value
    li.appendChild(document.createTextNode(newItem.value))

    //create delete button
    var deletebtn=document.createElement('button')
    //add classes to delete button
    deletebtn.className='btn btn-danger btn-sm float-right delete'
    //create text node
    deletebtn.appendChild(document.createTextNode('X'))
    //append button to li
    li.appendChild(deletebtn)
    //append li to ul as itemlist is class name 
    itemList.appendChild(li)
}

function removeItem(e){
    e.preventDefault()
    //this condition is given cos only on clicking button the element should be removed 
    if (e.target.classList.contains('delete')){
        //pops up a confirm box 
        if(confirm("Are you sure ?")){
            //parent element is the items box(elements) as that should be removed on click of del
            var li=e.target.parentElement;
            //removes li which is inside ul(parent)
            itemList.removeChild(li)

        }

      
}
}
 