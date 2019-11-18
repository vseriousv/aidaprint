import React, {Component} from 'react';

export default class ContactsMap extends Component{
  render() {
    return(
		<div className="card m-0 p-0">
      <iframe scrolling="no" src="https://yandex.ru/map-widget/v1/?um=constructor%3Ada37f609aa0513a5759fe27127ce4ccde7d4dd5f198be44c811fcbdbc50d8dda&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>
    </div>
    );
  }
}
