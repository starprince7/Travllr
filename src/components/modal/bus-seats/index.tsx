import * as React from "react";
import Modal from "@mui/material/Modal";
import SeatBookingStepper from "@/components/stepper";

type Props = {
  open: boolean;
  handleOpen?: () => void;
  handleClose: () => void;
};

export default function SeatsModal({
  handleClose,
  handleOpen = () => {},
  open,
}: Props) {
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <SeatBookingStepper />
      </Modal>
    </div>
  );
}
