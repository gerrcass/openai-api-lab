//import Image from 'next/image'
'use client'

export default function Home() {

  const getMessages = async () => {
    console.log('clicked!')
    try {
      const options = {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "How are you?"
        })
      }
      const resposne = await fetch('/api/completions', options)
      const data = await resposne.json()
      console.log(data)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <div className="grid grid-cols-[minmax(150px,260px)_1fr] min-h-screen">
      <section className="bg-[#202123] text-white p-2">

        <button className="w-full text-sm flex items-center p-3 border border-[hsla(0,0%,100%,.2)] rounded-md transition hover:bg-[hsla(240,9%,59%,.1)]">
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          New Chat
        </button>
        <p className="text-xs p-3 text-[#d9d9e3] font-medium leading-4 pt-3 pb-2">Today</p>
        <ol>
          <li>
            <button className="w-full text-sm flex items-center gap-2 p-3 bg-[rgba(52,53,65,var(--tw-bg-opacity))] rounded-md">
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              JavaScript y Temas Web.
            </button>
          </li>
        </ol>
      </section>
      <main className="bg-white mx-auto px-6 flex flex-col">
        <div className="flex-1">
          <h1 className="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">ChatGPT</h1>
          <div className="flex flex-col md:flex-row gap-[0.875rem] max-w-[720px]">
            <div className="space-y-[0.875rem]">
              <h2 className="flex items-center gap-2 md:flex-col text-lg">
                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                Examples
              </h2>
              <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto text-sm">
                <li>
                  <button className="w-full bg-gray-50 p-3 rounded-md hover:bg-gray-200">"Explain quantum computing in simple terms" →</button>
                </li>
                <li>
                  <button className="w-full bg-gray-50 p-3 rounded-md hover:bg-gray-200">"Got any creative ideas for a 10 year old’s birthday?" →</button>
                </li>
                <li>
                  <button className="w-full bg-gray-50 p-3 rounded-md hover:bg-gray-200">"How do I make an HTTP request in Javascript?" →</button>
                </li>
              </ul>
            </div>
            <div className="space-y-[0.875rem]">
              <h2 className="flex items-center gap-2 md:flex-col text-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"></path></svg>
                Capabilities
              </h2>
              <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto text-sm">
                <li className="w-full bg-gray-50 p-3 rounded-md">Remembers what user said earlier in the conversation</li>
                <li className="w-full bg-gray-50 p-3 rounded-md">Allows user to provide follow-up corrections</li>
                <li className="w-full bg-gray-50 p-3 rounded-md">Trained to decline inappropriate requests</li>
              </ul>
            </div>
            <div className="space-y-[0.875rem]">
              <h2 className="flex items-center gap-2 md:flex-col text-lg">
                <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                Limitations
              </h2>
              <ul className="flex flex-col gap-3.5 w-full sm:max-w-md m-auto text-sm">
                <li className="w-full bg-gray-50 p-3 rounded-md">May occasionally generate incorrect information</li>
                <li className="w-full bg-gray-50 p-3 rounded-md">May occasionally produce harmful instructions or biased content</li>
                <li className="w-full bg-gray-50 p-3 rounded-md">Limited knowledge of world and events after 2021</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="">
          <form className="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
              <div className="">
                <div className="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center">
                </div>
              </div>
              <div className="flex flex-col justify-center w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] max-h-[200px] h-14 overflow-y-hidden">
                <textarea tabIndex="0" rows="1" placeholder="Send a message." className="m-0 w-full focus:outline-none resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 pl-2 md:pl-0">
                </textarea>
                <button onClick={getMessages} className="absolute p-1 rounded-md text-gray-500 hover:bg-gray-100  disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
