import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { IoMdAdd } from "react-icons/io";

const ModalQ = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} type='primary' style={{ backgroundColor: "#1D5FAD", fontSize: "16px", height: "50px", width: "170px" }} size="large">
        <IoMdAdd />
        Add Employee
      </Button>
      <Modal
      styles={{
        modal: {
          borderRadius: "20px",
          width: "1000px",
          height: "300px",
          marginTop: "100px",
          backgroundColor: "#f5f5f5",
          boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
          padding: "20px"
        }
      }}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <RegisterEmployee />
      </Modal>
    </>
  );
};
export default ModalQ;