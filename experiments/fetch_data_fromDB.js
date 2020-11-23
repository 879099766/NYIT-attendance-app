const [isHoser, setStateHoster] = useState(false);
const [hostList, setStateHostList] = useState([]);

const isHost = () => {
  hostRef = firebase
    .firestore()
    .collection("hosts")
    .then((emails) => {
      console.log(emails);
    });
};

const getCollection = (querySnapshot) => {
  querySnapshot.forEach((res) => {
    this.setStateHostList(res.data());
  });
};
