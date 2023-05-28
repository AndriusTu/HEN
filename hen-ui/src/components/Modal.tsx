import React from 'react';
import { ErrorCircleSVG } from '../assets/images/errorCircle';
import statusOptions from '../pages/updateParcelStatus/data/statusOptions';
import { Img } from './Img';

export type ModalProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{
    type: 'success' | 'error';
    className: string;
    isShow: boolean;
    onClose: () => void;
  }>;

const Modal: React.FC<React.PropsWithChildren<ModalProps>> = ({
  type,
  children,
  className,
  isShow,
  onClose,
  ...restProps
}) => {
  return isShow ? (
    <div
      className="relative align-middle w-1/5"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-start justify-center p-[20%] text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                  onClick={() => (onClose ? onClose() : null)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="flex flex-col justify-center items-center gap-6 p-6">
                  {type === 'success' ? (
                    <Img
                      src="images/img_checkmark.svg"
                      alt="success"
                    />
                  ) : null}
                  {type === 'error' ? (
                    <Img
                      src="images/img_close.svg"
                      alt="error"
                    />
                  ) : null}
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
