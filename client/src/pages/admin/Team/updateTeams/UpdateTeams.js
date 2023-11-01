import AdminMenu from "../../../AdminMenu";
import "./updateTeams.css";
import React, { useEffect, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import toast from "react-hot-toast";

const UpdateTeams = () => {
  const [teamname, setTeamname] = useState("");
  const [stadium, setStadium] = useState("");
  const [shortname, setShortname] = useState("");
  const [photo, setPhoto] = useState("");
  const [pid, setPid] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  //single news
  const getSingleTeams = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/teams/get-teams/${params.slug}`
      );

      setTeamname(data.teams.teamname);
      setStadium(data.teams.stadium);
      setShortname(data.teams.shortname);
      setPid(data.teams._id);
      // setPhoto(data.news.photo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleTeams();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const teamData = {
        teamname: teamname,
        stadium: stadium,
        shortname: shortname,
        photo: photo,
      };

      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/teams/update-teams/${pid}`,
        teamData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the Content-Type header to JSON
          },
        }
      );

      const data = response.data;

      if (data?.success) {
        toast.success(data?.message);
        navigate("/admin/teams");
      } else {
        toast.error("Player was not created");
      }
    } catch (error) {
      console.log(error);
    }
  };

  //delete
  const handleDelete = async () => {
    try {
      let answer = window.prompt("Are You Sure want to delete this product ? ");
      if (!answer) return;
      const { data } = await axios.delete(
        `${process.env.REACT_APP_API}/api/v1/teams/delete-teams/${pid}`
      );
      navigate("/admin/teams");
      toast.success("player DEleted Succfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  //cancel
  const handleCancel = () => {
    toast("You Cancelled the Update!", {
      icon: "😕",
    });
    navigate("/admin/teams");
  };

  return (
    <div className="createNews-container">
      <AdminMenu />
      <div className="createNews-right">
        <form className="ml-10">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Teams
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Create Teams
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Team Name
                  </label>
                  <div className="mt-2 mb-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Name"
                        value={teamname}
                        onChange={(e) => {
                          setTeamname(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Stadium
                  </label>
                  <div className="mt-2 mb-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="position"
                        id="position"
                        autoComplete="position"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="position"
                        value={stadium}
                        onChange={(e) => {
                          setStadium(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Shortname
                  </label>
                  <div className="mt-2 mb-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="number"
                        id="number"
                        autoComplete="number"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="number"
                        value={shortname}
                        onChange={(e) => {
                          setShortname(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Team photo
                  </label>
                  <div className="mb-3">
                    <label className="border border-gray-300 text-gray-700 bg-white hover:bg-gray-100 w-full p-2 block text-center">
                      {photo ? photo.name : "Upload New Photo"}
                      <input
                        type="file"
                        name="photo"
                        accept="image/*"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        hidden
                      />
                    </label>
                  </div>
                  <div className="mb-3">
                    {photo ? (
                      <div className="text-center">
                        <img
                          src={URL.createObjectURL(photo)}
                          alt="newsphoto"
                          height={"200px"}
                          className="max-w-full h-auto"
                        />
                      </div>
                    ) : (
                      <div className="text-center">
                        <img
                          src={`${process.env.REACT_APP_API}/api/v1/teams/teams-photo/${pid}`}
                          alt="newsphoto"
                          height={"200px"}
                          className="max-w-full h-auto mx-auto"
                          style={{ height: "500px", width: "auto" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 mr-[50%] mb-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              onClick={handleUpdate}
            >
              Save
            </button>
            <button
              type="submit"
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 "
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTeams;
