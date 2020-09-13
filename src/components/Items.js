import React, { Component } from "react";
import Filter from "./Filter";
import Item from "./Item";

class Items extends Component {
  state = {
    // What state does this component have?
    searchTerm: "",
  };

  updateSearchTerm = (searchTerm) => {
    this.setState({
      searchTerm, // this is equavalent to  'this.setState({searchTerm: searchTerm})'
    });
  };

  render() {
    const { title, items, onRemove, onToggle } = this.props;
    return (
      <section className="Items">
        <h2>
          {title} ({items.length})
        </h2>
        <Filter
          searchTerm={this.state.searchTem}
          onChange={this.updateSearchTerm}
        />
        {items
          .filter((item) =>
            // Hmm… this needs some work.
            item.value
              .toLowerCase()
              .includes(this.state.searchTerm.toLowerCase())
          )
          // Rendering the items
          .map((item) => (
            <Item
              key={item.id}
              onToggle={onToggle}
              onRemove={() => onRemove(item)}
              item={item}
            />
          ))}
      </section>
    );
  }
}

export default Items;
