function Users() {
  const [studentPhotos, setStudentPhotos] = useState([]);
  const url =
    "https://api.pexels.com/v1/search?query=university%20students%20head%20shots&per_page=20";
  const apikey = "hw9BQNs9CRuaZzqFSayHCFC7LWKqnhxlS8VGiMNF1akFlDlt0dqHsPyI";

  useEffect(() => {
    axios
      .get(`${url}`, {
        headers: {
          Authorization: apikey,
        },
      })
      .then((response) => {
        console.log(response.data);
        setStudentPhotos(response.data.photos);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>University students</h1>
      <div>
        {studentPhotos.map((student) => {
          return (
            <div key={student.id}>
              <img
                src={student.src.medium}
                alt={`Photographer: ${student.photographer}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
