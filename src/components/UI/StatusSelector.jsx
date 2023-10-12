import { Controller } from "react-hook-form";
import { Listbox } from "@headlessui/react";

import BodyM from "./Typography/BodyM";

function StatusSelector({ title, control, selectedStatus, displayColumns }) {
  return (
    <div className="flex flex-col gap-2">
      <BodyM>Current Status</BodyM>
      <Controller
        control={control}
        name="status"
        render={({ field }) => (
          <Listbox
            as="div"
            value={selectedStatus}
            onChange={(e) => {
              field.onChange(e);
            }}
          >
            <Listbox.Button className="flex justify-between items-center w-full border py-2 px-4 border-linesLight dark:border-linesDark rounded text-sm leading-relaxed ui-open:border-mainPurple dark:ui-open:border-mainPurple">
              {selectedStatus.name}
              <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                <path
                  stroke="#635FC7"
                  strokeWidth="2"
                  fill="none"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </Listbox.Button>
            <Listbox.Options
              {...field}
              onChange={() => console.log("change")}
              className="sm:fixed sm:top-90 py-3 sm:w-[calc(100%-80px)] sm:max-w-[432px] bg-lightGray dark:bg-veryDarkGray rounded-lg flex flex-col"
            >
              {displayColumns.map((status) => (
                <Listbox.Option
                  onChange={() => console.log("change")}
                  key={status.id}
                  value={status}
                  className="py-1 px-4 text-mediumGray cursor-pointer hover:bg-mainPurple/20"
                >
                  {status.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        )}
      />
    </div>
  );
}

export default StatusSelector;
