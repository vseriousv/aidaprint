import React from 'react'

import whithHocs from './ArticlesTableHoc'

export default class ArticleTable extends React.Componets{
    render(){
        console.log(this.props.data);
        return(
            <div></div>
        );
    }
}
