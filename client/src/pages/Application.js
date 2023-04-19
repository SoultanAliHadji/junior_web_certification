import { useState, useEffect } from "react";
import axios from "axios";

//the application page component that will be exported
const Application = ({ setCurrentPage, onSubmit }) => {
  const [data, setData] = useState([]);

  //get data from API
  useEffect(() => {
    axios
      .get("http://localhost:5000/applications")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [onSubmit]);

  const reversedData = data
    .slice()
    .reverse()
    .slice(0, 1)
    .map((application) => {
      return (
        <form className="grid gap-4">
          <div className="grid grid-flow-col">
            <label>Masukkan Nama</label>
            <div className="flex justify-end">
              <input
                className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2 bg-neutral-200"
                type="text"
                value={application.name}
                disabled
              />
            </div>
          </div>
          <div className="grid grid-flow-col">
            <label>Masukkan Email</label>
            <div className="flex justify-end">
              <input
                className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2 bg-neutral-200"
                type="text"
                value={application.email}
                disabled
              />
            </div>
          </div>
          <div className="grid grid-flow-col">
            <label>Nomor HP</label>
            <div className="flex justify-end">
              <input
                className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2 bg-neutral-200"
                type="text"
                value={application.phonenum}
                disabled
              />
            </div>
          </div>
          <div className="grid grid-flow-col">
            <label>Semester Saat Ini</label>
            <div className="flex justify-end">
              <input
                className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2 bg-neutral-200"
                type="text"
                value={application.semester}
                disabled
              />
            </div>
          </div>
          <div className="grid grid-flow-col">
            <label>IPK Terakhir</label>
            <div className="flex justify-end">
              <input
                className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2 bg-neutral-200"
                type="text"
                value={application.gpa}
                disabled
              />
            </div>
          </div>
          <div className="grid grid-flow-col">
            <label>Pilihan Beasiswa</label>
            <div className="flex justify-end">
              <input
                className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2 bg-neutral-200"
                type="text"
                value={application.scheme}
                disabled
              />
            </div>
          </div>
          <div className="grid grid-flow-col">
            <label>Upload Berkas Syarat</label>
            <div className="flex justify-end">
              <input
                className="w-[200px] md:w-[260px] border border-neutral-600 outline-blue-600 px-2 bg-neutral-200"
                type="text"
                value={application.file}
                disabled
              />
            </div>
          </div>
          <div className="mt-8 grid grid-flow-col">
            <label className="font-medium">Status Ajuan</label>
            <div className="flex justify-end">
              <div className="w-[200px] md:w-[260px]">
                <label className="bg-yellow-400 px-4 py-1 rounded-full">
                  Belum Diverifikasi
                </label>
              </div>
            </div>
          </div>
        </form>
      );
    });

  //rendering the jsx element
  return (
    <div className="application">
      <div className="container mx-auto grid justify-center items-center">
        <div>
          <div className="text-center mt-[6vh] mb-10">
            <h3 className="text-xl xl:text-3xl font-medium">Ajuan Beasiswa</h3>
          </div>
          <div className="border border-blue-600 rounded-lg lg:w-[40vw] xl:w-[34vw] p-6">
            {data.length > 0 ? (
              reversedData
            ) : (
              <div className="grid justify-center text-center">
                <label>Tidak terdapat history pendaftaran</label>
                <label>Silahkan melakukan pendaftaran terlebih dahulu</label>
                <div>
                  <button
                    className="mt-20 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-4 xl:px-5 py-2 xl:py-3 font-medium"
                    onClick={() => {
                      setCurrentPage("/register");
                      window.history.replaceState(null, null, "/register");
                    }}
                  >
                    Mulai Mendaftar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
