import React from 'react';
import {connect} from 'react-redux';
import {fetch} from '../actions';

import {CharacterList} from '../components';
// import actions

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.fetch();
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      return <div>Loading plz wait....</div>;
    }
    return (
      <div className='CharactersList_wrapper'>
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    fetching: state.charsReducer.isLoading,
    characters: state.charsReducer.characters
  };
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {fetch}
)(CharacterListView);
