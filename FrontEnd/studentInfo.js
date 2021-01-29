class StudentInfo extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
       <div id="studentList">
       <input class="search" placeholder="Search" />
        <table class="table table-bordered table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                </tr>
            </thead>
            <tbody class="list">
            <tr>
                <td style="display:none"></td>
                
            </tr>
            </tbody>
        </table>
        </div><br/>
  
            <button id="myBtn">Fetch Record</button>
    `;

    const tblRow = document.querySelector("#studentList .list");
    const values = [
      { id: 1, name: "Ebenezer C. Hayford", age: 28, course: "React.js" },
      { id: 2, name: "Esther C. Hayford", age: 29, course: "Taxation" },
      { id: 3, name: "Alexander Yalley", age: 30, course: "Python" },
      { id: 4, name: "Mary J. Bleige", age: 31, course: "Music" },
    ];

    values.map((el, i) => {
      tblRow.innerHTML += `<tr>
        <td class="id"> ${el.id} </td>
        <td class="name"> ${el.name} </td>
         <td class="age"> ${el.age} </td>
          <td class="course"> ${el.course} </td>
    </tr>
    `;
    });
    const options = {
      valueNames: ["id", "name", "age", "course"],
    };

    const contactList = new List("studentList", options);
    function fetchRecord(url) {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data.result);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    const BaseUrl = "http://localhost:5000/api";
    document
      .getElementById("myBtn")
      .addEventListener("click", () => fetchRecord(BaseUrl));
  }
}

window.customElements.define("student-info", StudentInfo);
