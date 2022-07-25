import { Modal } from "antd";
import ReactPlayer from "react-player";


const PreviewModal = ({showModal, setShowModal, preview}) => {
  return (
    <>
      <Modal
        className="wrapper"
        title="Course Preview"
        visible={showModal}
        onCancel={() => setShowModal(!showModal)}
        width={720}
        footer = {null}
      >
        <ReactPlayer
          url={preview}
          playing={showModal}
          controls={true}
          width="100%"
          height="100%"
        />
      </Modal>
    </>
  );
};

export default PreviewModal
