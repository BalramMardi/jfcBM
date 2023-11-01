import "./updateNews.css";
import AdminMenu from "../../../AdminMenu";

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PhotoIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

import "./updateNews.css";
import axios from "axios";
const UpdateNews = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [popular, setPopular] = useState("");
  const [team, setTeam] = useState("");
  const [tile, setTile] = useState();
  const [photo, setPhoto] = useState("");
  const [pid, setPid] = useState("");

  const navigate = useNavigate();

  const params = useParams();

  //single news
  const getSingleNews = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/news/get-news/${params.slug}`
      );

      setTitle(data.news.title);
      setDesc(data.news.desc);
      setDate(data.news.date);
      setPopular(data.news.popular);
      setTeam(data.news.team);
      setTile(data.news.tile);
      setPid(data.news._id);
      // setPhoto(data.news.photo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleNews();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const newsData = new FormData();

      newsData.append("title", title);
      newsData.append("desc", desc);
      newsData.append("date", date);
      newsData.append("popular", popular);
      newsData.append("team", team);
      newsData.append("tile", tile);

      if (photo) {
        newsData.append("photo", photo);
      }

      const response = await axios.put(
        `${process.env.REACT_APP_API}/api/v1/news/update-news/${pid}`,
        newsData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the Content-Type header to JSON
          },
        }
      );

      const data = response.data;

      if (data?.success) {
        toast.success(data?.message);
        navigate("/admin/news");
      } else {
        toast.error("News was not created");
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
        `${process.env.REACT_APP_API}/api/v1/news/delete-news/${pid}`
      );
      navigate("/admin/news");
      toast.success("news DEleted Succfully");
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
                News
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Create News
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="news-title"
                        id="news-title"
                        autoComplete="title"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Title of the news"
                        value={title}
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    News
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={""}
                      value={desc}
                      onChange={(e) => setDesc(e.target.value)}
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Date
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="news-title"
                          id="news-title"
                          autoComplete="title"
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="dd/mm/yyyy"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900 mb-3"
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
                          src={`${process.env.REACT_APP_API}/api/v1/news/news-photo/${pid}`}
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
              <div className="mt-10 space-y-10">
                <fieldset>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="tile"
                        name="tile"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        checked={tile === true}
                        value={true}
                        onChange={(e) => setTile(e.target.value)}
                      />
                      <label
                        htmlFor="tile"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Tile
                      </label>
                    </div>
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    News Category
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    The news relate to which team.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="First"
                        name="category"
                        type="radio"
                        value="First"
                        onChange={(e) => setTeam(e.target.value)}
                        checked={team === "First"} // Check if the team state matches "First"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="First"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First Team
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="Reserve"
                        name="category"
                        type="radio"
                        value="Reserve"
                        onChange={(e) => setTeam(e.target.value)}
                        checked={team === "Reserve"} // Check if the team state matches "Reserve"
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="Reserve"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Reserve Team
                      </label>
                    </div>
                  </div>
                </fieldset>
              </div>
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
              onClick={() => navigate("/admin/news")}
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

export default UpdateNews;
