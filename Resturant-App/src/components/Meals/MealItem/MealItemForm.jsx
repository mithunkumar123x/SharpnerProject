import React , { useContext } from 'react';
import classes from './MealItemForm.module.css'
import Input from '../../UI/Input';
import CartCntx  from '../../../store/Cart-Context'



const MealItemForm = (props) => {
    const cartcntx = useContext(CartCntx)
     console.log('reinitialized cartcntx' , cartcntx);
    const addItemToCart = (event) => {
        event.preventDefault();
        //update the cartcntx.items
       // cartcntx.items.push(props.item)
      const quantity = document.getElementById('amount_' +props.id).value
       cartcntx.addItem({...props.item , quantity : quantity})

    console.log('after addItemToCart',cartcntx)
    }

    return (
        <form className={classes.form}>
            {console.log('Inside render' , cartcntx.items)}
         <Input 
            label = 'Amount'
            input = {{
            id: 'amount_' +props.id,
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1' , 
              }} />

         <button  onClick={addItemToCart}> + ADD Button</button>
         
        </form>

        
    )
}

export default MealItemForm;