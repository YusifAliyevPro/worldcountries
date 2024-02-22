"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import MapModal from "./mapModal";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ShowMore({ country }) {
  const router = useRouter();
  return (
    <div className="mb-10 w-full sm:w-3/5">
      <Accordion hideIndicator>
        <AccordionItem
          classNames={{
            title: " font-bold hover:text-gray-600",
          }}
          key="1"
          aria-label="Show More"
          className="showmore"
          title="Show More"
        >
          <div className=" flex-col text-base sm:flex-row flex justify-between">
            <div className="flex flex-col mb-10 gap-y-1 sm:gap-y-2">
              <p className="font-bold">
                Official Name:{" "}
                <span className="font-normal">{country.name.official}</span>
              </p>
              <p className="font-bold text-nowrap">
                Is country independent:{" "}
                <span className="font-normal">
                  {country.independent ? "Yes" : "No"}
                </span>
              </p>
              <p className="font-bold">
                Timezones:{" "}
                <span className="font-normal">
                  {country.timezones.map((timezone, index) => (
                    <span className="" key={index}>
                      {index > 0 && ", "}
                      <span>{timezone}</span>
                    </span>
                  ))}
                </span>
              </p>
            </div>
            <div className=" flex flex-col gap-y-2">
              <p className=" font-bold">
                Traffic:{" "}
                <span className="font-normal">
                  {country.car.side === "right"
                    ? "Right-hand traffic"
                    : "Left-hand traffic"}
                </span>
              </p>
              <p className="font-bold text-nowrap">
                Is country landlocked:{" "}
                <span className="font-normal">
                  {country.landlocked ? "Yes" : "No"}
                </span>
              </p>
              <p className="mr-5 font-bold">
                Member{" "}
                <abbr title="United Nations" className=" no-underline">
                  UN
                </abbr>
                :{" "}
                <span className="font-normal">
                  {" "}
                  {country.unMember ? "Yes" : "No"}
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 sm:gap-y-0 mt-8 sm:mt-0 sm:flex-row justify-between">
            <MapModal
              country={country}
              ButtonText="Click to show on map"
              mapOrCoat="map"
            />
            <MapModal
              country={country}
              ButtonText="Click to show coat of army"
              mapOrCoat="coat"
            />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
