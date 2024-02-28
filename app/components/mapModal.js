"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

export default function MapModal({ country, ButtonText, mapOrCoat }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [loaded, setLoaded] = useState(false);
  console.log(country.coatOfArms);

  return (
    <div>
      <p
        onClick={onOpen}
        className=" text-md w-fit hover:text-gray-600 cursor-pointer font-bold"
      >
        {ButtonText}
      </p>
      <Modal
        placement="center"
        isOpen={isOpen}
        size="3xl"
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="relative mx-4 my-4 flex items-center justify-center">
                  {mapOrCoat === "map" ? (
                    <iframe
                      src={`https://maps.google.com/maps?q=${country.latlng[0]},${country.latlng[1]}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
                      width={800}
                      height={500}
                      aria-label="GoogleMap"
                      loading="lazy"
                      className=" object-fill"
                    ></iframe>
                  ) : (
                    <div>
                      <div
                        className={`fixed left-1/2 right-1/2 mt-32 items-center justify-center ${loaded ? "hidden" : "flex"}`}
                      >
                        <p className="font-bold text-3xl">Loading...</p>
                      </div>
                      <Image
                        src={country.coatOfArms.svg}
                        width={400}
                        height={400}
                        onLoad={() => setLoaded(true)}
                        alt={country.flags.alt}
                        className="select-none bg-transparent object-fill"
                      />
                    </div>
                  )}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}