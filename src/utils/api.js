import axios from "axios";

const UploadFiles = async (files, e, setProgress) => {
    e.preventDefault(files);
    const form = new FormData();
    const onUploadProgress = (event) => {
        const percentage = Math.round((100 * event.loaded) / event.total);
        setProgress(curr => ({ ...curr, progress: percentage }))
    };
    for (let file in files)
        form.append("files", files[file])

    const config = {
        headers: {
            'CONTENT-TYPE': "application/json"
        },
        onUploadProgress: onUploadProgress
    }
    try {
        const res = await axios.post("predictor", form, config)
        localStorage.setItem("data", JSON.stringify(res.data));
        return res.data
    } catch (e) {
        throw new Error(`${e.response.statusText} | ${e.response.status}`);
    }
}

const ClearSession = async () => {
    try {
        const config = {
            headers: {
                'CONTENT-TYPE': "application/json",
            },
        }
        const { data, status } = await axios.post("predictor/clear-session", {}, config)
        return [data.error, status]
    } catch (e) {
        throw new Error(`${e?.response.statusText} | ${e?.response.status}`);
    }
}

export { UploadFiles, ClearSession };
