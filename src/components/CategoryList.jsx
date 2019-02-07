import React, { Component } from 'react';
import fetchTestCategories from '../models/Test.js'
import CategoryItem from './CategoryItem.jsx';

class CategoryList extends Component {

    constructor(props){
        super(props);
        this.state = {
            categoryList: []
        };
    }

    componentDidMount(){
        this.setState({
            categoryList: fetchTestCategories()
        });     
    }



    render() {

        const itemList = this.state.categoryList.map((item, index) => {
            return <CategoryItem key={index} category= {item}/>
        });

        return (
            <div>
                <ul>{itemList}</ul>
            </div>

        )
    }

}
export default CategoryList;