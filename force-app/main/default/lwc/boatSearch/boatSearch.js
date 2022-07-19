import { LightningElement, api } from 'lwc';

 // imports
 export default class BoatSearch extends LightningElement {
    @api isLoading = false;
    
    // Handles loading event
    handleLoading() { 
        this.isLoading = true;
    }
    
    // Handles done loading event
    handleDoneLoading() {
        this.isLoading = false; 
    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) {
        console.log('Id tipo Bot: '+ event.detail );
    }
    
    createNewBoat() { }
  }