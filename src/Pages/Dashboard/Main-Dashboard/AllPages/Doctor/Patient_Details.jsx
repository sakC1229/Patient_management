import { Table } from "antd";
import React from "react";

const Patient_Details = () => {
  const columns = [
    { title: "Id", dataIndex: "Id", key: "Id" },
    { title: "Patient Name", dataIndex: "Patient_Name", key: "Patient Name" },
    { title: "Date", dataIndex: "Date", key: "Date" },
    { title: "Checked By", dataIndex: "Checked_By", key: "Checked By" },
    { title: "Report Ref", dataIndex: "Report_Ref", key: "Report Ref" },
  ];

  const data = [
    {
      key: 1,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
    {
      key: 2,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
    {
      key: 3,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
    {
      key: 4,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
    {
      key: 5,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
    {
      key: 6,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
    {
      key: 7,
      Id: "ERFCE34",
      Patient_Name: "The Rock",
      Date: "12-09-2022",
      Checked_By: "Dr.Rajendra Patel",
      Report_Ref: "ERODEII334l",
    },
  ];

  return (
    <>
      <div className="Payment_Page">
        <h1 style={{ marginBottom: "2rem" }}>Patient Details</h1>
        <div className="patientBox">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </>
  );
};

export default Patient_Details;
