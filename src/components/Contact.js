import React from "react";

export function Contact() {
  return (
    <div className="wrapper wrapper--contact">
      <div className="container">
        <h1 className="title">Contact</h1>

        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="mail">Email</label>
              <input
                type="email"
                name="mail"
                id="mail"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="comments">Comments</label>
              <textarea
                name="comments"
                id="comments"
                rows="5"
                className="form-control"
              />
            </div>
            <div className="mt-5 text-center">
              <button className="btn btn-warning btn-lg btn-block">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
