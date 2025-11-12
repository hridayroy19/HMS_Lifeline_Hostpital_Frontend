import React from "react";

const DepartmentHeader = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-10 mb-12">
      <div>
        <h1 className=" mb-4 leading-snug">
          Departments of <br /> Medical Specialties
        </h1>
      </div>
      <p className=" text-xl leading-relaxed">
        At Lifeline Hospital, every department is led by expert doctors and
        equipped with the latest technology to ensure accurate diagnosis and
        compassionate care.
      </p>
    </div>
  );
};

export default DepartmentHeader;
