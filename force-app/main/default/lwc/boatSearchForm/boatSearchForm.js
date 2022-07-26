import { LightningElement, track, wire } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';

// imports
// import getBoatTypes from the BoatDataService => getBoatTypes method';
export default class BoatSearchForm extends LightningElement {
    @track
    selectedBoatTypeId = '';
    
    // Private
    @track
    error = undefined;
    
    @track
    searchOptions;
    
    // Wire a custom Apex method
    @wire(getBoatTypes)  
    boatTypes({ error, data }) {
      if (data) {
        this.searchOptions = data.map(type => {
          return { label: type.Name, value: type.Id };
        });
        this.searchOptions.unshift({ label: 'All Types', value: '' });
      } else if (error) {
        this.searchOptions = undefined;
        this.error = error;
      }
    }
    
    // Fires event that the search option has changed.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    handleSearchOptionChange(event) {
        event.preventDefault();
        this.selectedBoatTypeId = event.detail.value;
      // Create the const searchEvent
        const searchEvent = new CustomEvent('search', {
            detail: this.selectedBoatTypeId
        })
      // searchEvent must be the new custom event search
      
      this.dispatchEvent(searchEvent);
    }
}