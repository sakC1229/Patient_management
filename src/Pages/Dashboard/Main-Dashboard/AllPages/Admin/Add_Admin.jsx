import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AdminRegister } from "../../../../../Redux/auth/action";
import Sidebar from "../../GlobalFiles/Sidebar";
import admin from "../../../../../img/admin.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";
const notify = (text) => toast(text);

const Add_Admin = () => {
  const { data } = useSelector((store) => store.auth);

  const [AdminValue, setAdminValue] = useState({
    adminName: "",
    age: "",
    mobile: "",
    email: "",
    gender: "",
    DOB: "",
    address: "",
    education: "",
    adminID: Date.now(),
    password: "",
    image: "imageUrl",
  });

  const HandleDoctorChange = (e) => {
    setAdminValue({ ...AdminValue, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const HandleDoctorSubmit = (e) => {
    e.preventDefault();
    console.log(AdminValue);
    dispatch(AdminRegister(AdminValue));
    notify("Admin Added");
  };

  if (data?.isAuthticated === false) {
    return <Navigate to={"/"} />;
  }

  if (data?.user.userType !== "admin") {
    return <Navigate to={"/dashboard"} />;
  }

  return (
    <>
      <ToastContainer />
      <div className="container">
        <Sidebar />
        <div className="AfterSideBar">
          <div className="Main_Add_Doctor_div">
            <h1>Add Admin</h1>
            <img src={admin} alt="doctor" className="avatarimg" />
            <form onSubmit={HandleDoctorSubmit}>
              <div>
                <label>Name</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="adminName"
                    value={AdminValue.adminName}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Age</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Age"
                    name="age"
                    value={AdminValue.age}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Contact Number</label>
                <div className="inputdiv">
                  <input
                    type="number"
                    placeholder="Emergency Number"
                    name="mobile"
                    value={AdminValue.mobile}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Email</label>
                <div className="inputdiv">
                  <input
                    type="email"
                    placeholder="abc@abc.com"
                    name="email"
                    value={AdminValue.email}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Gender</label>
                <div className="inputdiv">
                  <select
                    name="gender"
                    value={AdminValue.gender}
                    onChange={HandleDoctorChange}
                    required
                  >
                    <option value="Choose Gender">Choose Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
              </div>
              <div>
                <label>Birthdate</label>
                <div className="inputdiv">
                  <input
                    type="date"
                    placeholder="dd-mm-yy"
                    name="DOB"
                    value={AdminValue.DOB}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Address</label>
                <div className="inputdiv adressdiv">
                  <input
                    type="text"
                    placeholder="Address line 1"
                    name="address"
                    value={AdminValue.address}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Education</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="eg.MBBS"
                    name="education"
                    value={AdminValue.education}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label>Password</label>
                <div className="inputdiv">
                  <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    value={AdminValue.password}
                    onChange={HandleDoctorChange}
                    required
                  />
                </div>
              </div>
              {/* <div>
          <label>Image</label>
          <div className="inputdiv">
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={handleChange}
              style={{ display: "block" }}
            >
              {imageUrl ? (
                <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </div>
        </div> */}

              <button type="submit" className="formsubmitbutton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add_Admin;
