import firebase from "./db/firebaseDB";

class select_doc{
  constructor(props) {
    super(props);
    this.firestoreRef = firebase.firestore().collection("hosts").doc("engineering");

    this.state = {
      profArr: [],
    };

  }

  componentDidMount(){
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getDoc)
  };

  componentWillUnmount(){
    this.unsubscribe();
  };

  getDoc = (querySnapshot) => {
    const email = querySnapshot.data();
    this.state.profArr.push(email);
  };

  render(){
    return(
      {this.state.profArr}
    );
  }
}