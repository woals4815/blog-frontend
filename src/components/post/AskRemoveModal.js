import React from "react";
import AskModal from "../common/AskModal";

const AskRemoveModal = ({visible, onConfirm, onCancel}) => {
    return (
        <AskModal
            visible={visible}
            title="Delete the Post?"
            description="Do you want to delete the post?"
            confirmText="Delete"
            onConfirm={onConfirm}
            onCancel={onCancel}
        />
    );
};

export default AskRemoveModal;