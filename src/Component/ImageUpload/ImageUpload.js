import React from "react";
import Dropzone from "react-dropzone";
import request from "superagent";
import "./imageupload.css";
import Framer from "../Framer";

const CLOUDINARY_UPLOAD_PRESET = "mvoiiayh";
const CLOUDINARY_UPLOAD_URL =
    " https://api.cloudinary.com/v1_1/dcykxiua2/image/upload";

export default class ImageUpload extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            uploadedFileCloudinaryUrl:
                "https://images.pexels.com/photos/813616/pexels-photo-813616.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            toptext: "Your text",
            bottomtext: "Goes here..",
        };
    }

    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0],
        });

        this.handleImageUpload(files[0]);
    }
    handleImageUpload(file) {
        let upload = request
            .post(CLOUDINARY_UPLOAD_URL)
            .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
            .field("file", file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }

            if (response.body.secure_url !== "") {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url,
                });
            }
        });
    }
    submitHandler(e) {
        e.preventDefault();
        this.setState({
            toptext: e.target[0].value,
            bottomtext: e.target[1].value,
        });
    }

    render() {
        return (
            <div className="wrapper">
                <div className="blob">
                    <Framer />
                </div>
                <div className="main">
                    <div className="left">
                        <div>
                            {this.state.uploadedFileCloudinaryUrl ===
                            "" ? null : (
                                <div>
                                    <img
                                        src={`https://api.memegen.link/images/custom/${this.state.toptext}/${this.state.bottomtext}.png?background=${this.state.uploadedFileCloudinaryUrl}`}
                                        alt="fetched"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="edits-container">
                            <form onSubmit={(e) => this.submitHandler(e)}>
                                <input placeholder="text at Top" />
                                <input placeholder="text at Bottom" />
                                <input type="submit" id="buton" />
                            </form>
                        </div>
                    </div>
                    <div className="upload">
                        {" "}
                        <Dropzone
                            onDrop={this.onImageDrop.bind(this)}
                            accept="image/*"
                            multiple={false}
                        >
                            {({ getRootProps, getInputProps }) => {
                                return (
                                    <div
                                        className="getprops"
                                        {...getRootProps()}
                                    >
                                        <input {...getInputProps()} />
                                        {
                                            <p>
                                                Try dropping some files here, or
                                                click to select files to upload.
                                            </p>
                                        }
                                    </div>
                                );
                            }}
                        </Dropzone>
                    </div>
                </div>
            </div>
        );
    }
}
