const Contact = () => {
  return (
    <div className="mt-20 flex">
      <div className="w-full max-w-5xl">
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl font-bold tracking-wide text-white">
            Let's Talk
          </h1>
          <p className="text-xl text-white text-opacity-45">
            Email us at example@domain.com or message us here:
          </p>
        </div>
        <form action="" method="POST" className="mt-5 flex flex-col gap-5">
          <div className="mb-5">
            <label className="mb-3 block text-base">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-full rounded-[6px] bg-accent border py-3 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@domain.com"
              className="w-full rounded-[6px] bg-accent border py-3 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label className="mb-3 block text-base">Message</label>
            <textarea
              rows={4}
              name="message"
              id="message"
              placeholder="Type your message"
              className="w-full resize-none rounded-[6px] bg-accent border py-3 px-6 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            ></textarea>
          </div>
          <div className="self-end">
            <button className="hover:shadow-form rounded-[6px] border border-indigo-500 py-3 px-8 text-base font-semibold text-white outline-none">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
