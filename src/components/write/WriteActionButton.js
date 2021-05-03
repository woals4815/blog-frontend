import React from "react";
import styled from "styled-components";
import Button from "../common/Button";

const WriteActionButtonBlock = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button + button {
        margin-left: 0.5rem;
    };
`;

const StyledButton = styled(Button)`
    height: 2.125rem;
    & + & {
        margin-left: 0.5rem;
    }
`;

const WriteActionButtons = ({onCancel, onPublish}) => {
    return (
        <WriteActionButtonBlock>
            <StyledButton cyan onClick={onPublish}>
                Publish your post
            </StyledButton>
            <StyledButton onClick={onCancel}>Cancel</StyledButton>
        </WriteActionButtonBlock>
    );
};

export default WriteActionButtons;