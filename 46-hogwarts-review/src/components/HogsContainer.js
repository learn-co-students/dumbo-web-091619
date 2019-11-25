import React from 'react';
import HogsList from './HogsList'
import Filters from './Filters'

class HogsContainer extends React.Component {

  state = {
    greasedOnly: false,
    sortCriterion: "none"
  }

  toggleGreasedFilter = () => {
    this.setState({
      greasedOnly: !this.state.greasedOnly
    })
  }

  sortChange = (sortCriterion) => {
    this.setState({
      sortCriterion: sortCriterion
    })
  }

  filterHogs(hogs) {
    return hogs.filter(hog => hog.greased)
  }

  sortHogs(hogs) {
    if (this.state.sortCriterion === "none")
      return hogs
    else {
      return [ ...hogs ].sort((a,b) => {
        return a[this.state.sortCriterion] > b[this.state.sortCriterion] ? 1 : -1
      })
    }
  }

  render(){
    const hogs = this.state.greasedOnly ? this.filterHogs(this.props.hogs) : this.props.hogs
    const possiblySortedHogs = this.sortHogs(hogs)
    return (<section>
        <Filters 
          toggleGreased={ this.toggleGreasedFilter } 
          greasedOnly={ this.state.greasedOnly }
          sortChange={ this.sortChange } />
        <HogsList hogs={ possiblySortedHogs }/>
      </section>)
  }
}


export default HogsContainer