import React from "react";

const Contact = () => {
  return (
    <>
      <footer className="footer p-10  bg-[#2a2b2b] text-white">
        <div className="mx-16  ">
          <p className="font-bold text-3xl ">
            <span className="border-b-4 border-black">Get </span> In Touch{" "}
          </p>
          <p>Sipadol-08, Suryabinayak, Bhaktapur.</p>
          <p>Nepal</p>
          <p>adityajoshi316@gmail.com</p>
          <p>+977 9860709627</p>
          share : facebook twitter linkedin github
        </div>

        <div>
          <span className="text-lg font-bold">Provide Information</span>
          <div className="form-control w-80 bg-[#2a2b2b] border-none">
            <div className="form-control w-full max-w-xs border-none bg-[#2a2b2b]">
              <input
                type="text"
                placeholder="Name here*"
                className="input input-bordered w-full max-w-xs border-none"
              />

              <input
                type="text"
                placeholder="Email here*"
                className="input input-bordered w-full max-w-xs border-none my-4"
              />

              <textarea
                className="textarea"
                placeholder="message here"
              ></textarea>
            </div>
            <button className="btn btn-primary">Submmit</button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
