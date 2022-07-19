import { LightningElement, api } from 'lwc';

 // imports
 export default class BoatSearch extends LightningElement {
    @api isLoading = false;
    
    // Handles loading event
    handleLoading() { 
        this.isLoading = true;
        setTimeout(() => {
            this.handleDoneLoading();
        }, 10000);
    }
    
    // Handles done loading event
    handleDoneLoading() {
        console.log('teste');
        this.isLoading = false; 
    }
    
    // Handles search boat event
    // This custom event comes from the form
    searchBoats(event) { }
    
    createNewBoat() { }
  }