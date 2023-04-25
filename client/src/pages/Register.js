//importing important component
import { useState } from "react";
import axios from "axios";
//the register page component that will be exported
const Register = ({ setCurrentPage, onSubmit, setOnSubmit }) => {
  //state variables with react hooks
  //the blank data state variable that will be changed after the user submit forms. the variable will be passed to the main component
  const [data, setData] = useState({
    name: localStorage.getItem("user"),
    email: "",
    phonenum: "",
    semester: 0,
    gpa: localStorage.getItem("user") == "Soultan Ali Hadji" ? 3.82 : 2.9,
    scheme: "",
    file: "",
  });

  //the notif state variable that will pass notif value if there is something wrong with the data that the user inputs or if user submits blank forms
  const [notif, setNotif] = useState(
    data.gpa <= 3 ? "*Mohon maaf IPK kurang untuk mendaftar" : ""
  );

  //temporary variable to store input data before the data being passed to the data state variable
  let dataCopy = { ...data };

  //event handling function to change dataCopy object values
  const handleChange = (e) => {
    e.preventDefault();

    if (e.target.name == "name") {
      dataCopy.name = e.target.value;
    } else if (e.target.name == "email") {
      dataCopy.email = e.target.value;
    } else if (e.target.name == "phonenum") {
      dataCopy.phonenum = e.target.value;
    } else if (e.target.name == "semester") {
      dataCopy.semester = e.target.value;
    } else if (e.target.name == "scheme") {
      dataCopy.scheme = e.target.value;
    } else {
      dataCopy.file = e.target.files[0].name;
    }

    if (dataCopy.name == "Soultan Ali Hadji") {
      dataCopy.gpa = 3.82;
    } else if (dataCopy.name.length > 0) {
      dataCopy.gpa = 2.9;
    } else {
      dataCopy.gpa = 0;
    }

    setData(dataCopy);
  };

  //event handling function to set notif if there is something wrong, to post data to API, and to change currentPage state variable value before navigate user to the application page
  const handleSubmit = () => {
    if (!data.email.includes("@") && data.email != "") {
      setNotif("*Pastikan format email sudah benar");
    } else if (
      data.name == "" ||
      data.email == "" ||
      data.phonenum == "" ||
      data.semester == 0 ||
      data.gpa == 0 ||
      data.scheme == "" ||
      data.file == ""
    ) {
      setNotif("*Pastikan anda mengisi semua data");
    } else {
      axios({
        method: "post",
        url: "http://localhost:5000/applications",
        data: data,
      })
        .then((data) => {
          console.log(data);
          setOnSubmit(onSubmit == false ? true : false);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setTimeout(() => {
            setCurrentPage("/application");
            window.history.replaceState(
              null,
              null,
              "/junior_web_certification/#/application"
            );
          }, 1000);
        });
    }
  };

  //rendering the jsx element
  return (
    <div className="register">
      <div className="container mx-auto grid justify-center items-center">
        <div>
          <div className="text-center mt-[6vh] mb-10">
            <h3 className="text-xl xl:text-3xl font-medium">Daftar Beasiswa</h3>
          </div>
          <div className="flex justify-end mt-6 text-sm xl:text-base text-red-500">
            <label>{notif}</label>
          </div>
          <div className="border border-blue-600 rounded-lg lg:w-[40vw] xl:w-[34vw] p-6">
            <form className="grid gap-4">
              <div className="grid grid-flow-col">
                <label>Masukkan Nama</label>
                <div className="flex justify-end">
                  <input
                    className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2"
                    type="text"
                    value={data.name}
                    name="name"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-flow-col">
                <label>Masukkan Email</label>
                <div className="flex justify-end">
                  <input
                    className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2"
                    type="email"
                    value={data.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-flow-col">
                <label>Nomor HP</label>
                <div className="flex justify-end">
                  <input
                    className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2"
                    type="number"
                    value={data.phonenum}
                    name="phonenum"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-flow-col">
                <label>Semester Saat Ini</label>
                <div className="flex justify-end">
                  <select
                    className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600"
                    value={data.semester}
                    name="semester"
                    onChange={handleChange}
                  >
                    <option value={0}>Pilih</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                    <option value={8}>8</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-flow-col">
                <label>IPK Terakhir</label>
                <div className="flex justify-end">
                  <input
                    className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2 bg-neutral-200"
                    type="text"
                    value={data.gpa}
                    disabled
                    name="gpa"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-flow-col">
                <label>Pilihan Beasiswa</label>
                <div className="flex justify-end">
                  <select
                    className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600"
                    value={data.scheme}
                    name="scheme"
                    onChange={handleChange}
                    disabled={data.gpa < 3 ? true : false}
                  >
                    <option value="">Pilihan Beasiswa</option>
                    <option value="Akademik">Akademik</option>
                    <option value="Non Akademik">Non Akademik</option>
                  </select>
                </div>
              </div>
              <div className="grid grid-flow-col">
                <label>Upload Berkas Syarat</label>
                <div className="flex justify-end">
                  <div className="w-[200px] md:w-[260px]">
                    <input
                      className="text-sm w-[90px] md:w-full"
                      type="file"
                      name="file"
                      onChange={handleChange}
                      disabled={data.gpa < 3 ? true : false}
                    />
                  </div>
                </div>
              </div>
            </form>
            <div className="flex justify-center gap-10 mt-14">
              <button
                className={
                  "text-white font-medium rounded-lg px-4 py-1" +
                  (data.gpa < 3
                    ? " bg-neutral-400"
                    : " bg-blue-600 hover:bg-blue-700")
                }
                onClick={() => {
                  //onClick events that will trigger handleSubmit function and pass values to the main component
                  handleSubmit();
                }}
                disabled={data.gpa < 3 ? true : false}
              >
                Daftar
              </button>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-4 py-1"
                onClick={() => {
                  //onClick events that will pass values to the main component
                  setCurrentPage("/landing");
                  window.history.replaceState(
                    null,
                    null,
                    "/junior_web_certification/#/landing"
                  );
                }}
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
