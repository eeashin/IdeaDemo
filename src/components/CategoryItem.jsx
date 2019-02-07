import React, { Component } from 'react'
import fetchTestCategories from '../models/Test.js'

class CategoryItem extends Component {

    constructor(props){
        super(props);
        this.state = {
            category: props.category,
        };
    }



  render() {
    return (
     <li>Id - {this.state.category.id}, Name - {this.state.category.name} Budget- {this.state.category.budget}</li>
    )
  }
}
export default CategoryItem;
