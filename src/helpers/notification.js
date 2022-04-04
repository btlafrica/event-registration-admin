import { CancelFilled, GreenCheckMark } from "assets";
import toast from "react-hot-toast";
export const notifyError = (message) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-red shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-white ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">
            <button onClick={() => toast.dismiss(t.id)}>
              <CancelFilled />
            </button>
          </div>
          <div className="ml-3 flex-1">
            <p className="mt-1 text-sm text-white">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-white">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
};

export const notifySuccess = (message) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-green shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-white ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-center">
          <div className="flex-shrink-0 pt-0.5">
            <GreenCheckMark />
          </div>
          <div className="ml-3 flex-1">
            <p className="mt-1 text-sm text-white">{message}</p>
          </div>
        </div>
      </div>
      <div className="flex border-l border-white">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-white hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Close
        </button>
      </div>
    </div>
  ));
};
