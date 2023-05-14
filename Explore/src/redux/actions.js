export const putuser = ({ username, job  }) => {
    return {
        type: "PUTUSER",
        payload: { username, job }
    }
}