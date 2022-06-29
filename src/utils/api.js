import axios from "axios";

const UploadFiles = async (files, e) => {
    const form = new FormData();
    e.preventDefault(files);
    for (let file in files)
        form.append("files", files[file])

    // form.append("files", files[0])
    const config = {
        headers: {
            'CONTENT-TYPE': "application/json"
        }
    }
    try {
        const res = await axios.post("predictor", form, config)
        return res.data
    } catch (e) {
        throw new Error("Server side Error");
    }
}

export { UploadFiles };