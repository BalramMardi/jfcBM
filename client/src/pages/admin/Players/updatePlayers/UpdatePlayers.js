import AdminMenu from "../../../AdminMenu";
import "./updatePlayers.css";
import React, { useEffect, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
// import { toast } from "react-toastify";
import toast from "react-hot-toast";

const UpdatePlayers = () => {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [number, setNumber] = useState("");
  const [popular, setPopular] = useState("");
  const [appears, setAppear] = useState("");
  const [assists, setAssists] = useState("");
  const [goals, setGoals] = useState("");
  const [photo, setPhoto] = useState("");
  const [pid, setPid] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  //single news
  const getSinglePlayer = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/player/get-players/${params.slug}`
      );

      setName(data.players.name);
      setPosition(data.players.position);
      setNumber(data.players.number);
      setPopular(data.players.popular);
      setAppear(data.players.appears);
      setAssists(data.players.assists);
      setGoals(data.players.goals);
      setPid(data.players._id);
      // setPhoto(data.news.photo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSinglePlayer();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const playerData = {
        name: name,
        position: position,
        number: number,
        appears: appears,
        assists: assists,
        goals: goals,
        popular: popular,
        photo: photo,
      };

      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/player/update-players/${pid}`,
        playerData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the Content-Type header to JSON
          },
        }
      );

      const data = response.data;

      if (data?.success) {
        toast.success(data?.message);
        navigate("/admin/player");
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
        `${process.env.REACT_APP_API}/api/v1/player/delete-players/${pid}`
      );
      navigate("/admin/player");
      toast.success("player DEleted Succfully");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="createNews-container">
      <AdminMenu />
      <div className="createNews-right">
        <form className="ml-10">
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Players
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Create Players
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
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
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Position
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
                        value={position}
                        onChange={(e) => {
                          setPosition(e.target.value);
                        }}
                      />
                    </div>
                  </div>

                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Number
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
                        value={number}
                        onChange={(e) => {
                          setNumber(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Appearance
                  </label>
                  <div className="mt-2 mb-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="appears"
                        id="appears"
                        autoComplete="appears"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="appears"
                        value={appears}
                        onChange={(e) => {
                          setAppear(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Goals / Saves
                  </label>
                  <div className="mt-2 mb-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="goals"
                        id="goals"
                        autoComplete="goals"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="goals"
                        value={goals}
                        onChange={(e) => {
                          setGoals(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Assists / CleanSheets
                  </label>
                  <div className="mt-2 mb-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="assists"
                        id="assists"
                        autoComplete="assists"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="assists"
                        value={assists}
                        onChange={(e) => {
                          setAssists(e.target.value);
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
                    Cover photo
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
                          src={`${process.env.REACT_APP_API}/api/v1/player/players-photo/${pid}`}
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

            {/* ================================================ */}

            {/* <div className="mb-3">
              <label className="btn btn-outline-secondary col-md-12">
                {photo ? photo.name : "Upload Photo"}
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
              {photo && (
                <div className="text-center">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                    className="img img-responsive"
                  />
                </div>
              )}
            </div> */}

            {/* -------------------------------------------------------------------------------------- */}

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Popular
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="news-title"
                        id="news-title"
                        autoComplete="title"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Popular"
                        value={popular}
                        onChange={(e) => setPopular(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6 mr-[50%] mb-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => navigate("/admin/player")}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              onClick={handleUpdate}
            >
              Update
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

export default UpdatePlayers;
