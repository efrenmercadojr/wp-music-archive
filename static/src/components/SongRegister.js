import React from "react";
import { Component } from "react";
import axios from "axios";

class SongRegister extends Component {
  state = {
    formFields: []
  };

  submitForm(e) {
    e.preventDefault();
    console.log(document.getElementById("image").value);

    const formData = new FormData();
    
    formData.append('title', document.getElementById("title").value)
    formData.append('artist', document.getElementById("artist").value)
    formData.append('length', document.getElementById("length").value)
    formData.append('views', document.getElementById("views").value)
    formData.append('image', document.getElementById("image").files[0])
    

    axios
      .post(
        "http://127.0.0.1:8000/api/songs/",
        formData, 
        {
          headers: {
            'content-type': 'multipart/form-data'
          }
        },
        response => {
          //alert("Song Successfully Registered!");
          console.log("Success");
        }
      )
      .then(response => {
        alert("Song Successfully Registered!");
        document.getElementById("title").value = null;
        document.getElementById("artist").value = null;
        document.getElementById("length").value = null;
        document.getElementById("views").value = null;
        document.getElementById("image").value = null;
      })
  }

  render() {
    return (
      <div className="col">
        <h1>Register a Song:</h1>
        <form>
          <div className="form-group">
            <label className="col-form-label">Title: </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title of song..."
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Artist/s: </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="artist"
                placeholder="Enter artist..."
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Length: </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="length"
                placeholder="Enter length(mm:ss) ..."
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Views: </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="views"
                placeholder="Enter number of views..."
              />
            </div>
          </div>
          <div className="form-group">
            <label form="col-form-label col-md-2">Cover Photo:</label>
            <div className="col" style={{ paddingLeft: "20px" }}>
              <input type="file" className="form-control-file" id="image" />
            </div>
          </div>
          <div className="submit">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submitForm.bind(this)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SongRegister;
