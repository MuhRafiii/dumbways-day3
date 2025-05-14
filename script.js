let contacts = [];

// Projects Card
let projects = [];

// Reset form
function resetForm($id) {
  document.getElementById($id).reset();
}

function getData(e) {
  // Value dari input
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // Form Validation
  if (
    name == "" ||
    email == "" ||
    phone == "" ||
    subject == "" ||
    message == ""
  ) {
    return alert("Please fill all the fields");
  } else {
    alert(
      `Thank you, ${name}!\n\nYour message has been received:\n\nEmail: ${email}\nPhone: ${phone}\nSubject: ${subject}\nMessage: ${message}`
    );
  }

  let contact = {
    name: name,
    email: email,
    phone: phone,
    subject: subject,
    message: message,
  };

  contacts.push(contact);

  console.log(contacts);

  resetForm("contact-form");
}

// Function submit
function getAddProject(e) {
  e.preventDefault();

  let projectName = document.getElementById("project-name").value;
  let startDate = new Date(document.getElementById("start-date").value);
  let endDate = new Date(document.getElementById("end-date").value);
  let description = document.getElementById("description").value;

  // Alert date input
  if (startDate > endDate) {
    alert("End date must be later than start date");
    return;
  }

  if (
    projectName == "" ||
    startDate == "" ||
    endDate == "" ||
    description == ""
  ) {
    return alert("Please fill all the fields");
  }

  // duration
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());

  let duration = months <= 0 ? "Kurang dari 1 bulan" : `${months} bulan`;

  // tech
  let tech = [];
  if (document.getElementById("checkBox1").checked) tech.push("node");
  if (document.getElementById("checkBox2").checked) tech.push("react");
  if (document.getElementById("checkBox3").checked) tech.push("next");
  if (document.getElementById("checkBox4").checked) tech.push("typescript");

  let project = {
    projectName,
    duration,
    description,
    tech,
  };

  projects.push(project);

  console.log(projects);

  changeElement();

  resetForm("project-form");
}

// icons
function generateIcons(techs) {
  let iconMap = {
    node: '<img width="20" height="20" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>',
    react:
      '<img width="20" height="20" src="https://img.icons8.com/ultraviolet/40/react--v1.png" alt="react--v1"/>',
    next: '<img width="20" height="20" src="https://img.icons8.com/fluency/48/nextjs.png" alt="nextjs"/>',
    typescript:
      '<img width="20" height="20" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/>',
  };

  return techs.map((tech) => iconMap[tech] || "").join("");
}

const changeElement = () => {
  const projectList = document.getElementById("project-list");
  projectList.innerHTML = projects
    .map(
      (project) =>
        `
    <div class="col-4">
      <div class="card mb-3">
        <div class="card-body">
        <img src="https://placehold.co/300x200/png" class="card-img-top mb-2 rounded" alt="example">
          <h5 class="card-title mb-0">${project.projectName}</h5>
          <p class="card-text text-secondary">durasi : ${project.duration}</p>
          <p class="card-text my-3">${project.description}</p>
          <div class="d-flex mb-3">
            ${generateIcons(project.tech)}
          </div>
          <div class="d-flex gap-2 justify-content-between">
            <a href="#" class="btn btn-sm btn-dark w-50 rounded">edit</a>
            <a href="#" class="btn btn-sm btn-dark w-50 rounded">delete</a>
          </div>
        </div>
      </div>
    </div>
    `
    )
    .join("");
};

// function changeElement() {
//   document.getElementById("project-list").innerHTML = "";
//   for (let i = 0; i < projects.length; i++) {
//     document.getElementById("project-list").innerHTML += `
//     <div class="col-4">
//       <div class="card mb-3">
//         <div class="card-body">
//         <img src="https://placehold.co/300x200/png" class="card-img-top mb-2 rounded" alt="example">
//           <h5 class="card-title mb-0">${projects[i].projectName}</h5>
//           <p class="card-text text-secondary">durasi : ${
//             projects[i].duration
//           }</p>
//           <p class="card-text my-3">${projects[i].description}</p>
//           <div class="d-flex mb-3">
//             ${generateIcons(projects[i].tech)}
//           </div>
//           <div class="d-flex gap-2 justify-content-between">
//             <a href="#" class="btn btn-sm btn-dark w-50 rounded">edit</a>
//             <a href="#" class="btn btn-sm btn-dark w-50 rounded">delete</a>
//           </div>
//         </div>
//       </div>
//     </div>
//     `;
//   }
// }
