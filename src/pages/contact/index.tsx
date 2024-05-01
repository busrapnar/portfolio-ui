const Contact = () => {
  return (
    <div className="flex min-h-screen items-center justify-start">
      <div className="mx-auto w-full max-w-lg">
        <h1 className="text-4xl font-medium">Contact us</h1>
        <p className="mt-3">Email us at example@domain.com or message us here:</p>

        <form action="" className="mt-10">
          <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <input
                type="text"
                name="name"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" Your Name"
              />
              
            </div>
            <div>
              <input
                type="text"
                name="email"
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your Email"
              />
              
            </div>
            <div className=" col-span-2">
              <textarea
                name="message"
                rows={3}
                className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="mt-5 rounded-[4px] bg-black px-10 py-2 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
