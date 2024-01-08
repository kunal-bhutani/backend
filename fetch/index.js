// const axios = require("axios");
const getData = async () => {
  const _URL = "https://jsonplaceholder.typicode.com/posts";
  // const result = await fetch(_URL,{
  //     method:"GET",
  // });
  const result = await fetch(_URL, {
    method: "POST",
    body: JSON.stringify({
      userId:'6969',
      id:'6969',
      title:"hello JI",
      body:"This is done by kunal Bhutani"
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await result.json();
  console.log("result=> ", json);
};

const getAxiosData = async () => {
  const _URL = "https://jsonplaceholder.typicode.com/posts";
  // const result = await axios.get(_URL);
  const result = await axios.post(
    _URL,
    {
      name: "",
      title: "",
    },
    {
      headers: "",
    }
  );

  console.log("axios Result=>> ", result.data.slice(0, 2));
};
// getAxiosData();
getData();
