import firebase from "./db/firebaseDB";

class select_doc{
  constructor(props) {
    super(props);
    this.firestoreRef = firebase.firestore().collection("hosts");

    this.state = {
      profArr: [],
    };

  }

  componentDidMount(){
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection)
  };

  componentWillUnmount(){
    this.unsubscribe();
  };

  getCollection = (querySnapshot) => {
    querySnapshot.forEach((res) => {
      const email = res.data();
      this.state.profArr.push(email);
    });
  };

  render(){
    return(
      {this.state.profArr}
    );
  }
}